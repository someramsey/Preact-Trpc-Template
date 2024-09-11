import { trpc } from "../../utils/trpc";

export function Home() {
    const userListQuery = trpc.userList.useQuery("dw");

    return (
        <>
            dw

            <div>
                <p>{userListQuery.data?.dw}</p>
            </div>
        </>
    );
}