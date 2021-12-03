import { DynamoDB } from "aws-sdk";
import { getDynamoDBClient } from "../../libs/dynamoDB";
import { generateKeys } from "../../libs/KGS";

export type CreateURLPayload = {
  originalUrl: string;
  userId: string;
  customAlias?: string;
  expireDate: number;
};

export const createURL = async ({
  originalUrl,
  userId,
  customAlias,
  expireDate = Math.floor(new Date().getTime() / 1000),
}: CreateURLPayload) => {
  const dbClient = getDynamoDBClient();
  console.log("customAlias || generateKeys()", customAlias || generateKeys());

  const urlHash = customAlias || generateKeys();
  const params: DynamoDB.DocumentClient.PutItemInput = {
    TableName: "URLS",
    Item: {
      userId,
      originalUrl,
      urlHash,
      timesAccessed: 0,
      ttl: expireDate,
    },
  };

  const response = await dbClient.put(params).promise();
  console.log("response.$response", response.$response.data);
  return {
    urlHash,
  };
};
