import backend from "../lib/backend";

export default async function loggedIn(cookie: any) {
    try {
        await backend.get("logged_in", {
            headers: {
                cookie,
            },
        });
        return true;
    } catch {
        return false;
    }
}
