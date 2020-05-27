import React, { Fragment } from 'react';


const NewProject = () => {
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primary"
      > NEW PROJECT</button>

      <form
        className="form-new-project"
      >
        <input 
          type="text"
          className="input-text"
          placeholder="Project Name"
          name="name"
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

