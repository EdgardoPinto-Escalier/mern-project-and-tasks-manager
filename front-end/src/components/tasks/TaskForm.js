import React from 'react';
import { FaClipboardCheck } from 'react-icons/fa';

const TaskForm = () => {
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
            value="Add Task"
          >
            <FaClipboardCheck className="fa-button"/> ADD NEW TASK
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm;
