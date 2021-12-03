import { DynamoDB } from 'aws-sdk';

let dynamoDBClient: DynamoDB.DocumentClient;

export const getDynamoDBClient = () => {
    if (!dynamoDBClient)
        dynamoDBClient = new DynamoDB.DocumentClient({
            region: 'localhost',
            endpoint: 'http://localhost:8000',
            accessKeyId: 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
            secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
        });
    return dynamoDBClient;
}