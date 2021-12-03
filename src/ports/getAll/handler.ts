import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { getAll } from '../../functions/getAll';

const handler: ValidatedEventAPIGatewayProxyEvent = async (event) => {

    const results = await getAll();


    return formatJSONResponse({
        message: results,
        // event,
    });
}

export const main = middyfy(handler);
