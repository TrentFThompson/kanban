import { ITask } from "../../interfaces/entities";
import { useKanban } from "../../context/kanban";

interface IProps {
    task: ITask;
}

export default function TaskView({ task }: IProps) {
    const { TaskManager } = useKanban();

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={async () => TaskManager?.remove(task.id!)}>
                Remove
            </button>
        </div>
    );
}
