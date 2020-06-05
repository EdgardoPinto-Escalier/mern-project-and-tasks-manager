import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';


const TaskState = props => {
  const initialState = {
    tasks: [
      { name: 'Choose Front-End Library', status: true, projectId: 1 },
      { name: 'Choose Colors', status: false, projectId: 2 },
      { name: 'Choose Payment Platform', status: false, projectId: 3 },
      { name: 'Choose Deployment Method', status: true, projectId: 4 },
    ],
  }

  // Create dispatch and state
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.taks
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;