import { GraduationCap, MapPin, Calendar, Code2, Database, Globe, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Sexto Perito en Informática',
      institution: 'Fundación Kinal',
      period: '2025',
      location: 'Guatemala, Guatemala',
      description: 'Desarrollo de aplicaciones web con Node.js, Express, MongoDB, HTML, CSS, JavaScript y React, utilizando frameworks como Chakra UI y Tailwind CSS.',
      technologies: ['Node.js', 'React', 'MongoDB', 'Tailwind CSS', 'Express'],
      status: 'current',
      icon: Globe
    },
    {
      degree: 'Quinto Perito en Informática',
      institution: 'Fundación Kinal',
      period: '2024',
      location: 'Guatemala, Guatemala',
      description: 'Desarrollo de aplicaciones con Java (consola, JavaFX y Spring Boot), uso de MySQL, HTML, CSS (Bootstrap), JavaScript e introducción a React.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap', 'JavaScript'],
      status: 'completed',
      icon: Code2
    },
    {
      degree: 'Cuarto Perito en Informática',
      institution: 'Fundación Kinal',
      period: '2023',
      location: 'Guatemala, Guatemala',
      description: 'Redes Cisco (CCNA), introducción a la programación y fundamentos de Java.',
      technologies: ['Cisco CCNA', 'Java', 'Networking', 'Fundamentos'],
      status: 'completed',
      icon: Database
    }
  ];

  return (
    <section className="education">
      <div className="container">
        {/* Header mejorado */}
        <div className="education-header">
          <div className="header-icon-wrapper">
            <GraduationCap className="header-icon" />
          </div>
          <h2 className="section-title">Mi Formación Académica</h2>
          <p className="section-subtitle">
            Desarrollando habilidades técnicas sólidas en programación y tecnologías web modernas
          </p>
        </div>
        
        <div className="education-container">
          <div className="education-section">
            <h3 className="section-heading">
              <Award className="section-icon" />
              Trayectoria Educativa
            </h3>
            
            <div className="timeline">
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker">
                      <IconComponent className="timeline-marker-icon" />
                    </div>
                    <div className={`timeline-content ${edu.status === 'current' ? 'current-education' : ''}`}>
                      {edu.status === 'current' && (
                        <div className="current-badge">En Curso</div>
                      )}
                      
                      <div className="timeline-header">
                        <h4 className="timeline-title">{edu.degree}</h4>
                        <span className="timeline-period">{edu.period}</span>
                      </div>
                      
                      <div className="timeline-meta">
                        <span className="timeline-institution">
                          <Calendar className="meta-icon" />
                          {edu.institution}
                        </span>
                        <span className="timeline-location">
                          <MapPin className="meta-icon" />
                          {edu.location}
                        </span>
                      </div>
                      
                      <p className="timeline-description">{edu.description}</p>
                      
                      {/* Sección de tecnologías */}
                      <div className="technologies-section">
                        <h5 className="technologies-title">Tecnologías Principales</h5>
                        <div className="technologies-grid">
                          {edu.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="technology-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer motivacional */}
        <div className="education-footer">
          <div className="footer-content">
            <h3 className="footer-title">Próximamente Graduado</h3>
            <p className="footer-subtitle">
              Listo para aplicar mis conocimientos en proyectos reales y contribuir al mundo del desarrollo de software
            </p>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 