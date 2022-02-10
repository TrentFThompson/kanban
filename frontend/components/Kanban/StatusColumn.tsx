import { ITask, IStatus } from "../../interfaces/entities";
import RemoveStatus from "./RemoveStatus";
import TaskView from "./TaskView";

interface IProps {
    status: IStatus;
    tasks: ITask[];
}

export default function StatusColumn({ status, tasks }: IProps) {
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
