import React from 'react';

export default function Task({task}) {
  return (
    <li className="task shade">
      <p>{task.name}</p>
      <div className="status">
        {task.status
        ?
          (
            <button
              type="button"
              className="done"
            >
              DONE
            </button>
          )
        :
          (
            <button
              type="button"
              className="pending"
            >
              PENDING
            </button>
          )
        }
      </div>
      <div className="actions">
        <button
          type="button"
          className="btn btn-primary"
        >EDIT</button>
        <button
          type="button"
          className="btn btn-secondary"
        >REMOVE</button>
      </div>
    </li>
  )
}
