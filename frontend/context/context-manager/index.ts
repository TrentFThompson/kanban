import { IAPI } from "../../api";
export default class ContextArrayManager<T> {
    api: IAPI<T>;
    setState: any;
    loggedIn: any;

    constructor({
        api,
        setState,
        loggedIn,
    }: {
        api: IAPI<T>;
        setState: any;
        loggedIn: any;
    }) {
        this.api = api;
        this.setState = setState;
        this.loggedIn = loggedIn;
    }

    async add(t: T) {
        await this.loggedIn();
        const newT = await this.api.add(t);
        this.setState((prevState: any) => [...prevState, newT]);
    }

    async remove(id: number) {
        await this.loggedIn();
        await this.api.remove(id);
        this.setState((prevState: any) =>
            prevState.filter((t: any) => t.id !== id)
        );
    }
}
