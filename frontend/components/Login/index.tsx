import { useState } from "react";

import buildHandleChange from "../../utils/handleChange";
import { useAuth } from "../../context/auth";

const DEFAULT_CREDENTIALS = {
    email: "",
    password: "",
};

export default function Login() {
    const [credentials, setCredentials] = useState(DEFAULT_CREDENTIALS);
    const handleChange = buildHandleChange(setCredentials);
    const { login } = useAuth();

    async function handleSubmit() {
        await login(credentials);
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
