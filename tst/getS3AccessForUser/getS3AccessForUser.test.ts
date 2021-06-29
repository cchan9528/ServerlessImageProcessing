import { PresignedPost } from '@aws-sdk/s3-presigned-post';
import getS3AccessForUser from 'src/getS3AccessForUser/getS3AccessForUser';

const x : Promise<PresignedPost> = getS3AccessForUser('someUID');

test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3);
});