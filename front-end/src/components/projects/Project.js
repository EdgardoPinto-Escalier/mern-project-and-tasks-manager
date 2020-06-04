import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext';
import { FaFolder } from 'react-icons/fa';

const Project = ({ project }) => {
  const projectsContext = useContext(projectContext);
  const { currentProject } = projectsContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={ () => currentProject(project.id) }
      ><FaFolder className="fa-button purple"/> {project.name}</button>
    </li>
  )
}

export default Project;
