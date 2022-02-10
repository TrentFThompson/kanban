import { useAuth } from "../../context/auth";

export default function Logout() {
    const { logout } = useAuth();
    return <button onClick={logout}>Logout</button>;
}
