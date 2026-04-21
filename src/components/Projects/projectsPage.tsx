
import './projectsPage.css';
import Project from '../Project/project';

import edaImg from '../../assets/EDA.jpg';
import mulImg from '../../assets/MUL.jpg';
import rapidImg from '../../assets/Rapid.jpg';
import aquabuildImg from '../../assets/Aquabuild.png';
import crankyCarImg from '../../assets/CrankyCar.png';
import sjsImg from '../../assets/SJS.png';
import mmImg from '../../assets/MM.png';
import stealthxImg from '../../assets/StealthX.png';
import segImg from '../../assets/SEG.jpg';
import virusWarriorImg from '../../assets/VirusWarrior.png';
import keyToLightImg from '../../assets/KeyToLight.png';
import nemoImg from '../../assets/Nemo.png';

const projectsData = [
  {
    imgSrc: edaImg,
    name: 'Exploratory Data Analysis of the YouTube Trending Videos Dataset',
    description: 'Exploratory Data Analysis project on YouTube Trending Videos Dataset using Python libraries such as Pandas, Matplotlib and Seaborn to derive insights and visualize trends in video popularity, categories, and viewer engagement over time.',
    link: 'https://pvs333.github.io/YT-Trending-Analysis/',
    type: 'Site',
  },
  {
    imgSrc: mulImg,
    name: 'Minesweeper Unlimited',
    description: 'The classic game rebuilt for Mobile devices featuring infinitely generating maps, dynamic themes, robust stats view and major QOL impovements',
    link: 'https://play.google.com/store/apps/details?id=com.PVSVideogames.MinesweeperUnlimited',
    type: 'Play Store',
  },
  {
    imgSrc: rapidImg,
    name: 'Rapid',
    description: 'An Open Source, Minimal app for speedcubing enthusiasts',
    link: 'https://github.com/pvs333/Rapid',
    type: 'GitHub',
  },
  {
    imgSrc: aquabuildImg,
    name: 'Aquabuild',
    description: 'Fifth Place winner of the Bureau of Indian Standards Game Development Hackathon 2025',
    link: 'https://pvs333.itch.io/aquabuild',
    type: 'itch.io',
  },
  {
    imgSrc: crankyCarImg,
    name: 'Cranky Car',
    description: 'A fun and challenging game made for the Kenney Game Jam 2025',
    link: 'https://pvs333.itch.io/cranky-car',
    type: 'itch.io',
  },
  {
    imgSrc: sjsImg,
    name: 'Super Jello Shootout',
    description: 'A local PvP game shootout that is super fun with friends',
    link: 'https://pvs333.itch.io/super-jello-shootout',
    type: 'itch.io',
  },
  {
    imgSrc: mmImg,
    name: 'Magnet Murderer',
    description: "A fun game about magnets, rocks and crushing red guys with it! Made for the Game Maker's Toolkit Game Jam 2021",
    link: 'https://pvs333.itch.io/magnet-murderer-post-jam',
    type: 'itch.io',
  },
  {
    imgSrc: stealthxImg,
    name: 'Project StealthX',
    description: 'A Work In Progress Turn Based Stealth Game that is touch friendly on browser',
    link: 'https://pvs333.itch.io/project-stealthx',
    type: 'itch.io',
  },
  {
    imgSrc: segImg,
    name: 'The Samsingh Egg Game',
    description: 'A remake of an old game that was playable on my old Sumsung TV. Made this so I can play it on the new TV!',
    link: 'https://pvs333.itch.io/the-samsingh-egg-game',
    type: 'itch.io',
  },
  {
    imgSrc: virusWarriorImg,
    name: 'Virus Warrior',
    description: 'My First Game!',
    link: 'https://pvs333.itch.io/virus-warrior',
    type: 'itch.io',
  },
  {
    imgSrc: keyToLightImg,
    name: 'Key To Light',
    description: 'Made for the Stay Safe! Game Jam 2020',
    link: 'https://pvs333.itch.io/key-to-light-game-jam-edition',
    type: 'itch.io',
  },
  {
    imgSrc: nemoImg,
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