import { ITask, IStatus } from "../../interfaces/entities";
import RemoveStatus from "./RemoveStatus";
import TaskView from "./TaskView";

interface Props {
    status: IStatus;
    tasks: ITask[];
}

export default function StatusColumn({ status, tasks }: Props) {
    return (
        <div>
            <h1>{status.title}</h1>
            <RemoveStatus id={status.id!} />
            {tasks.map((task: ITask) => (
                <div key={task.id}>
                    <TaskView task={task}></TaskView>
                </div>
            ))}
        </div>
    );
}
