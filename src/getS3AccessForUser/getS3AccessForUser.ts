import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import { createPresignedPost, PresignedPost } from '@aws-sdk/s3-presigned-post'; 

const DURATION_SECONDS : number = 120;

export default async function getS3AccessForUser(uid : String) : Promise<PresignedPost> {
    return createPresignedPost(
        new S3Client(getS3ClientConfig()),
        {
            Bucket: process.env.s3bucket,
            Key: `${uid}/upload`,
            Expires: DURATION_SECONDS,
        });
}

function getS3ClientConfig() : S3ClientConfig {
    // if prod...
    // if devo...
    return {
        forcePathStyle : true,
        endpoint : `http://${process.env.s3host}:${process.env.s3port}`,
        credentials : {
            accessKeyId : process.env.s3accessKeyId,
            secretAccessKey : process.env.s3secretAccessKey,
        }
    };
}