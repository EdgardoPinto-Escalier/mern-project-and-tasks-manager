import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import { FaFolder, FaFolderPlus } from 'react-icons/fa';

const NewProject = () => {

  // Here we get the form state
  const projectsContext = useContext(projectContext);
  const { form } = projectsContext;

  // State for the project
  const [project, saveProject] = useState({
    name: ''
  });

  // Extract project name 
  const { name } = project;

  // Read the input content
  const onChangeProject = (e) => {
    saveProject({
      ...project,
      [e.target.name] : e.target.value
    })
  }

  // When the user sends a project
  const onSubmitProject = (e) => {
    e.preventDefault();
    
    // Validate project

    // Add project to the state

    // Restart the form

  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primary"
      > <FaFolder className="fa-button"/> NEW PROJECT</button>

      {
        form
        ? 
          (
            <form
              className="form-new-project"
              onSubmit={onSubmitProject}
            >
              <input
                type="text"
                className="input-text"
                placeholder="Project Name"
                name="name"
                value={name}
                onChange={onChangeProject}
              />

              <button
                type="submit"
                className="btn btn-block btn-primary"
              ><FaFolderPlus className="fa-button" /> ADD PROJECT</button>

            </form>
        ) : null
      }
    </Fragment>
  );
}

export default NewProject;

