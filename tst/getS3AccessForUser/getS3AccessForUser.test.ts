import { mocked } from 'ts-jest/utils';
import { createPresignedPost, PresignedPost } from '@aws-sdk/s3-presigned-post'; 
import getS3AccessForUser from 'src/getS3AccessForUser/getS3AccessForUser';
import { MockedFunctionDeep } from 'ts-jest/dist/utils/testing';
import { S3Client, } from '@aws-sdk/client-s3';

jest.mock('@aws-sdk/s3-presigned-post');

const mockCreatePresignedPost : MockedFunctionDeep<typeof createPresignedPost> = 
        mocked(createPresignedPost, true);

const UID = "1";
const BUCKET = "BUCKET";
const KEY = `${UID}/upload`;
const DURATION_SECONDS = 120;
const PRESIGNED_POST : PresignedPost = getFixturePresignedPost();

beforeAll(function(){
    process.env.s3host = 'localhost';
    process.env.s3port = '8000';
    process.env.s3accessKeyId = 's3accessKeyId';
    process.env.s3secretAccessKey = 's3secretAccessKey';
    process.env.s3bucket = BUCKET;
});

test('Gets S3 Access for User for BUCKET/KEY lasting DURATION_SECONDS', async function() {
    mockCreatePresignedPost.mockResolvedValue(PRESIGNED_POST);

    const presignedPost : PresignedPost = await getS3AccessForUser(UID);
    
    expect(presignedPost).toBe(PRESIGNED_POST);
    expect(mockCreatePresignedPost).toHaveBeenCalledWith(
        expect.any(S3Client), 
        {
            Bucket : BUCKET,
            Key : KEY,
            Expires: DURATION_SECONDS
        });
});

function getFixturePresignedPost() : PresignedPost {
    return {
        url : 'url',
        fields : {
            'field1' : 'field1',
            'field2' : 'field2'
        }
    };
}


