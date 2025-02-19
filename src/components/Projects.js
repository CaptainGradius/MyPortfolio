import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import cooperVrStatic from '../assets/cooper-vr-static.png';
import trashDayStatic from '../assets/trash-day-static.png';
import breakingNewsGif from '../assets/breaking-news-gif.gif';
import swipeToUnlockStatic from '../assets/swipe-to-unlock-static.png';
import vertigoGif from '../assets/vertigo-gif1.gif';

const projectsData = [
  {
    id: 'breaking-news',
    title: 'Breaking News',
    category: 'Award Winning Interactive Experience',
    gifImage: breakingNewsGif,
    description: 'Nostalgic Chaotic Adventure where hitting the TV doesn’t just fix the picture - it transforms reality!',
  },
  {
    id: 'cooper-vr',
    title: 'Cooper VR',
    category: 'A Funded VR & AI Project',
    gifImage: cooperVrStatic,
    description: 'Practice social interactions in a safe environment using VR and AI',
  },
  {
    id: 'galaxy-eggs',
    title: 'Galaxy Eggs',
    category: 'Top-Tier NFT Art Collection',
    gifImage: 'https://static.wixstatic.com/media/d55833_75b7129dd84840b2aec8954490154ab4~mv2.jpg/v1/fill/w_1380,h_1237,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d55833_75b7129dd84840b2aec8954490154ab4~mv2.jpg',
    description: 'Sold out collection of 10,000 3D fully rendered universes by Gal Barkan',
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
    category: 'Social Game',
    gifImage: swipeToUnlockStatic,
    description: 'Social Game for brave people who got nothing to hide',
  },
  {
    id: 'vertigo',
    title: 'Vertigo',
    category: 'Endless-Runner Game',
    gifImage: vertigoGif,
    description: 'Outmaneuver spiders and hungry plants as you light your way out the dark greenhouse',
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
