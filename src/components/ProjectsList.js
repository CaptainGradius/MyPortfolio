import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsList.css';
import projectsData from '../data/projectsData';

const ProjectsList = () => {
  return (
    <section className="projects-list">
      {projectsData.map((project) => (
        <Link key={project.id} to={`works/${project.id}`} className="project-card-link">
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
