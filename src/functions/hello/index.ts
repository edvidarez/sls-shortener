// var AWS = require('aws-sdk');
import { DynamoDB } from 'aws-sdk';
import { KeyObject } from 'crypto';

const insertItem = async (email: string) => {
  const client = new DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
    secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
  });
  const params = {
    TableName: 'URLS',
  };
  const response = await client.put({
    TableName: 'URLS',
    Item: {
      email
    }
  }).promise();
  const scanResults = [];
  const items = await client.scan(params).promise();
  items.Items.forEach((item) => scanResults.push(item));
  console.log('scanResults', scanResults)
  // console.log('response', response.$response)
}



const hello = async (name: string) => {
  await insertItem(name);
  return `Saludos ${name}, welcome to the exciting Serverless world!`;
}
export { hello };