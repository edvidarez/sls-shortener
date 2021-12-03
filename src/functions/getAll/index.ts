import { DynamoDB } from 'aws-sdk';

const getAllItems = async () => {
    const client = new DynamoDB.DocumentClient({
        region: 'localhost',
        endpoint: 'http://localhost:8000',
        accessKeyId: 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
        secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
    });
    const params = {
        TableName: 'URLS',
    };
    const scanResults = [];
    const items = await client.scan(params).promise();
    items.Items.forEach((item) => scanResults.push(item));
    console.log('scanResults', scanResults)
    return scanResults;
}



const getAll = async () => {
    return getAllItems();
}
export { getAll };