import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/* UPDATE TASK:  Creating a form to update Task */

const UpdateTaskForm = ({
  updateTodoData,
  editTask,
  updateTask,
  cancelUpdate,
}) => {
  return (
    <>
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
    </>
  );
};

export default UpdateTaskForm;
