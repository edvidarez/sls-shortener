import { getDynamoDBClient } from "@libs/dynamoDB";
import { DynamoDB } from "aws-sdk";

const getAllItems = async () => {
  const client: DynamoDB.DocumentClient = getDynamoDBClient();
  const params: DynamoDB.DocumentClient.ScanInput = {
    TableName: "URLS",
  };
  const scanResults = [];
  const items = await client.scan(params).promise();
  items.Items.forEach((item) => scanResults.push(item));
  // console.log('scanResults', scanResults)
  return scanResults;
};

const getAll = async () => {
  return getAllItems();
};
export { getAll };
