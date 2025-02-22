import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsList.css';
import projectsData from '../data/projectsData';

const ProjectsList = () => {
  return (
    <section className="projects-list">
      {projectsData.map((project) => {
        const isVideo = project.cover.includes('youtube.com') || project.cover.includes('vimeo.com'); // Check if the link is to an online video
        return (
          <Link key={project.id} to={`works/${project.id}`} className="project-card-link">
            <div key={project.id} className="project-card">
              <div className="project-image">
                {isVideo ? (
                  <iframe
                    src={project.cover}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    title="Project Video"
                  ></iframe>
                ) : (
                  <img src={project.cover} alt={project.title} loading="lazy" />
                )}
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
        );
      })}
    </section>
  );
};

export default ProjectsList;
