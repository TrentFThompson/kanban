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
import { useAuth } from "./auth";

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

interface IProps {
    tasks: ITask[];
    statuses: IStatus[];
    children: ReactNode;
}

export function KanbanProvider(props: IProps) {
    const { loggedIn } = useAuth();
    const [tasks, setTasks] = useState(props.tasks);
    const [statuses, setStatuses] = useState(props.statuses);

    const TaskManager = new ContextArrayManager<ITask>({
        api: TaskAPI,
        setState: setTasks,
        loggedIn,
    });
    const StatusManager = new ContextArrayManager<IStatus>({
        api: StatusAPI,
        setState: setStatuses,
        loggedIn,
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
