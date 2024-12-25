import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as trpcExpress from "@trpc/server/adapters/express";
import { usersTable } from "../db/schema";
import { eq } from "drizzle-orm";


const client = createClient({ url: process.env.DB_FILE_NAME! });
const db = drizzle({ client });

// created for each request
export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({ db }); 

type Context = Awaited<ReturnType<typeof createContext>>;

export const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query( async (opts) => {
    const email = opts.input
    const user = await opts.ctx.db.select().from(usersTable).where(eq(usersTable.email, email)).get();
    return user
  }),
  a: t.procedure.query(() => 1)
});


export type AppRouter = typeof appRouter;
