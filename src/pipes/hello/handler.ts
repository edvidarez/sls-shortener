import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

import { hello } from "../../functions/hello";
import helloSchema from "./schemas/hello";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof helloSchema> = async (
  event
) => {
  const { name } = event.queryStringParameters;
  const saludo = await hello(name);

  return formatJSONResponse({
    message: saludo,
  });
};

export const main = middyfy(handler);
