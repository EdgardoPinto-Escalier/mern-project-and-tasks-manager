import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { FaFolder } from 'react-icons/fa';

const Project = ({ project }) => {
  const projectsContext = useContext(projectContext);
  const { currentProject } = projectsContext;

  // Get the task context function
  const tasksContext = useContext(taskContext);
  const {getTasks} = tasksContext;

  // Function to add current project
  const selectProject = id => {
    currentProject(id);
    getTasks(id); // Filter tasks when click
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={ () => selectProject(project.id) }
      ><FaFolder className="fa-button purple"/> {project.name}</button>
    </li>
  )
}

export default Project;
