import Head from "next/head";

import Signup from "../components/Signup";

export default function SignupPage() {
    return (
        <div>
            <Head>
                <title>Simple Kanban | Signup</title>
            </Head>
            <Signup />
        </div>
    );
}
