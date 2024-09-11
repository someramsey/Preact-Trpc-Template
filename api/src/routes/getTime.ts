import { z } from "zod";
import { publicProcedure } from "../trpc";

export default publicProcedure
    .input(z.string())
    .query(async ({ input, ctx }) => {
        return `${input}: ${new Date().toISOString()}`;
    });