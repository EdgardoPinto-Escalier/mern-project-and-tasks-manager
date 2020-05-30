import React from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import TaskForm from '../tasks/TaskForm';

const Projects = () => {
  return (
    <div className="container-app">
      <Sidebar />

      <div className="seccion-main">
        <Navbar />
        <main>
          <TaskForm />
          <div className="container-tasks">

          </div>
        </main>
      </div>
    </div>
  )
}

export default Projects;
