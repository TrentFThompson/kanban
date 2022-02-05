import { Task } from "../../interfaces/entities";
import { useKanban } from "../../context/kanban";

interface Props {
    task: Task;
}

export default function TaskView({ task }: Props) {
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
