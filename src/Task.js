import React from 'react';
import './App.css';
import {Col, Card, CardBody, Button, Alert} from 'reactstrap';

function Task(props) {

    const alertColors = ['success', 'warning', 'danger', 'info']

    const {task, changeTaskStatus} = props

    return (
        <div>
            <Col>
                <Card>
                    <CardBody>

                        {task.name}

                        <Alert color={alertColors[task.priority]}>
                            {task.priority}
                            {task.priority !== 4 &&
                            <Button size='sm' onClick={() => changeTaskStatus(task.id, 'up')}>↑</Button>}
                            {' '}
                            {task.priority !== 0 &&
                            <Button size='sm' onClick={() => changeTaskStatus(task.id, 'down')}>↓</Button>}
                        </Alert>

                    </CardBody>

                    <CardBody>

                        {task.status !== 'todo' &&
                        <Button onClick={() => changeTaskStatus(task.id, 'left')}>←</Button>}
                        {task.status !== 'done' &&
                        <Button onClick={() => changeTaskStatus(task.id, 'right')}>→</Button>}

                    </CardBody>
                </Card>
            </Col>
        </div>

    );
}

export default Task;
