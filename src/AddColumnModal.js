import React, {useState} from 'react';
import Task from './Task';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Label, Input, Row, Col} from "reactstrap";

function AddColumnModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [newTitle, setNewTitle] = useState();

    const addButtonHandler = () => {
        props.addNewColumn(newTitle)
        setIsModalOpen(false)
    }



    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>Add New Column</Button>

            <Modal isOpen={isModalOpen}>
                <ModalHeader> Add New Column</ModalHeader>
                <ModalBody>
                    <Label>New Column</Label>
                    <Input type='text' value={newTitle} onChange = {(e) => setNewTitle(e.target.value)}/>


                </ModalBody>
                <ModalFooter>
                    <Button onClick={addButtonHandler}>Submit</Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default AddColumnModal;
