import { initTRPC } from "@trpc/server";
import { z } from "zod";
import * as trpcExpress from "@trpc/server/adapters/express";
import { usersTable } from "../db/schema";
import { eq } from "drizzle-orm";
import { db } from "db";
import { createInsertSchema } from "drizzle-zod";

export const t = initTRPC.create();

const userInsertSchema = createInsertSchema(usersTable);

export const appRouter = t.router({
  getUser: t.procedure.query(async (opts) => {
    const users = await db.select().from(usersTable).all();
    return users;
  }),
  addUser: t.procedure.input(userInsertSchema).mutation(async ({input: user}) => {
    const u = await db.insert(usersTable).values(user).returning().get();
    return u;
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;
