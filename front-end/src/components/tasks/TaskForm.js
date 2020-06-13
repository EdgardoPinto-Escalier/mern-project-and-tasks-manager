import React, { useContext, useState, useEffect } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { FaClipboardCheck } from 'react-icons/fa';

const TaskForm = () => {
  
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { selectedTask, errortask, addTask, validateTask, getTasks, updateTask } = tasksContext;

  // Effect that detects if a task has been selected
  useEffect(() => {
    if(selectedTask !== null) {
      saveTask(selectedTask)
    } else {
      saveTask({
        name: ''
      })
    }
  }, [selectedTask]);

  // Form state
  const [task, saveTask] = useState({
    name: ''

  })

  // Extract project name
  const { name } = task;

  // If there is not project selected...
  if (!project) return null;

  // Array destructuring to extract current project
  const [currentProject] = project;

  // Read values of the form
  const handleChange = e => {
    saveTask({
      ...task,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    
    // First we validate
    if(name.trim() === '') {
      validateTask();
      return;
    }

    // Small check to see if the task is new or for edit
    if(selectedTask === null) {
      // After that we add the new task to the task state
      task.projectId = currentProject.id;
      task.state = false;
      addTask(task);
    } else {
        // Update existent task
        updateTask(task);
    }

    // Get and filter the project tasks
    getTasks(currentProject.id);


    // Finally we restart the form
    saveTask({
      name: ''
    })
  }

  return (
    <div className="form">
      <form
        onSubmit={onSubmit}
      >
        <div className="container-input">
          <input 
            type="text"
            className="input-text"
            placeholder="Task Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="container-input">
          <button 
            type="text"
            className="btn btn-primary btn-submit btn-block"
          >
            <FaClipboardCheck className="fa-button" /> {selectedTask ? 'EDIT TASK' : 'ADD NEW TASK'} 
          </button>
        </div>
      </form>
      {errortask ? <p className="message error">THE TASK NAME IS REQUIRED</p> : null}
    </div>
  )
}

export default TaskForm;
