import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <div className={`project-card ${index % 2 === 1 ? 'reverse' : ''}`}>
      <div className="project-image-section">
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          <div className="project-overlay">
            <div className="project-actions">
              <a href={project.github} className="project-btn" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              {project.demo && (
                <a href={project.demo} className="project-btn" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="project-badges">
          <span className="category-badge">{project.category}</span>
          <span className={`status-badge ${project.status === 'En línea' ? 'online' : 'completed'}`}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="project-content-section">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-number">0{project.id}</div>
        </div>
        
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          <h4 className="tech-title">Tecnologías utilizadas:</h4>
          <div className="tech-grid">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-features">
          <h4 className="features-title">
            <FaStar className="features-icon" />
            Características principales:
          </h4>
          <ul className="features-list">
            {project.features.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-links">
          <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            <FaGithub /> Código fuente
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;