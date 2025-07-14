import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel administrativo.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/usuario/ecommerce-platform',
      demo: 'https://ecommerce-demo.com',
      features: [
        'Sistema de autenticación completo',
        'Carrito de compras persistente',
        'Panel administrativo',
        'Integración con pasarelas de pago',
        'Diseño responsivo'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y seguimiento de progreso.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      github: 'https://github.com/usuario/task-management',
      demo: 'https://task-demo.com',
      features: [
        'Colaboración en tiempo real',
        'Sistema de notificaciones',
        'Gestión de equipos',
        'Reportes y analytics',
        'Integración con calendario'
      ]
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico que muestra pronósticos detallados, mapas interactivos y alertas climáticas.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'Chart.js'],
      github: 'https://github.com/usuario/weather-dashboard',
      demo: 'https://weather-demo.com',
      features: [
        'Pronósticos precisos',
        'Mapas interactivos',
        'Alertas personalizadas',
        'Gráficos dinámicos',
        'Geolocalización'
      ]
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Red social completa con posts, comentarios, sistema de likes y mensajería en tiempo real.',
      image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/usuario/social-media',
      demo: 'https://social-demo.com',
      features: [
        'Feed de noticias personalizado',
        'Mensajería en tiempo real',
        'Sistema de amigos',
        'Subida de multimedia',
        'Notificaciones push'
      ]
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'Sistema de gestión de aprendizaje con cursos, evaluaciones, progreso de estudiantes y certificaciones.',
      image: 'https://images.pexels.com/photos/5940831/pexels-photo-5940831.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Angular', 'Django', 'PostgreSQL', 'AWS'],
      github: 'https://github.com/usuario/lms-system',
      demo: 'https://lms-demo.com',
      features: [
        'Gestión de cursos',
        'Sistema de evaluaciones',
        'Seguimiento de progreso',
        'Certificaciones automáticas',
        'Videoconferencias integradas'
      ]
    },
    {
      id: 6,
      title: 'Restaurant POS System',
      description: 'Sistema punto de venta para restaurantes con gestión de inventario, reportes y integración con cocina.',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MySQL', 'Socket.io'],
      github: 'https://github.com/usuario/pos-system',
      demo: 'https://pos-demo.com',
      features: [
        'Interfaz táctil optimizada',
        'Gestión de inventario',
        'Reportes en tiempo real',
        'Integración con cocina',
        'Múltiples métodos de pago'
      ]
    }
  ]

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>
        <p className="section-subtitle">
          Una muestra de los proyectos que he desarrollado, desde aplicaciones web hasta sistemas completos
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a href={project.github} className="project-btn" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href={project.demo} className="project-btn" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-features">
                  <h4 className="features-title">
                    <FaCode /> Características principales:
                  </h4>
                  <ul className="features-list">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Código fuente
                  </a>
                  <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Ver demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects