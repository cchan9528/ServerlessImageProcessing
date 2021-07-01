import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import { createPresignedPost, PresignedPost, PresignedPostOptions } from '@aws-sdk/s3-presigned-post'; 

export default async function getS3AccessForUser(uid : String) : Promise<PresignedPost> {
    return createPresignedPost(
        new S3Client(getS3ClientConfig()),
        getPresignedPostOptions(uid));
}

function getPresignedPostOptions(uid : String) : PresignedPostOptions {
    return {
        Bucket : process.env.S3_BUCKET,
        Key : `${uid}/${process.env.S3_KEYSUFFIX}`,
        Expires: Number.parseInt(process.env.S3_DURATIONSECONDS)
    }
}

function getS3ClientConfig() : S3ClientConfig {
    // if prod...
    // if devo...
    return {
        forcePathStyle : true,
        endpoint : `http://${process.env.S3_HOST}:${process.env.S3_PORT}`,
        credentials : {
            accessKeyId : process.env.S3_ACCESSKEYID,
            secretAccessKey : process.env.S3_SECRETACCESSKEY,
        }
    };
}