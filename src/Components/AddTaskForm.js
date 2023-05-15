import React from "react";

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
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
    </>
  );
};

export default AddTaskForm;
