import type { GetServerSidePropsContext } from "next";
import Head from "next/head";

// Custom imports
import StatusAPI from "../api/status";
import TaskAPI from "../api/tasks";
import { IStatus, ITask } from "../interfaces/entities";
import { KanbanProvider } from "../context/kanban";
import Kanban from "../components/Kanban";
import loggedIn from "../utils/loggedIn";

// Define the props for the page
interface IProps {
    statuses: IStatus[];
    tasks: ITask[];
}

export default function IndexPage({ statuses, tasks }: IProps) {
    return (
        <KanbanProvider tasks={tasks} statuses={statuses}>
            <Head>
                <title>Simple Kanban | Dashboard</title>
            </Head>
            <Kanban />
        </KanbanProvider>
    );
}

// Load data for the homepage
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    if (await loggedIn(ctx.req.headers.cookie)) {
        return {
            props: {
                statuses: [], //await StatusAPI.findAll(),
                tasks: [], //await TaskAPI.findAll(),
            },
        };
    } else {
        return {
            redirect: {
                destination: "/login",
            },
            props: {},
        };
    }
}
