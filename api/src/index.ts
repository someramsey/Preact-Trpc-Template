import "dotenv/config";

import cors from 'cors';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { router } from './trpc';

import getTime from './routes/getTime';

const appRouter = router({
    getTime
});

const server = createHTTPServer({
    router: appRouter,
    middleware: cors({
        origin: "*"
    })
});

server.addListener("listening", () => {
    console.log(`Server started on port ${process.env.PORT}`);
});

server.listen(process.env.PORT);

export type AppRouter = typeof appRouter;