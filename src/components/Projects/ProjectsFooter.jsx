import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectsFooter = () => {
  return (
    <div className="projects-footer">
      <div className="footer-content">
        <h3 className="footer-title">¿Interesado en colaborar?</h3>
        <p className="footer-subtitle">
          Siempre estoy abierto a nuevos proyectos y oportunidades de aprendizaje
        </p>
        <a href="https://github.com/LisandroJimenez" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          <FaGithub /> Ver más en GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectsFooter;