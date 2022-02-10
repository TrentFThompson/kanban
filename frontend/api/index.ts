import backend from "../lib/backend";

export interface IAPI<T> {
    path: string;
    findAll: () => Promise<T[]>;
    add: (t: T) => Promise<T>;
    remove: (id: number) => Promise<void>;
}

export default class API<T> implements IAPI<T> {
    path: string = "";

    constructor({ path }: { path: string }) {
        this.path = `/${path}`;
    }

    async findAll(): Promise<T[]> {
        return (await backend.get(this.path)).data;
    }

    async add(t: T): Promise<T> {
        return (await backend.post(this.path, t)).data;
    }

    async remove(id: number): Promise<void> {
        await backend.delete(`${this.path}/${id}`);
    }
}
