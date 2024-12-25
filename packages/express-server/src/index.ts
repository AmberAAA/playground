import express from "express";
import "dotenv/config";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter, createContext } from "./server";
import { expressHandler } from "trpc-playground/handlers/express";
export type { AppRouter } from "./server";

async function main() {
  const app = express();

  app.use(
    "/trpc-playground",
    await expressHandler({
      trpcApiEndpoint: "/trpc",
      playgroundEndpoint: "/trpc-playground",
      router: appRouter
    })
  );

  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  app.listen(3000);
}

main();
