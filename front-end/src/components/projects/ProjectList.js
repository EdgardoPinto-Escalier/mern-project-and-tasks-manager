import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ProjectList = () => {

  // Here we extract the projects from the initial state
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  // Get projects when the component is ready
  useEffect(() => {
    getProjects();
  }, []);

  // Small check to see if projects has any content
  if(projects.length === 0) return <p className="message error">NO PROJECTS AVAILABLE START CREATING ONE</p>;

  return (
    <ul className="project-list">
      {projects.map(project => (
        <Project 
          key={project.id}
          project={project}
          
        />
      ))}
    </ul>
  )
}

export default ProjectList;
