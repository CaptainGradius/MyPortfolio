import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import cooperVrStatic from '../assets/cooper-vr-static.png';
import trashDayStatic from '../assets/trash-day-static.png';
import breakingNewsGif from '../assets/breaking-news-gif.gif';
import swipeToUnlockStatic from '../assets/swipe-to-unlock-static.png';
import vertigoGift from '../assets/vertigo-gif1.gif';

const projectsData = [
  {
    id: 'breaking-news',
    title: 'Breaking News',
    category: 'Award Winning Interactive Experience',
    gifImage: breakingNewsGif,
    description: 'Award Winning Nostalgic Interactive Experience',
  },
  {
    id: 'cooper-vr',
    title: 'Cooper VR',
    category: 'Funded VR & AI Project',
    gifImage: cooperVrStatic,
    description: 'Funded academic project that uses VR and AI to practice social interaction.',
  },
  {
    id: 'galaxy-eggs',
    title: 'Galaxy Eggs',
    category: 'Top-Tier NFT Art Collection',
    gifImage: 'https://static.wixstatic.com/media/d55833_75b7129dd84840b2aec8954490154ab4~mv2.jpg/v1/fill/w_1380,h_1237,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d55833_75b7129dd84840b2aec8954490154ab4~mv2.jpg',
    description: 'Top-tier art collection featuring 3D rendered universes by Gal Barkan',
  },
  {
    id: 'trash-day',
    title: 'Trash Day',
    category: 'Casual Endless-Runner Mobile Game',
    gifImage: trashDayStatic,
    description: 'Casual Mobile for high-paced street cleaning',
  },
  {
    id: 'swipe-to-unlock',
    title: 'Swipe to Unlock',
    category: 'Social Horror Game',
    gifImage: swipeToUnlockStatic,
    description: 'Social Game for brave people who got nothing to hide',
  },
  {
    id: 'vertigo',
    title: 'Vertigo',
    category: 'Endless Runner Game',
    gifImage: vertigoGift,
    description: 'Outmaneuver creeping spiders and hungry plants to light up your escape from the dark greenhouse',
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section className="projects-grid">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} onClick={handleClick} />
      ))}
    </section>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={() => onClick(project.id)}>
      <div className="project-thumbnail">
        <img src={project.gifImage} alt={project.title} loading="lazy" />
        <div className="overlay">
          <p>{project.description}</p>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-category">{project.category}</p>
      </div>
    </div>
  );
};

export default Projects;
