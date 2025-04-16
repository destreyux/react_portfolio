import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/ProjectData"; // <-- Changed to uppercase 'P'
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index} // Using index is okay if list doesn't reorder
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            liveUrl={project.liveUrl}
            repoUrl={project.repoUrl}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
