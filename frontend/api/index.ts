import axios from "axios";

import { apiUrl } from "../utils/url";

export interface IAPI<T> {
    path: string;
    findAll: () => Promise<T[]>;
    add: (t: T) => Promise<T>;
    remove: (id: number) => Promise<void>;
}

export default class API<T> implements IAPI<T> {
    path: string = "";

    constructor({ path }: { path: string }) {
        this.path = `${apiUrl}/${path}`;
    }

    async findAll(): Promise<T[]> {
        return (await axios.get(this.path)).data;
    }

    async add(t: T): Promise<T> {
        return (await axios.post(this.path, t)).data;
    }

    async remove(id: number): Promise<void> {
        await axios.delete(`${this.path}/${id}`);
    }
}
