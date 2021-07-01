import { mocked } from 'ts-jest/utils';
import { createPresignedPost, PresignedPost } from '@aws-sdk/s3-presigned-post'; 
import getS3AccessForUser from 'src/getS3AccessForUser/getS3AccessForUser';
import { MockedFunctionDeep } from 'ts-jest/dist/utils/testing';
import { S3Client, } from '@aws-sdk/client-s3';

jest.mock('@aws-sdk/s3-presigned-post');

const mockCreatePresignedPost : MockedFunctionDeep<typeof createPresignedPost> = 
        mocked(createPresignedPost, true);

const UID = "1";
const PRESIGNED_POST : PresignedPost = {
    url : 'url',
    fields : {
        'field1' : 'field1',
        'field2' : 'field2'
    }
};

test('Get S3 Access for User for BUCKET/KEY lasting DURATION_SECONDS', async function() {
    mockCreatePresignedPost.mockResolvedValue(PRESIGNED_POST);

    const presignedPost : PresignedPost = await getS3AccessForUser(UID);
    
    expect(presignedPost).toBe(PRESIGNED_POST);
    expect(mockCreatePresignedPost).toHaveBeenCalledWith(
        expect.any(S3Client), 
        {
            Bucket : process.env.S3_BUCKET,
            Key : `${UID}/${process.env.S3_KEYSUFFIX}`,
            Expires: Number.parseInt(process.env.S3_DURATIONSECONDS)
        });
});

