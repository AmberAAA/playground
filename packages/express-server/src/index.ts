import express from "express";
import "dotenv/config";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./server";
import { expressHandler } from "trpc-playground/handlers/express";
export type { AppRouter } from "./server";
import cors from 'cors';

async function main() {
  const app = express();

  app.use(cors());

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
    })
  );
  app.listen(3000);
}

main();
