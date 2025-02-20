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
    id: 'trash-day',
    title: 'Trash Day',
    category: 'Casual Endless-Runner Game',
    gifImage: require('../assets/trash-day-static.png'),
    description: 'Casual Mobile for high-paced street cleaning',
    tags: ['mobile']
  },
  {
    id: 'vertigo',
    title: 'Vertigo',
    category: 'Endless-Runner Game',
    gifImage: require('../assets/vertigo-gif1.gif'),
    description: 'Outmaneuver spiders and hungry plants as you light your way out the dark greenhouse',
    tags: ['pc']
  },
  {
    id: 'galaxy-eggs',
    title: 'Galaxy Eggs',
    category: 'Top-Tier NFT Art Collection',
    gifImage: require('../assets/galaxy-eggs-static.png'),
    description: 'Sold out collection of 10,000 3D fully rendered universes by Gal Barkan',
    tags: ['nft', 'art']
  },
  {
    id: 'swipe-to-unlock',
    title: 'Swipe to Unlock',
    category: 'Social Game',
    gifImage: require('../assets/swipe-to-unlock-static.png'),
    description: 'Social Game for brave people who got nothing to hide',
    tags: ['party-game']
  }
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
