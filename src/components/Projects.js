import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const projectsData = [
  {
    id: 'breaking-news',
    title: 'Breaking News',
    staticImage: 'https://via.placeholder.com/200?text=Breaking+News',
    gifImage: 'https://via.placeholder.com/200?text=Breaking+News+Gif',
    description: 'A short description for Breaking News.',
  },
  {
    id: 'cooper-vr',
    title: 'Cooper VR',
    staticImage: 'https://via.placeholder.com/200?text=Cooper+VR',
    gifImage: 'https://via.placeholder.com/200?text=Cooper+VR+Gif',
    description: 'A short description for Cooper VR.',
  },
  {
    id: 'galaxy-eggs',
    title: 'Galaxy Eggs',
    staticImage: 'https://via.placeholder.com/200?text=Galaxy+Eggs',
    gifImage: 'https://via.placeholder.com/200?text=Galaxy+Eggs+Gif',
    description: 'A short description for Galaxy Eggs.',
  },
  {
    id: 'trash-day',
    title: 'Trash Day',
    staticImage: 'https://via.placeholder.com/200?text=Trash+Day',
    gifImage: 'https://via.placeholder.com/200?text=Trash+Day+Gif',
    description: 'A short description for Trash Day.',
  },
  {
    id: 'swipe-to-unlock',
    title: 'Swipe to Unlock',
    staticImage: 'https://via.placeholder.com/200?text=Swipe+to+Unlock',
    gifImage: 'https://via.placeholder.com/200?text=Swipe+to+Unlock+Gif',
    description: 'A short description for Swipe to Unlock.',
  },
  {
    id: 'vertigo',
    title: 'Vertigo',
    staticImage: 'https://via.placeholder.com/200?text=Vertigo',
    gifImage: 'https://via.placeholder.com/200?text=Vertigo+Gif',
    description: 'A short description for Vertigo.',
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
  const [imgSrc, setImgSrc] = useState(project.staticImage);

  return (
    <div className="project-card" onClick={() => onClick(project.id)}>
      <img
        src={imgSrc}
        alt={project.title}
        onMouseEnter={() => setImgSrc(project.gifImage)}
        onMouseLeave={() => setImgSrc(project.staticImage)}
      />
      <p>{project.description}</p>
    </div>
  );
};

export default Projects;
