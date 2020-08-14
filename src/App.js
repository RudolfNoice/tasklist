import React, {useState} from 'react';
import {Container, Row,} from "reactstrap";
import Column from "./Column";
import Controller from "./Controller"

function App() {

  const taskList = [
      {id:Math.random(), name:'First', priority: 1, status:'todo'},
      {id:Math.random(), name:'Second', priority: 2, status:'todo'},
      {id:Math.random(), name:'Third', priority: 3, status:'todo'},
      {id:Math.random(), name:'Fourth', priority: 4, status:'todo'},
  ]

    const columnList = [
      {id:Math.random(), title:'To Do', status:'todo'},
      {id:Math.random(), title:'In Progress...', status:'progress'},
      {id:Math.random(), title:'Need To Review', status:'review'},
      {id:Math.random(), title:'Done!', status:'done'},
    ]

    const [tasks, setTasks] = useState(taskList)

    const statuses = ['todo', 'progress', 'review', 'done'];

    const taskPriority = [1, 2, 3, 4]

    const addNewTask = (newTitle) => {
        const newTask = {
            id:Math.random(),
            name: newTitle,
            priority: 4,
            status:'todo'
        }
        const newTasks = [...tasks, newTask]
        setTasks(newTasks)
    }

    const changeTaskStatus = (taskId, direction)=> {
      const newTask = tasks.map(el => {
          if (el.id === taskId) {
              if (direction === 'right')
                  el.status = statuses[statuses.indexOf(el.status) + 1]
              if (direction === 'left')
                  el.status = statuses[statuses.indexOf(el.status) - 1]
              if (direction === 'up')
                  el.priority = taskPriority[taskPriority.indexOf(el.priority) + 1]
              if (direction === 'down')
                  el.priority = taskPriority[taskPriority.indexOf(el.priority) - 1]

          }
          return el;
      })
      setTasks(newTask)
    }


    return (
    <div>
      <Container>
        <Row>

            <Controller addNewTask={addNewTask}/>
            {columnList.map(el => <Column tasks={tasks} column={el} changeTaskStatus={changeTaskStatus}/>)}

        </Row>
      </Container>
    </div>
  );
}

export default App;
