import { createContext, useContext, useState, ReactNode } from "react";
import { NextComponentType } from "next";

import StatusAPI from "../api/status";
import TaskAPI from "../api/tasks";
import { Status, Task } from "../interfaces/entities";
import ContextArrayManager from "./context-manager";

interface Props {
    tasks: Task[];
    statuses: Status[];
    children: ReactNode;
}

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

export function KanbanProvider(props: Props) {
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
