import React, { useState } from "react";
import AddTaskForm from "./Components/AddTaskForm";
import UpdateTaskForm from "./Components/UpdateTaskForm";
import Todo from "./Components/Todo";
import "./App.css";

function App() {
  // Todo List Dummy States
  const [todo, setTodo] = useState([]);

  // Temporary or Initial States for Adding Task
  const [newTask, setNewTask] = useState("");

  // Temporary or Initial States for Updating Task
  const [updateTodoData, setUpdateTodoData] = useState(""); //setting states variable for Update

  // Add Todo task
  const addTask = (e) => {
    if (newTask) {
      let num = todo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setTodo([...todo, newEntry]);
      setNewTask("");
    }
  };

  //Delete Todo task
  const deleteTask = (id) => {
    let newTodoList = todo.filter((task) => task.id !== id);
    setTodo(newTodoList);
  };

  //mark task as done or completed
  const markDone = (id) => {
    let taskStatus = todo.map((task) => {
      if (task.id === id) {
        //returning the task as an object but toggles the status between the options of true and false.
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTodo(taskStatus);
  };

  //cancel update
  const cancelUpdate = (id) => {
    // setting the cancel update to the temp state of null
    setUpdateTodoData("");
  };

  //edit task for update. This listens to any change in an event.
  const editTask = (e) => {
    let newEntry = {
      id: updateTodoData.id,
      title: e.target.value,
      status: updateTodoData.status ? true : false,
    };
    setUpdateTodoData(newEntry);
  };

  //update task
  const updateTask = () => {
    let filterRecords = [...todo].filter(
      (task) => task.id !== updateTodoData.id
    );
    let updateTodoList = [...filterRecords, updateTodoData];
    setTodo(updateTodoList);
    setUpdateTodoData("");
  };

  return (
    <div className="container App">
      <br />
      <h2>React Todo List </h2>
      <br />
      <br />
      {/* Toggling Add/Update Task Form utilising the presence of TodoData once the Edit button is clicked*/}
      {updateTodoData ? (
        /* UPDATE TASK:  Creating a form to update Task */

        <UpdateTaskForm
          updateTodoData={updateTodoData}
          editTask={editTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}
      {/* Displaying Todo Record */}
      {/* setting up a condition that display "No Tasks" if Todo is empty and the number of Task is null" */}

      {todo.length > 0 ? "" : "No Tasks..."}

      <Todo
        todo={todo}
        markDone={markDone}
        setUpdateTodoData={setUpdateTodoData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
