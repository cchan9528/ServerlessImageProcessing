import axios, { AxiosResponse } from 'axios';
import handler from 'src/getS3AccessForUser/request';
import { MockedFunctionDeep, MockedObjectDeep } from 'ts-jest/dist/utils/testing';
import { mocked } from 'ts-jest/utils';
import getS3AccessForUser from 'src/getS3AccessForUser/getS3AccessForUser';
import APIGATEWAYPROXYEVENT from 'tst/fixtures/APIGatewayProxyEvent';
import CONTEXT from 'tst/fixtures/Context';
import PRESIGNED_POST from 'tst/fixtures/PresignedPost';

jest.mock('axios');
jest.mock('src/getS3AccessForUser/getS3AccessForUser');

const mockAxios : MockedObjectDeep<typeof axios> = mocked(axios, true);
const mockGetS3AccessForUser : MockedFunctionDeep<typeof getS3AccessForUser> = 
        mocked(getS3AccessForUser, true);

test('Handler for getS3AccessForUser', async function(){
    const AXIOS_RESPONSE : AxiosResponse = {
        data : {},
        status : 200,
        statusText : 'statusText',
        headers : {},
        config : {}
    };

    mockAxios.post.mockResolvedValue(AXIOS_RESPONSE);
    mockGetS3AccessForUser.mockResolvedValue(PRESIGNED_POST);

    const axiosResponse : AxiosResponse = await handler(APIGATEWAYPROXYEVENT, CONTEXT);

    expect(axiosResponse).toBe(AXIOS_RESPONSE);
});