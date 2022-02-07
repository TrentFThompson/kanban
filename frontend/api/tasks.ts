import API from "./";
import { ITask } from "../interfaces/entities";

export default new API<ITask>({ path: "tasks" });
