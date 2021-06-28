import { APIGatewayProxyHandler, APIGatewayProxyEvent, Context } from 'aws-lambda';
import { PresignedPost } from '@aws-sdk/s3-presigned-post'; 
import getS3AccessForUser from './getS3AccessForUser';
import axios from 'axios';

const APIGATEWAY = 'http://localhost:3001/@connections';

export default async function handler (
        event : APIGatewayProxyEvent, 
        context : Context) 
    : Promise<APIGatewayProxyHandler> {

    const uid : String = event.requestContext.connectionId;
    
    let presignedPost : PresignedPost = null;
    let error : String = null;

    try {
        presignedPost = await getS3AccessForUser(uid);
    } catch (error) {
        error = JSON.stringify(error);
    }

    return axios.post(`${APIGATEWAY}/${uid}`, {
        presignedPost,
        error
    });
}