import { useRouter } from "next/router";

import { useKanban } from "../../context/kanban";
import { IStatus, ITask } from "../../interfaces/entities";
import AddStatus from "./AddStatus";
import AddTask from "./AddTask";
import StatusColumn from "./StatusColumn";
import backend from "../../lib/backend";

export default function Kanban() {
    const { statuses, tasks } = useKanban();
    const router = useRouter();

    async function handleLogout() {
        await backend.delete("/logout");
        router.push("/login");
    }

    return (
        <div>
            <div>
                {/* Map the statuses to create the columns */}
                {statuses.map((status: IStatus) => {
                    return (
                        <div key={status.id}>
                            <StatusColumn
                                status={status}
                                tasks={tasks.filter(
                                    (task: ITask) =>
                                        task.status_id === status.id
                                )}
                            />
                        </div>
                    );
                })}
            </div>
            <AddStatus />
            {statuses.length > 0 && <AddTask />}
            <br />
            <br />
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
