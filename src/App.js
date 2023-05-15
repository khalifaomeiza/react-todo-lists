import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  // Todo List Dummy States
  const [todo, setTodo] = useState([
    // creating default task
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: true },
    { id: 3, title: "Task 3", status: true },
  ]);

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

      {/* UPDATE TASK:  Creating a form to update Task */}
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            value={updateTodoData && updateTodoData.title}
            onChange={(e) => editTask(e)}
          ></input>
        </div>

        <div className="col-auto">
          <button
            onClick={updateTask}
            className="btn btn-lg"
            style={{
              marginRight: 20,
              backgroundColor: "#572e9c",
              color: "white",
            }}
          >
            Update
          </button>
          <button
            onClick={cancelUpdate}
            className="btn btn-lg"
            style={{ color: "#572e9c", border: "1px solid " }}
          >
            Cancel
          </button>
        </div>
      </div>
      <br />

      {/* Creating a Form to Add new Task */}
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          ></input>
        </div>

        <div className="col-auto">
          <button className="btn btn-lg btn-success" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
      <br />

      {/* Displaying Todo Record */}

      {/* setting up a condition that display "No Tasks" if Todo is empty and the number of Task is null" */}
      {todo && todo.length ? "" : "No Tasks..."}

      {/* sorting through the id of all task in the record to ensure a chronological arrangement */}
      {todo
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((task, index) => {
          // console.log (task, index)

          return (
            <React.Fragment>
              <div className="col taskContainer">
                {/* declaring conditions for styling 'done' or completed task while 'Not Completed task hold no styling  */}
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                </div>

                <div className="iconsContainer">
                  {/* MarkDone icon */}
                  <span
                    title="Completed/Not Completed"
                    onClick={(e) => markDone(task.id)}
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>

                  {/* Making the Edit icon dependent on task states. Thus if task state is true (Completed) we get null (No Edit icon) */}

                  {task.status ? null : (
                    <span
                      title="Edit"
                      onClick={() =>
                        setUpdateTodoData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}

                  {/* Delete Icon */}
                  <span title="Delete" onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default App;
