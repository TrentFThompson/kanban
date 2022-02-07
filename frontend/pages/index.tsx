import type { GetServerSidePropsContext, NextPage } from "next";

// Custom imports
import StatusAPI from "../api/status";
import TaskAPI from "../api/tasks";
import { IStatus, ITask } from "../interfaces/entities";
import { KanbanProvider } from "../context/kanban";
import Kanban from "../components/Kanban";

// Define the props for the page
interface Props {
    statuses: IStatus[];
    tasks: ITask[];
}

export default function IndexPage(props: Props) {
    return (
        <KanbanProvider tasks={props.tasks} statuses={props.statuses}>
            <Kanban />
        </KanbanProvider>
    );
}

// Load data for the homepage
export async function getServerSideProps(
    ctx: GetServerSidePropsContext
): Promise<{
    props: {
        statuses: IStatus[];
        tasks: ITask[];
    };
}> {
    return {
        props: {
            statuses: await StatusAPI.findAll(),
            tasks: await TaskAPI.findAll(),
        },
    };
}
