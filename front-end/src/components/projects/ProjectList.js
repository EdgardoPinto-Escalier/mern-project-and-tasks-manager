import React from 'react';
import Project from './Project';
import { FaFolder } from 'react-icons/fa';

const ProjectList = () => {

  const projects = [
    {name: 'Laravel Site'},
    {name: 'React Interface'},
    {name: 'FlexBox Gallery'}
  ]

  return (
  
    <ul className="project-list">
      {projects.map(project => (
        <Project 
          project={project}
          
        />
      ))}
    </ul>
    
  )
}

export default ProjectList;
