// import schema from '../../schemas/hello';
import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
        {
            http: {
                method: 'post',
                path: 'hello',
                // request: {
                //     schemas: {
                //         'application/json': schema
                //     }
                // }
            }
        }
    ]
}