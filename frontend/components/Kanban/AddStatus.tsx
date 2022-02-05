import Modal from "react-modal";
import React, { useState } from "react";

import { useKanban } from "../../context/kanban";
import buildHandleChange from "../../utils/handleChange";
import { Status } from "../../interfaces/entities";

// Constants
const INITIAL_STATUS: Status = {
    title: "",
};

export default function AddStatus() {
    const { StatusManager } = useKanban();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState(INITIAL_STATUS);
    const handleChange = buildHandleChange<Status>(setStatus);

    async function onClick(status: Status) {
        await StatusManager?.add(status);
        closeModal();
    }

    function openModal() {
        setIsOpen(true);
        setStatus(INITIAL_STATUS);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Add Column</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add Column"
            >
                <h1>Add Column</h1>
                Title:
                <input
                    type="text"
                    value={status.title}
                    onChange={handleChange}
                    name="title"
                />
                <br />
                <button onClick={() => onClick(status)}>Submit</button>
                <button onClick={closeModal}>Cancel</button>
            </Modal>
        </div>
    );
}
