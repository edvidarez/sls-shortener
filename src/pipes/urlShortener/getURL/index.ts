import { handlerPath } from "@libs/handlerResolver";

export const getUrl = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "/{hashId}",
      },
    },
  ],
};
