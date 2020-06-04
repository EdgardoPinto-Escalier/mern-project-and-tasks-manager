import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import { FaClipboardCheck } from 'react-icons/fa';

const TaskForm = () => {
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // If there is not project selected...
  if (!project) return null;

  // Array destructuring to extract current project
  const [currentProject] = project;

  return (
    <div className="form">
      <form>
        <div className="container-input">
          <input 
            type="text"
            className="input-text"
            placeholder="Task Name"
            name="name"

          />
        </div>
        <div className="container-input">
          <button 
            type="text"
            className="btn btn-primary btn-submit btn-block"
          >
            <FaClipboardCheck className="fa-button"/> ADD NEW TASK
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm;
