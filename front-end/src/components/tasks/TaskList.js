import React, { Fragment } from 'react';
import Task from './Task';
import { FaRegTrashAlt } from 'react-icons/fa';

const TaskList = () => {

  const projectTasks = [
    { name: 'Choose Front-End Library', status: true},
    { name: 'Choose Colors', status: false },
    { name: 'Choose Payment Platform', status: false },
    { name: 'Choose Deployment Method', status: true },
  ];

  return (
    <Fragment>
      <h2>Project: Laravel Site</h2>

      <ul className="task-list">
        {projectTasks.length === 0
          ? (<li className="task"><p>No Tasks</p></li>)
          : projectTasks.map(task => (
              <Task
                task={task}
              />
          ))
        }
        <button
          type="button"
          className="btn btn-remove"
        ><FaRegTrashAlt className="fa-button"/>REMOVE PROJECT</button>
      </ul>
    </Fragment>
  );
}

export default TaskList;
