import { createContext, useContext, useState } from "react";

import StatusAPI from "../api/status";
import TaskAPI from "../api/tasks";
import { Status, Task } from "../interfaces/entities";
import ContextArrayManager from "./context-manager";

export const KanbanContext = createContext<{
    statuses: Status[];
    tasks: Task[];
    TaskManager?: ContextArrayManager<Task>;
    StatusManager?: ContextArrayManager<Status>;
}>({
    statuses: [],
    tasks: [],
});

export function useKanban() {
    return useContext(KanbanContext);
}

export function KanbanProvider(props: any) {
    const [tasks, setTasks] = useState(props.tasks);
    const [statuses, setStatuses] = useState(props.statuses);
    const TaskManager = new ContextArrayManager<Task>({
        api: TaskAPI,
        setState: setTasks,
    });
    const StatusManager = new ContextArrayManager<Status>({
        api: StatusAPI,
        setState: setStatuses,
    });

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
