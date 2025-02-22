import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // If using React Router
import projectsData from '../data/projectsData';
import './ProjectPage.css';

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    if (project.video) {
      const iframe = document.querySelector("iframe");
      iframe.onload = () => setIsVideoLoading(false);
    }
  }, [project.video]);

  if (!project) return <p className="error-message">Project not found.</p>;

  return (
    <div className="project-container">
      {/* Header */}
      <div className="project-header">
        {/*if a video is available, display it, otherwise take the gif*/}
        {project.video ? (
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}>
            {isVideoLoading && <div className="loading-wheel"></div>}
            <div style={{ position: "relative", width: "100%", maxWidth: "800px", height: "0", paddingBottom: "56.25%" }}>
              <iframe
                src={project.video}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                title="Project Video"
                onLoad={() => setIsVideoLoading(false)}
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        ) : (
          <img src={project.gifImage} alt={project.title} className="project-gif" />
        )}
        <h1>{project.title}</h1>
      </div>
      <div className="project-body">
        <div className="project-description">
          {project.description.map((p, index) => (
            <p key={index}>{p.title ? <h2>{p.title}</h2> : null}{p.text}</p>
          ))}
          <div>
            {project.websites.map((website, index) => (
              <a key={index} href={website.link} target="_blank" rel="noopener noreferrer">
                {website.title}
              </a>
            ))}
          </div>
          <h2>Credit</h2>
          <p>{project.credit.join(" | ")}</p>
          <h2>Press</h2>
          {project.press.map((article, index) => (
            <p key={index}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </p>
          ))}
        </div>
        <div className="project-badges">
          {project.badges.map((badge, index) => (
            <div key={index} className="badge">
              <img src={badge} alt="Badge" />
            </div>
          ))}
        </div>
        <div className="project-gallery">
          {project.images.map((src, index) => (
            <img key={index} src={src} alt="Project screenshot" className="img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
