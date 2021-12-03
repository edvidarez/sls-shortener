import { getURL } from "@functions/urlShortener/getUrl";
import { middyfy } from "@libs/lambda";

const handler = async (event) => {
  const { hashId } = event.pathParameters;
  const result = await getURL(hashId);
  return {
    statusCode: 302,
    headers: {
      Location: result.originalUrl,
    },
    body: undefined,
  };
};

export const main = middyfy(handler);
