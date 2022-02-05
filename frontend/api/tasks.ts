import API from "./";
import { Task } from "../interfaces/entities";

export default new API<Task>({ path: "tasks" });
