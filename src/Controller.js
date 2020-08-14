import React, {useState} from 'react';
import {Col} from 'reactstrap';
import Task from './Task';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Label, Input} from "reactstrap";

function Controller(props) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [newTitle, setNewTitle] = useState()

    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>Add New Task</Button>

            <Modal isOpen={isModalOpen}>
                <ModalHeader> Add New Task</ModalHeader>
                <ModalBody>
                    <Label>New Task</Label>
                    <Input type='text' value={newTitle} onChange ={(e) => setNewTitle(e.target.value)}> </Input>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => props.addNewTask(newTitle)}>Add New Task</Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Controller;
