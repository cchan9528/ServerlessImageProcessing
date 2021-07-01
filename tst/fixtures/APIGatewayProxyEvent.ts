import {APIGatewayProxyEvent} from 'aws-lambda';

const APIGATEWAYPROXYEVENT : APIGatewayProxyEvent = {
    body : 'body', 
    headers : {},
    multiValueHeaders : {},
    path : 'path',
    pathParameters : {},
    httpMethod : 'GET',
    isBase64Encoded : true,
    queryStringParameters : {},
    multiValueQueryStringParameters : {}, 
    stageVariables : {}, 
    requestContext : {
        accountId : 'accountId',
        apiId : 'apiId', 
        authorizer : {}, 
        protocol : 'protocol', 
        httpMethod : 'httpMethod',
        identity : {
            accessKey : 'accessKey', 
            accountId : 'accountId', 
            apiKey : 'apiKey',
            apiKeyId : 'apiKeyId',
            caller : 'caller', 
            clientCert : {
                clientCertPem : 'clientCertPem', 
                serialNumber : 'serialNumber', 
                subjectDN : 'subjectDN', 
                issuerDN : 'issuerDN', 
                validity : {
                    notAfter : 'notAfter',
                    notBefore : 'notBefore'
                }
            }, 
            cognitoAuthenticationProvider : 'cognitoAuthenticationProvider', 
            cognitoAuthenticationType : 'cognitoAuthenticationType',
            cognitoIdentityId : 'cognitoIdentityId', 
            cognitoIdentityPoolId : 'cognitoIdentityPoolId', 
            principalOrgId : 'principalOrgId', 
            sourceIp : 'sourceIp',
            user : 'user', 
            userAgent : 'userAgent', 
            userArn : 'userArn'
        }, 
        path : 'path', 
        stage : 'stage', 
        requestId : 'requestId',
        requestTimeEpoch : 1, 
        resourceId : 'resourceId', 
        resourcePath : 'resourcePath'
    },
    resource: 'resource'
};

export default APIGATEWAYPROXYEVENT;