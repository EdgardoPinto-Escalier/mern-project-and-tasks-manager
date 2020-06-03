import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { PROJECT_FORM, GET_PROJECTS } from '../../types';

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


  return(
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        showForm,
        getProjects
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState;