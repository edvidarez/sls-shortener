import { getAll } from "@functions/urlShortener/getAllUrls";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";

const handler = async () => {
  const results = await getAll();
  return formatJSONResponse({ message: results });
};

export const main = middyfy(handler);
