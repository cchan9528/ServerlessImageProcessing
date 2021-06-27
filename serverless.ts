const offlineEnv = require('./config/offline.env');
import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
    service: {
        name: 'serverlessimageprocessing',
    },
    frameworkVersion: '2',
    custom: {
        webpack: {
            webpackConfig: './webpack.config.js',
            includeModules: true
        },
        s3: offlineEnv["serverless"]["plugins"]["serverless-s3-local"]
    },
    // Add the serverless-webpack plugin
    plugins: ['serverless-webpack', 'serverless-offline'],
    provider: {
        name: 'aws',
        runtime: 'nodejs12.x',
        apiGateway: {
            minimumCompressionSize: 1024,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
    },
    functions: {
        hello: {
            handler: 'handler.hello',
            events: [
                {
                    http: {
                        method: 'get',
                        path: 'hello',
                    }
                }
            ]
        }
    }
}

module.exports = serverlessConfiguration;
