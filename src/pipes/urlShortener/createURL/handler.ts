import { createURL } from "@functions/urlShortener/createUrl";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

const handler: ValidatedEventAPIGatewayProxyEvent = async (event) => {
  const results = await createURL(event.body);
  return formatJSONResponse({
    message: results,
  });
};

export const main = middyfy(handler);
