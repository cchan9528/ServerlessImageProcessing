import { PresignedPost } from "@aws-sdk/s3-presigned-post";

const PRESIGNED_POST : PresignedPost = {
    url : 'url',
    fields : {
        'field1' : 'field1',
        'field2' : 'field2'
    }
};

export default PRESIGNED_POST;