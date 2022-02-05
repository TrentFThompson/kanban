import API from "./";
import { Status } from "../interfaces/entities";

export default new API<Status>({ path: "statuses" });
