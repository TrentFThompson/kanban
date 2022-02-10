import { GetServerSidePropsContext } from "next";

import Login from "../components/Login";
import loggedIn from "../utils/loggedIn";

export default function LoginPage() {
    return <Login />;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    // If logged in redirect to dashboard
    if (await loggedIn(ctx.req.headers.cookie)) {
        return {
            redirect: {
                destination: "/",
            },
            props: {},
        };
    } else {
        // Otherwise show login page
        return {
            props: {},
        };
    }
}
