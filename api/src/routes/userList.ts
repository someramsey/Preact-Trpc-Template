import { z } from "zod";
import { publicProcedure } from "../trpc";

let x = 0;
export default publicProcedure
    .input(z.string())
    .query(async ({ input, ctx }) => {
        console.log("input:", input);


        return {
            dw: x++
        };
    });