import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { 
  PROJECT_TASKS, 
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  TASK_STATUS,
  CURRENT_TASK
} from '../../types';


const TaskState = props => {
  const initialState = {
    tasks: [
      { id: 1, name: 'Choose Front-End Library', status: true, projectId: 1 },
      { id: 2, name: 'Choose Colors', status: false, projectId: 2 },
      { id: 3, name: 'Choose Payment Platform', status: false, projectId: 3 },
      { id: 4, name: 'Choose Deployment Method', status: true, projectId: 4 },
      { id: 5, name: 'Get Materialize color palette', status: true, projectId: 1 }
    ],
    projecttasks: null,
    errortask: false,
    selectedTask: null
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

  // Add a task to the selected project
  const addTask = task => {
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }

  // Validate and show error in case is needed
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    })
  }

  // Delete task via ID
  const deleteTask = id => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    })
  }

  // Change the status of each task
  const changeTaskStatus = task => {
    dispatch({
      type: TASK_STATUS,
      payload: task
    })
  }

  // Extract a given task for edition
  const saveCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.taks,
        projecttasks: state.projecttasks,
        errortask: state.errortask,
        selectedTask: state.selectedTask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeTaskStatus,
        saveCurrentTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;