import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck, faTrashCan, faPen} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  // Todo List States
  const [todo, setTodo] = useState([
    // creating default task 
    {id:1, title: "Task 1", status: false},
    {id:2, title: "Task 2", status: true}
  ]);


  // Temporary or Initial States
  const [newTask, setNewTask] = useState('');
  const [updateTodo, setUpdateTodo] = useState('');


  // Add Todo task
  const addTask = () => {
    if (newTask.trim){
      let num = todo.length + 1
      let newEntry = {id: num, title: newTask, status: false}
      setTodo([...todo, newEntry])
      console.log([...todo, newEntry])
      setNewTask('')
    }

 
  }

  //Delete Todo task
  const deleteTask =(id) => {
    let newTasks =todo.filter (task => task.id !==id)
    setTodo(newTasks)
    
  }

  //mark task as done or completed
    const markDone =(id) => {
      let newTask =todo.map (task =>{

        if(task.id ==id) {
          return ({...task, status: !task.status})
        }
        return task
      })
      setTodo(newTask)

  }

  //cancel update
  const cancelUpdate =(id) => {

  }
  
  //change task for update. This listens to any change in an event.
  const changeTask =(e) => {

  }

  //update task
  const updateTask=() => {

  }

  return (
    <div className="container App">

      <br/>
      <h2>React Todo List </h2>
      <br/>
      <br/>

      {/* Creating a form to update Task */}
      <div className='row'>
        <div className='col'>
          <input className='form-control form-control-lg'></input>
        </div>
        
        <div className='col-auto'>
          <button className='btn btn-lg' style={{marginRight: 20, backgroundColor: '#572e9c', color: 'white'}}>Update</button>
          <button className='btn btn-lg' style={{color: '#572e9c', border: '1px solid ' }}> Cancel</button>
        </div>

      </div>
      <br/>


      {/* Creating a Form to Add new Task */}
      <div className='row'>
        <div className='col'>
          <input 
          value= {newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className='form-control form-control-lg'>
          </input>
        </div>

        <div className='col-auto'>
          <button className='btn btn-lg btn-success' onClick={addTask}>
            Add Task
          </button>
        </div>
        
      </div>
      <br/>

      {/* Displaying Todo Record */}

      {/* setting up a condition that display "No Tasks" if Todo is empty and the number of Task is null" */}
      {todo && todo.length ? '': 'No Tasks...'} 

      {/* sorting through the id of all task in the record to ensure a chronological arrangement */}
      {todo
      .sort((a, b) => a.id > b.id ? 1: -1)
      .map((task, index) => {
        console.log (task, index)

        return (
          <React.Fragment>

            <div className="col taskContainer">

              {/* declaring conditions for styling 'done' or completed task while 'Not Completed task hold no styling  */}
              <div className= {task.status? 'done': ''}>

                <span className="taskNumber">{index + 1}</span>
                <span className="taskText">{task.title}</span>

              </div>

              <div className="iconsContainer">

                {/* MarkDone icon */}
                <span title ='Completed/Not Completed' onClick={(e) => markDone(task.id)}>
                <FontAwesomeIcon icon={faCircleCheck} /></span>
                
                {/* Edit Icon */}
                <span title='Edit'>
                <FontAwesomeIcon icon={faPen} /></span>

                {/* Delete Icon */}
                <span title='Delete' onClick={()=> deleteTask(task.id)}>
                <FontAwesomeIcon icon={faTrashCan} /></span>

              </div>

            </div>
                      
                    

          </React.Fragment>
        )

      })}


    </div>
  );
}

export default App;
