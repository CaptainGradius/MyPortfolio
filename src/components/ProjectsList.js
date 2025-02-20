import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsList.css';

const projectsData = [
  {
    id: 'breaking-news',
    title: 'Breaking News',
    category: 'Nostalgic Interactive Experience',
    gifImage: require('../assets/breaking-news-gif.gif'),
    description: 'Nostalgic Chaotic Adventure where hitting the TV doesn’t just fix the picture - it transforms reality!',
    tags: ['alt-ctrl', 'pc'],
  },
  {
    id: 'cooper',
    title: 'Cooper',
    category: 'VR Social Interaction Trainer',
    gifImage: require('../assets/cooper-vr-static.png'),
    description: 'Practice social interactions in a safe environment using VR and AI',
    tags: ['vr', 'ai', 'research'],
  },
  {
    id: 'galaxy-eggs',
    title: 'Galaxy Eggs',
    category: 'Top-Tier NFT Art Collection',
    gifImage: 'https://static.wixstatic.com/media/d55833_75b7129dd84840b2aec8954490154ab4~mv2.jpg/v1/fill/w_1380,h_1237,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d55833_75b7129dd84840b2aec8954490154ab4~mv2.jpg',
    description: 'Sold out collection of 10,000 3D fully rendered universes by Gal Barkan',
    tags: ['nft', 'art']
  },
  {
    id: 'trash-day',
    title: 'Trash Day',
    category: 'Casual Endless-Runner Game',
    gifImage: require('../assets/trash-day-static.png'),
    description: 'Casual Mobile for high-paced street cleaning',
    tags: ['mobile']
  },
  {
    id: 'swipe-to-unlock',
    title: 'Swipe to Unlock',
    category: 'Social Game',
    gifImage: require('../assets/swipe-to-unlock-static.png'),
    description: 'Social Game for brave people who got nothing to hide',
    tags: ['party-game']
  },
  {
    id: 'vertigo',
    title: 'Vertigo',
    category: 'Endless-Runner Game',
    gifImage: require('../assets/vertigo-gif1.gif'),
    description: 'Outmaneuver spiders and hungry plants as you light your way out the dark greenhouse',
    tags: ['pc']
  },
];

const ProjectsList = () => {
  return (
    <section className="projects-list">
      {projectsData.map((project) => (
        <Link key={project.id} to={`/${project.id}`} className="project-card-link">
        <div key={project.id} className="project-card">
          <div className="project-image">
            <img src={project.gifImage} alt={project.title} loading="lazy" />
          </div>
          <div className="project-text">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">{project.category}</p>
            <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">
                #{tag}
              </span>
            ))}
          </div>
          </div>
        </div>
        </Link>
      ))}
    </section>
  );
};

export default ProjectsList;
