import React, { useState } from "react";
import Modal from "react-modal";

import { useKanban } from "../../context/kanban";
import { Task } from "../../interfaces/entities";
import buildHandleChange from "../../utils/handleChange";

// Constants
const INITIAL_TASK: Task = {
    title: "",
    description: "",
    status_id: 0,
};

export default function AddTask() {
    const { statuses, TaskManager } = useKanban();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [task, setTask] = useState(INITIAL_TASK);
    const handleChange = buildHandleChange<Task>(setTask);

    async function onClick() {
        await TaskManager?.add({
            ...task,
            status_id: task.status_id,
        });
        closeModal();
    }

    function openModal() {
        setIsOpen(true);
        setTask({ ...INITIAL_TASK, status_id: parseInt(`${statuses[0].id}`) });
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Add Task</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add Column"
            >
                <h1>Add Task</h1>
                Title:
                <input
                    type="text"
                    value={task.title}
                    onChange={handleChange}
                    name="title"
                />
                <br />
                Description:
                <input
                    type="text"
                    value={task.description}
                    onChange={handleChange}
                    name="description"
                />
                <br />
                Status:
                <select
                    value={task.status_id}
                    onChange={handleChange}
                    name="status_id"
                >
                    {statuses.map((status) => {
                        return (
                            <option key={status.id} value={status.id}>
                                {status.title}
                            </option>
                        );
                    })}
                </select>
                <br />
                <button onClick={onClick}>Submit</button>
                <button onClick={closeModal}>Cancel</button>
            </Modal>
        </div>
    );
}
