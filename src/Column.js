import React from 'react';
import {Col} from 'reactstrap';
import Task from './Task';

function Column(props) {

    const {tasks, changeTaskStatus, column} = props

    return (
    <div>
      <Col>

          <h3> {column.title} </h3>

          {tasks
              .filter(el => el.status === column.status)
              .sort((a, b) => a.priority - b.priority)
              .map(el => <Task task = {el} changeTaskStatus={changeTaskStatus} />)}

      </Col>
    </div>
  );
}
export default Column;
