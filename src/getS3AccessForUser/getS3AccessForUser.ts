import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import { createPresignedPost, PresignedPost, PresignedPostOptions } from '@aws-sdk/s3-presigned-post'; 
import ENVIRONMENT from 'src/environment';


export default async function getS3AccessForUser(uid : String) : Promise<PresignedPost> {
    return createPresignedPost(
        new S3Client(getS3ClientConfig()),
        getPresignedPostOptions(uid));
}

function getPresignedPostOptions(uid : String) : PresignedPostOptions {
    return {
        Bucket : ENVIRONMENT.S3.BUCKET,
        Key : `${uid}/${ENVIRONMENT.S3.KEYSUFFIX}`,
        Expires: Number.parseInt(ENVIRONMENT.S3.DURATIONSECONDS)
    }
}

function getS3ClientConfig() : S3ClientConfig {
    // if prod...
    // if devo...
    return {
        forcePathStyle : true,
        endpoint : `http://${ENVIRONMENT.S3.HOST}:${ENVIRONMENT.S3.PORT}`,
        credentials : {
            accessKeyId : ENVIRONMENT.S3.ACCESSKEYID,
            secretAccessKey : ENVIRONMENT.S3.SECRETACCESSKEY,
        }
    };
}