import React, { useReducer } from 'react';
import {v4 as uuid } from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT } from '../../types';

const ProjectState = props => {
  const projects = [
    { id: 1, name: 'Laravel Site' },
    { id: 2, name: 'React Interface' },
    { id: 3, name: 'FlexBox Gallery' }
  ]
  const initialState = {
    projects: [],
    form: false
  }

  // Here we create a dispatch to execute the actions
  const [state, dispatch] = useReducer(projectReducer, initialState)

  // CRUD Functionality
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM
    })
  }

  // Here we get the projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    })
  }

  // Here we add a new project
  const addProject = project => {
    project.id = uuid();

    // Add the project in the state
    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }


  return(
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        showForm,
        getProjects,
        addProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState;