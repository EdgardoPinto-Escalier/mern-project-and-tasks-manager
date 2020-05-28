import React, { Fragment, useState } from 'react';


const NewProject = () => {

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
      > NEW PROJECT</button>

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
        >ADD PROJECT</button> 

      </form>
    </Fragment>
  );
}

export default NewProject;

