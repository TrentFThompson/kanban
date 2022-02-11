import { GetServerSidePropsContext } from "next";
import Head from "next/head";

import Login from "../components/Login";
import loggedIn from "../utils/loggedIn";

export default function LoginPage() {
    return (
        <div>
            <Head>
                <title>Simple Kanban | Login</title>
            </Head>
            <Login />
        </div>
    );
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
