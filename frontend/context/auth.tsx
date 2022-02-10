import { useRouter } from "next/router";
import { createContext, useContext, ReactNode } from "react";

import backend from "../lib/backend";

interface ICredentials {
    email: string;
    password: string;
}

export const AuthContext = createContext<{
    login: (credentials: ICredentials) => Promise<void>;
    loggedIn: () => Promise<void>;
    logout: () => Promise<void>;
}>({
    login: async (credentials: ICredentials) => {},
    loggedIn: async () => {},
    logout: async () => {},
});

export function useAuth() {
    return useContext(AuthContext);
}

interface IProps {
    children: ReactNode;
}

export function AuthProvider(props: IProps) {
    const router = useRouter();

    async function login(credentials: ICredentials) {
        try {
            await backend.post("/login", credentials);
            router.push("/");
        } catch {
            console.log("Error logging in");
        }
    }

    async function loggedIn() {
        try {
            await backend.get("logged_in");
        } catch {
            console.log("User not logged in");
            router.push("/login");
        }
    }

    async function logout() {
        await backend.delete("/logout");
        router.push("/login");
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                loggedIn,
                logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
