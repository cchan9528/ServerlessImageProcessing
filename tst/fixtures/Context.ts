import { Context } from "aws-lambda";

const CONTEXT : Context = {
    callbackWaitsForEmptyEventLoop : false, 
    functionName : 'functionName', 
    functionVersion : 'functionVersion', 
    invokedFunctionArn : 'invokedFunctionArn',
    memoryLimitInMB : 'memoryLimitInMB', 
    awsRequestId : 'awsRequestId', 
    logGroupName : 'logGroupName', 
    logStreamName : 'logStreamName',
    getRemainingTimeInMillis : () => 10000, 
    done : (err, res) => {return;}, 
    fail : (err) => {return;}, 
    succeed :  (res) => {return;}
};

export default CONTEXT;