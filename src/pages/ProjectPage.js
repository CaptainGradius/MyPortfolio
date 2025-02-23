import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // Added useNavigate
import projectsData from '../data/projectsData';
import './ProjectPage.css';

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const navigate = useNavigate(); // Initialize navigation hook

  // Redirect to homepage if project is not found
  useEffect(() => {
    if (!project) {
      navigate("/"); // Redirect to homepage
    }
  }, [project, navigate]);

  useEffect(() => {
    if (project?.video) {
      const iframe = document.querySelector("iframe");
      iframe.onload = () => setIsVideoLoading(false);
    }
  }, [project?.video]);

  // While redirecting, you might render null or a loader
  if (!project) return null;

  return (
    <div className="project-container">
      {/* Header */}
      <div className="project-header">
        {/* If a video is available, display it, otherwise display the gif */}
        {project?.video ? (
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}>
            {isVideoLoading && <div className="loading-wheel"></div>}
            <div style={{ position: "relative", width: "100%", maxWidth: "800px", height: "0", paddingBottom: "56.25%" }}>
              <iframe
                src={project?.video}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                title="Project Video"
                onLoad={() => setIsVideoLoading(false)}
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        ) : (
          <img src={project?.cover} alt={project?.title} className="project-cover" />
        )}
        <h1>{project?.title}</h1>
      </div>
      <div className="project-body">
        <div className="project-description">
          {project?.description?.map((p, index) => (
            <p key={index}>
              {p.title ? <h2>{p.title}</h2> : null}
              {p.text}
            </p>
          ))}
          <div>
            {project?.websites?.map((website, index) => (
              <a key={index} href={website.link} target="_blank" rel="noopener noreferrer">
                {website.title}
              </a>
            ))}
          </div>
          <h2>Credit</h2>
          <p>{project?.credit?.join(" | ")}</p>
          {project?.press && (
            <>
              <h2>Press</h2>
              {project?.press?.map((article, index) => (
                <p key={index} style={{ margin: "0", padding: "2px 0" }}>
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </p>
              ))}
            </>
          )}
        </div>
        <div className="project-badges">
          {project?.badges?.map((badge, index) => (
            <div key={index} className="badge">
              <img src={badge} alt="Badge" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="project-gallery">
          {project?.images?.map((src, index) => (
            <img key={index} src={src} alt="Project screenshot" className="img" loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
