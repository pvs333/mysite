import React from 'react';
import './project.css';

interface ProjectProps {
  imgSrc: string;
  name: string;
  description: string;
  link: string;
  type: string;
}

const Project: React.FC<ProjectProps> = ({ imgSrc, name, description, link, type }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <img src={imgSrc} alt={name} className="project-image"  />
        <div className="project-info">
          <h2 className="project-name">{name}</h2>
          <p className="project-description">{description}</p>
          <a href={link} className='project-link'>{type} Link </a>
        </div>
      </div>
    </div>
  );
};

export default Project;