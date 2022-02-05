import { IAPI } from "../../api";
export default class ContextArrayManager<T> {
    api: IAPI<T>;
    setState: any;

    constructor({ api, setState }: { api: IAPI<T>; setState: any }) {
        this.api = api;
        this.setState = setState;
    }

    async add(t: T) {
        const newT = await this.api.add(t);
        this.setState((prevState: any) => [...prevState, newT]);
    }

    async remove(id: number) {
        await this.api.remove(id);
        this.setState((prevState: any) =>
            prevState.filter((t: any) => t.id !== id)
        );
    }
}
