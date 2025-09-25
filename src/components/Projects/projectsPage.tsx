import React from 'react';
import './projectsPage.css';
import Project from '../Project/project';

const projectsData = [
  {
    imgSrc: '/src/assets/MUL.jpg',
    name: 'Minesweeper Unlimited',
    description: 'The classic game rebuilt for Mobile devices featuring infinitely generating maps, dynamic themes, robust stats view and major QOL impovements',
    link: 'https://play.google.com/store/apps/details?id=com.PVSVideogames.MinesweeperUnlimited',
    type: 'Play Store',
  },
  {
    imgSrc: '/src/assets/Rapid.jpg',
    name: 'Rapid',
    description: 'An Open Source, Minimal app for speedcubing enthusiasts',
    link: 'https://github.com/pvs333/Rapid',
    type: 'GitHub',
  },
];

const Projects = () => {
  return (
    <div className='projects'>
      <h1>PROJECTS</h1>
      <div className='projects-list'>
        {projectsData.map((project, idx) => (
          <Project
            key={idx}
            imgSrc={project.imgSrc}
            name={project.name}
            description={project.description}
            link={project.link}
            type = {project.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;