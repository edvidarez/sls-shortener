import { handlerPath } from "@libs/handlerResolver";

export const getAll = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "getAll",
      },
    },
  ],
};
