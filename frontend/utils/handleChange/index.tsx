export default function buildHandleChange<T>(setState: Function) {
    return function handleChange(
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) {
        const { name, value } = e.target;
        setState((prevState: T) => ({ ...prevState, [name]: value }));
    };
}
