

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { getURL } from '../../functions/getURL';

const handler: ValidatedEventAPIGatewayProxyEvent = async (event) => {
    console.log('pathParameters', event.pathParameters);
    const { hashId } = event.pathParameters;
    const result = await getURL(hashId);
    console.log('item-result', result)
    return {
        statusCode: 302,
        headers: {
            Location: result.originalUrl
        }
    }
}

export const main = middyfy(handler);
