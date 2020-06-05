import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { FaRegTrashAlt, FaFolderPlus } from 'react-icons/fa';

const TaskList = () => {

  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  // Get the tasks of the project
  const tasksContext = useContext(taskContext);
  const { projecttasks } = tasksContext;

  // If there is not project selected...
  if (!project) return <h2><FaFolderPlus className="fa-button"/> PLEASE SELECT A PROJECT</h2>;

  // Array destructuring to extract current project
  const [currentProject] = project;


  // Delete a project
  const onClickEliminar = () => {
    deleteProject(currentProject.id);
  }

  return (
    <Fragment>
      <h2>Project: {currentProject.name}</h2>

      <ul className="task-list">
        {projecttasks.length === 0
          ? (<li className="task"><p>No Tasks</p></li>)
          : projecttasks.map(task => (
              <Task
                task={task}
              />
          ))
        }
        <button
          type="button"
          className="btn btn-remove"
          onClick={onClickEliminar}
        ><FaRegTrashAlt className="fa-button"/>REMOVE PROJECT</button>
      </ul>
    </Fragment>
  );
}

export default TaskList;
