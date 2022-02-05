import Modal from "react-modal";
import { useState } from "react";

import { useKanban } from "../../context/kanban";

interface Props {
    id: number;
}

export default function RemoveStatus({ id }: Props) {
    const { StatusManager } = useKanban();
    const [modalIsOpen, setIsOpen] = useState(false);

    async function onClick() {
        await StatusManager?.remove(id);
        closeModal;
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Remove</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add Column"
            >
                <h1>Are you sure?</h1>
                <p>
                    Removing a column will also remove all tasks within that
                    column.
                </p>
                <button onClick={onClick}>Confirm</button>
                <button onClick={closeModal}>Cancel</button>
            </Modal>
        </div>
    );
}
