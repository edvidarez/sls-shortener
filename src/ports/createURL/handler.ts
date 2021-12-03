import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { createURL } from '../../functions/createURL';

const handler: ValidatedEventAPIGatewayProxyEvent = async (event) => {

    console.log('event.body', event.body)
    const results = await createURL(event.body);
    console.log('results', results);
    return formatJSONResponse({
        message: results,
        // event,
    });
}

export const main = middyfy(handler);
