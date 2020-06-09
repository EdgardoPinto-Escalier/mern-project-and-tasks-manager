import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
      <TransitionGroup>
        {projects.map(project => (
          <CSSTransition
            key={project.id}
            timeout={200}
            classNames="project"
          >
            <Project
              project={project}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  )
}

export default ProjectList;
