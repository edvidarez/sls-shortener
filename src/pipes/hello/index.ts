// import schema from "../../schemas/hello";
import { handlerPath } from "@libs/handlerResolver";

export const hello = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "hello",
      },
    },
  ],
};
