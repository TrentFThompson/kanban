export interface Task {
    id?: number;
    title: string;
    description: string;
    status_id: number;
}

export interface Status {
    id?: number;
    title: string;
}
