import React from 'react';
import { FaCode } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import ProjectsFooter from './ProjectsFooter';
import { projects } from './projectsData';

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects-header">
          <div className="header-icon-wrapper">
            <FaCode className="header-icon" />
          </div>
          <h2 className="section-title">Mis Proyectos</h2>
          <p className="section-subtitle">
            Una colección de proyectos que demuestran mis habilidades en desarrollo full-stack, 
            desde aplicaciones de escritorio hasta plataformas web modernas con IA
          </p>
        </div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        <ProjectsFooter />
      </div>
    </section>
  );
};

export default Projects;