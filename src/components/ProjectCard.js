import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, description, imageUrl, liveUrl, repoUrl, tags }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={imageUrl}
          alt={`${title} preview`}
          className="project-image"
        />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        {tags && tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        <p>{description}</p>
        <div className="project-links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
