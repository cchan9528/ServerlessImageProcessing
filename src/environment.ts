export default {
    APIGATEWAY : {
        WS : {
            ENDPOINT : process.env.APIGATEWAY_WS_ENDPOINT
        }
    },
    S3 : {
        BUCKET : process.env.S3_BUCKET,
        KEYSUFFIX : process.env.S3_KEYSUFFIX,
        DURATIONSECONDS : process.env.S3_DURATIONSECONDS,
        HOST : process.env.S3_HOST,
        PORT : process.env.S3_PORT,
        ACCESSKEYID : process.env.S3_ACCESSKEYID,
        SECRETACCESSKEY : process.env.S3_SECRETACCESSKEY
    }
};