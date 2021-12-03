export const usersTables = {
  Type: "AWS::DynamoDB::Table",
  Properties: {
    TableName: "Users",
    AttributeDefinitions: [
      {
        AttributeName: "email",
        AttributeType: "S",
      },
    ],
    KeySchema: [
      {
        AttributeName: "email",
        KeyType: "HASH",
      },
    ],
    BillingMode: "PAY_PER_REQUEST",
  },
};
