export interface ITask {
    id?: number;
    title: string;
    description: string;
    status_id: number;
}

export interface IStatus {
    id?: number;
    title: string;
}

export interface IUser {
    id?: number;
    email: string;
    name: string;
    password?: string;
    password_confirmation?: string;
}
