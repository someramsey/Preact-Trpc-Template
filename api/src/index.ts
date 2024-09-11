import "dotenv/config";

import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import userList from './routes/userList';
import { router } from './trpc';

const appRouter = router({
    userList
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