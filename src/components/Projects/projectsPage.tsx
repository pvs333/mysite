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
  {
    imgSrc: '/src/assets/Aquabuild.png',
    name: 'Aquabuild',
    description: 'Fifth Place winner of the Bureau of Indian Standards Game Development Hackathon 2025',
    link: 'https://pvs333.itch.io/aquabuild',
    type: 'itch.io',
  },
  {
    imgSrc: '/src/assets/CrankyCar.png',
    name: 'Cranky Car',
    description: 'A fun and challenging game made for the Kenney Game Jam 2025',
    link: 'https://pvs333.itch.io/cranky-car',
    type: 'itch.io',
  },
  {
    imgSrc: '/src/assets/SJS.png',
    name: 'Super Jello Shootout',
    description: 'A local PvP game shootout that is super fun with friends',
    link: 'https://pvs333.itch.io/super-jello-shootout',
    type: 'itch.io',
  },
  {
    imgSrc: '/src/assets/MM.png',
    name: 'Magnet Murderer',
    description: "A fun game about magnets, rocks and crushing red guys with it! Made for the Game Maker's Toolkit Game Jam 2021",
    link: 'https://pvs333.itch.io/magnet-murderer-post-jam',
    type: 'itch.io',
  },
  {
    imgSrc: '/src/assets/StealthX.png',
    name: 'Project StealthX',
    description: 'A Work In Progress Turn Based Stealth Game that is touch friendly on browser',
    link: 'https://pvs333.itch.io/project-stealthx',
    type: 'itch.io',
  },
  {
    imgSrc: '/src/assets/SEG.jpg',
    name: 'The Samsingh Egg Game',
    description: 'A remake of an old game that was playable on my old Sumsung TV. Made this so I can play it on the new TV!',
    link: 'https://pvs333.itch.io/the-samsingh-egg-game',
    type: 'itch.io',
  },
  {
    imgSrc: '/src/assets/VirusWarrior.png',
    name: 'Virus Warrior',
    description: 'My First Game!',
    link: 'https://pvs333.itch.io/virus-warrior',
    type: 'itch.io',
  },
  {
    imgSrc: '/src/assets/KeyToLight.png',
    name: 'Key To Light',
    description: 'Made for the Stay Safe! Game Jam 2020',
    link: 'https://pvs333.itch.io/key-to-light-game-jam-edition',
    type: 'itch.io',
  },
  {
    imgSrc: '/src/assets/Nemo.png',
    name: 'Floppy Nemo',
    description: 'Made this to learn Godot Game Engine. A Flappy Bird Clone but with Two Controls.',
    link: 'https://pvs333.itch.io/floppy-nemo',
    type: 'itch.io',
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