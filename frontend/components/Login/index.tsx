import { useState } from "react";
import { useRouter } from "next/router";

import buildHandleChange from "../../utils/handleChange";
import backend from "../../lib/backend";

const DEFAULT_CREDENTIALS = {
    email: "",
    password: "",
};

export default function login() {
    const [credentials, setCredentials] = useState(DEFAULT_CREDENTIALS);
    const handleChange = buildHandleChange(setCredentials);
    const router = useRouter();

    async function handleSubmit() {
        try {
            await backend.post("/login", credentials);
            router.push("/");
        } catch {
            console.log("Error logging in");
        }
    }

    return (
        <div>
            <h1>Login</h1>
            Email:
            <input
                type="text"
                name="email"
                value={credentials.email}
                onChange={handleChange}
            />
            <br />
            Password:
            <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
            />
            <br />
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}
