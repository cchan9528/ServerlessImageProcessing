import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { PresignedPost } from '@aws-sdk/s3-presigned-post'; 
import getS3AccessForUser from './getS3AccessForUser';
import axios, { AxiosResponse } from 'axios';
import ENVIRONMENT from 'src/environment';

export default async function handler (
        event : APIGatewayProxyEvent, 
        context : Context) 
    : Promise<AxiosResponse> {

    const uid : String = event.requestContext.connectionId;
    
    let presignedPost : PresignedPost = null;
    let error : String = null;

    try {
        presignedPost = await getS3AccessForUser(uid);
    } catch (error) {
        error = JSON.stringify(error);
    }

    return await axios.post(
        `${ENVIRONMENT.APIGATEWAY.WS.ENDPOINT}/${uid}`, 
        {
            presignedPost,
            error 
        });
}