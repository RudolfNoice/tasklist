import React, {useState} from 'react';
import {Container, Row,} from "reactstrap";
import Column from "./Column";
import AddTaskModal from "./AddTaskModal"

function App() {

  const taskList = [
      {id:Math.random(), name:'First Task ', priority: 1, status:'todo'},
      {id:Math.random(), name:'Second Task ', priority: 2, status:'todo'},
      {id:Math.random(), name:'Third Task ', priority: 3, status:'todo'},
      {id:Math.random(), name:'Fourth Task ', priority: 4, status:'todo'},
  ]

    const columnList = [
      {id:Math.random(), title:'To Do', status:'todo'},
      {id:Math.random(), title:'In Progress...', status:'progress'},
      {id:Math.random(), title:'Need To Review', status:'review'},
      {id:Math.random(), title:'Done!', status:'done'},
    ]

    const [tasks, setTasks] = useState(taskList)

    const statuses = ['todo', 'progress', 'review', 'done'];

    const taskPriority = [4, 3, 2, 1]

    const addNewTask = (newTitle, newPriority, newStatus) => {
        const newTask = {
            id:Math.random(),
            name: newTitle,
            priority: newPriority,
            status: newStatus
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

    const deleteTask = (taskId) => {
        const newTasks = tasks.filter (el => el.id !== taskId)
    setTasks(newTasks)
    }



    return (
    <div>
      <Container>
        <Row>

            <AddTaskModal addNewTask={addNewTask}/>
            {columnList.map(el => <Column tasks={tasks} column={el} changeTaskStatus={changeTaskStatus} deleteTask={deleteTask}/>)}

        </Row>
      </Container>
    </div>
  );
}

export default App;
