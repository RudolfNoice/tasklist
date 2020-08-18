import React, {useState} from 'react';
import Task from './Task';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Label, Input, Row, Col} from "reactstrap";

function AddTaskModal(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [newTitle, setNewTitle] = useState();

    const [newPriority, setNewPriority] = useState(4);

    const [newStatus, setNewStatus] = useState('todo')

    const addButtonHandler = () => {
        props.addNewTask(newTitle, newPriority, newStatus)
        setIsModalOpen(false)
    }



    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>Add New Task</Button>

            <Modal isOpen={isModalOpen}>
                <ModalHeader> Add New Task</ModalHeader>
                <ModalBody>
                    <Label>New Task</Label>
                    <Input type='text' value={newTitle} onChange = {(e) => setNewTitle(e.target.value)}/>

                    <Row>
                        <Col>
                            <Label>Priority</Label>
                            <Input type='select' value={newPriority} onChange = {(e) => setNewPriority(e.target.value)}>
                                <option value={4}>Low</option>
                                <option value={3}>Medium</option>
                                <option value={2}>High</option>
                                <option value={1}>Extreme</option>
                            </Input>
                        </Col>

                        <Col>
                            <Label>Status</Label>
                            <Input type='select' value={newStatus} onChange = {(e) => setNewStatus(e.target.value)}>
                                <option value={'todo'}>To Do</option>
                                <option value={'progress'}>Progress</option>
                                <option value={'review'}>Review</option>
                                <option value={'done'}>Done!</option>
                            </Input>
                        </Col>

                    </Row>
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

export default AddTaskModal;
