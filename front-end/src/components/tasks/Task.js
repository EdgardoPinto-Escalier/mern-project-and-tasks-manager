import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({task}) => {

  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks, changeTaskStatus } = tasksContext;

  const [currentProject] = project;

  // Function to delete task
  const removeTask = id => {
    deleteTask(id);
    getTasks(currentProject.id);
  }

  // Function that modifies the tasks status
  const changeStatus = task => {
    if(task.status) {
      task.status = false;
    } else {
      task.status = true;
    }
    changeTaskStatus(task);
  }

  return (
    <li className="task shade">
      <p>{task.name}</p>
      <div className="status">
        {task.status
        ?
          (
            <button
              type="button"
              className="done"
              onClick={() => changeStatus(task)}
            >
              DONE
            </button>
          )
        :
          (
            <button
              type="button"
              className="pending"
              onClick={() => changeStatus(task)}
            >
              PENDING
            </button>
          )
        }
      </div>
      <div className="actions">
        <button
          type="button"
          className="btn btn-primary-edit-task"
        >EDIT</button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => removeTask(task.id)}
        >REMOVE</button>
      </div>
    </li>
  );
}

export default Task;
