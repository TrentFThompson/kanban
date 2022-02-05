import { useKanban } from "../../context/kanban";
import { Status, Task } from "../../interfaces/entities";
import AddStatus from "./AddStatus";
import AddTask from "./AddTask";
import StatusColumn from "./StatusColumn";

export default function Kanban() {
    const { statuses, tasks } = useKanban();

    return (
        <div>
            <div>
                {/* Map the statuses to create the columns */}
                {statuses.map((status: Status) => {
                    return (
                        <div key={status.id}>
                            <StatusColumn
                                status={status}
                                tasks={tasks.filter(
                                    (task: Task) => task.status_id === status.id
                                )}
                            />
                        </div>
                    );
                })}
            </div>
            <AddStatus />
            {statuses.length > 0 && <AddTask />}
        </div>
    );
}
