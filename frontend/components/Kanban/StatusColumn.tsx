import { Task, Status } from "../../interfaces/entities";
import RemoveStatus from "./RemoveStatus";
import TaskView from "./TaskView";

interface Props {
    status: Status;
    tasks: Task[];
}

export default function StatusColumn({ status, tasks }: Props) {
    return (
        <div>
            <h1>{status.title}</h1>
            <RemoveStatus id={status.id!} />
            {tasks.map((task: Task) => (
                <div key={task.id}>
                    <TaskView task={task}></TaskView>
                </div>
            ))}
        </div>
    );
}
