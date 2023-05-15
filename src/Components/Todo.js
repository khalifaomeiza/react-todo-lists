import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, markDone, setUpdateTodoData, deleteTask }) => {
  return (
    /* sorting through the id of all task in the record to ensure a chronological arrangement */

    <>
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
    </>
  );
};

export default Todo;
