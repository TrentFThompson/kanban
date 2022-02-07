import API from "./";
import { IStatus } from "../interfaces/entities";

export default new API<IStatus>({ path: "statuses" });
