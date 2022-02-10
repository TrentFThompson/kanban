import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";

import StatusAPI from "../api/status";
import TaskAPI from "../api/tasks";
import { IStatus, ITask } from "../interfaces/entities";
import ContextArrayManager from "./context-manager";

interface Props {
    tasks: ITask[];
    statuses: IStatus[];
    children: ReactNode;
}

export const KanbanContext = createContext<{
    statuses: IStatus[];
    tasks: ITask[];
    TaskManager?: ContextArrayManager<ITask>;
    StatusManager?: ContextArrayManager<IStatus>;
}>({
    statuses: [],
    tasks: [],
});

export function useKanban() {
    return useContext(KanbanContext);
}

export function KanbanProvider(props: Props) {
    const [tasks, setTasks] = useState(props.tasks);
    const [statuses, setStatuses] = useState(props.statuses);
    const TaskManager = new ContextArrayManager<ITask>({
        api: TaskAPI,
        setState: setTasks,
    });
    const StatusManager = new ContextArrayManager<IStatus>({
        api: StatusAPI,
        setState: setStatuses,
    });

    // Fetch initial tasks, statuses
    useEffect(() => {
        TaskAPI.findAll().then(setTasks);
        StatusAPI.findAll().then(setStatuses);
    }, []);

    return (
        <KanbanContext.Provider
            value={{
                statuses,
                tasks,
                StatusManager,
                TaskManager,
            }}
        >
            {props.children}
        </KanbanContext.Provider>
    );
}
