import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();

  return (
    <div className="project-detail">
      <h2>{projectId.replace(/-/g, ' ')}</h2>
      <p>
        Detailed description, screenshots, video/gameplay download links, reference links, and media mentions go here.
      </p>
      <Link to="/">Back to Projects</Link>
    </div>
  );
};

export default ProjectDetail;
