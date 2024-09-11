import { trpc } from "../../utils/trpc";

export function Home() {
    const getTimeQuery = trpc.getTime.useQuery("Current time");

    return (
        <>
            <h1>Home</h1>
            <span>{getTimeQuery.data}</span>
        </>
    );
}