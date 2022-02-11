import API from "./";
import { IUser } from "../interfaces/entities";

export default new API<IUser>({ path: "users" });
