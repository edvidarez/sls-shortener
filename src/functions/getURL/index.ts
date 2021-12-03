import { DynamoDB } from 'aws-sdk';
import { getDynamoDBClient } from '../../libs/dynamoDB';



const getURL = async (shortId: string) => {
    const clientDB = getDynamoDBClient();
    const params = {
        TableName: "URLS",
        Key: { 'urlHash': shortId },
        UpdateExpression: "SET timesAccessed = timesAccessed + :incr",
        ExpressionAttributeValues: { ":incr": 1 },
        ReturnValues: "ALL_NEW"
    }
    const item = await clientDB.update(params).promise();
    console.log('item', item.Attributes);
    return item.Attributes;
}
export { getURL };