import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { PROJECT_TASKS } from '../../types';


const TaskState = props => {
  const initialState = {
    tasks: [
      { name: 'Choose Front-End Library', status: true, projectId: 1 },
      { name: 'Choose Colors', status: false, projectId: 2 },
      { name: 'Choose Payment Platform', status: false, projectId: 3 },
      { name: 'Choose Deployment Method', status: true, projectId: 4 },
      { name: 'Get Materialize color palette', status: true, projectId: 1 }
    ],
    projecttasks: null
  }

  // Create dispatch and state
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Create the functions here


  // Get the project tasks
  const getTasks = projectId => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.taks,
        projecttasks: state.projecttasks,
        getTasks
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;