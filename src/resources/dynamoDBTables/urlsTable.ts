export const urlTable = {
  Type: "AWS::DynamoDB::Table",
  Properties: {
    TableName: "URLS",
    AttributeDefinitions: [
      {
        AttributeName: "urlHash",
        AttributeType: "S",
      },
    ],
    KeySchema: [
      {
        AttributeName: "urlHash",
        KeyType: "HASH",
      },
    ],
    TimeToLiveSpecification: {
      AttributeName: "ttl",
      Enabled: true,
    },
    BillingMode: "PAY_PER_REQUEST",
  },
};
