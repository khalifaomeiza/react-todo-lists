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

  console.log(todo)

  // Temporary or Initial States
  const [newTask, setNewTask] = useState('');
  const [updateTodo, setUpdateTodo] = useState('');


  // Add Todo task
  const addTask = () => {

 
  }

  //Delete Todo task
  const deleteTask =(id) => {

  }

  //mark task as done or completed
    const markDone =(id) => {

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
          <button className='btn btn-lg btn-success' style={{marginRight: 20}}>Update</button>
          <button className='btn btn-lg btn-warning'> Cancel</button>
        </div>
      </div>
      <br/>


      {/* Creating a Form to Add new Task */}
      <div className='row'>
        <div className='col'>
          <input className='form-control form-control-lg'>
          </input>
        </div>
        <div className='col-auto'>
          <button className='btn btn-lg btn-success'>
            Add Task
          </button>
        </div>
        
      </div>
      <br/>

      {/* Displaying Todo Record */}
      {todo && todo.length ? '': 'No Tasks...'}

      {todo
      .sort((a, b) => a.id > b.id ? 1: -1)
      .map((task, index) => {
        // console.log (task)
        return (
          <React.Fragment>

            <div className="col taskContainer">
              <div className= {task.status? 'done': ''}>

                <span className="taskNumber">{index + 1}</span>
               <span className="taskText">{task.title}</span>

              </div>
                <div className="iconsContainer">
                <span title ='Completed/ Not Completed'>
                <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span title='Edit'>
                <FontAwesomeIcon icon={faPen} />
                </span>
                <span title='Delete'>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>

            </div>

            </div>
            
            

          </React.Fragment>
        )

      })}


    </div>
  );
}

export default App;
