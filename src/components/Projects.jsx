import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaEye } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SuperKinal',
      description: 'Aplicación de escritorio desarrollada en JavaFX para la gestión de supermercados. Permite administrar productos, categorías, distribuidores y generar facturas en PDF con JasperSoft.',
      image: '/assets/SuperKinal.png',
      technologies: ['JavaFX', 'MySQL', 'JasperSoft', 'Maven'],
      github: 'https://github.com/LisandroJimenez/Proyecto-SuperKinal2024.git',
      category: 'Desktop Application',
      status: 'Completado',
      features: [
        'Gestión de productos, categorías y distribuidores',
        'Sistema de facturación con generación de PDF',
        'Integración con JasperSoft Reports',
        'Interfaz amigable y responsiva para escritorio',
        'Base de datos relacional con MySQL'
      ]
    },
    {
      id: 2,
      title: 'SGDB Restaurante',
      description: 'Aplicación web desarrollada con JSP y Servlets para la gestión de restaurantes. Permite administrar clientes, platos, proveedores y generar reportes de ventas. Desplegada en Apache Tomcat con base de datos MySQL.',
      image: '/assets/SGDBRestaurante.png',
      technologies: ['Java', 'JSP', 'Servlets', 'Apache Tomcat', 'MySQL'],
      github: 'https://github.com/Kinal2/SGBDRestaurante.git',
      category: 'Web Application',
      status: 'Completado',
      features: [
        'Gestión de clientes, platos y proveedores',
        'Sistema de reportes de ventas',
        'Interfaz web dinámica con JSP',
        'Controladores y servicios organizados por capas',
        'Despliegue en servidor Apache Tomcat'
      ]
    },
    {
      id: 3,
      title: 'Almacenadora',
      description: 'Plataforma web avanzada para la gestión de bodegas y almacenamiento. Permite controlar inventarios, proveedores, ingresos y egresos de mercancías, con un dashboard interactivo y notificaciones en tiempo real.',
      image: '/assets/Almacenadora.png',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'ChakraUI'],
      github: 'https://github.com/usuario/almacenadora',
      demo: 'https://almacenadorafrontend.vercel.app/',
      category: 'Full Stack',
      status: 'En línea',
      features: [
        'Dashboard interactivo con ChakraUI',
        'Gestión de inventarios y proveedores',
        'Ingreso y salida de productos',
        'Autenticación de usuarios',
        'Notificaciones en tiempo real'
      ]
    },
    {
      id: 4,
      title: 'Blog Speakly',
      description: 'Plataforma de blogging donde los usuarios pueden interactuar comentando y dando likes a publicaciones gestionadas desde el backend. Incluye mensajería y notificaciones en tiempo real para mantener a la comunidad activa.',
      image: '/assets/Blog.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'ChakraUI'],
      github: 'https://github.com/LisandroJimenez/ReviewManager-FrontEnd.git',
      demo: 'https://review-manager-front-end-wk2j.vercel.app/',
      category: 'Social Platform',
      status: 'En línea',
      features: [
        'Visualización de publicaciones',
        'Sistema de comentarios',
        'Likes en publicaciones',
        'Mensajería entre usuarios',
        'Notificaciones push'
      ]
    },
    {
      id: 5,
      title: 'HotelGest',
      description: 'Sistema integral para la gestión hotelera que permite administrar reservas, habitaciones y facturación de manera eficiente. Facilita el control de disponibilidad, asignación de habitaciones y seguimiento de clientes, optimizando la operación diaria del hotel.',
      image: '/assets/Hotel.png',
      technologies: ['React', 'ChakraUI', 'MongoDB', 'Node.js'],
      github: 'https://github.com/LisandroJimenez/Hotel-Management-FRONTEND/tree/Lisandro-Jimenez',
      demo: 'https://hotelmanagement-2656a.web.app/',
      category: 'Management System',
      status: 'En línea',
      features: [
        'Gestión de reservas',
        'Administración de habitaciones',
        'Control de disponibilidad',
        'Gestión de facturación',
        'Seguimiento de clientes'
      ]
    },
    {
      id: 6,
      title: 'Videntia',
      description: 'Plataforma de análisis de imágenes para criminología. Permite a los usuarios subir imágenes que son procesadas por IA para obtener evaluaciones de perfiles, detección de patrones y probabilidad de conductas delictivas.',
      image: '/assets/videntia.png',
      technologies: ['React', 'Node.js', 'MySQL', 'Socket.io', 'Google Cloud Vision'],
      github: 'https://github.com/LuisDeLeon24/MetadataExperimentos/tree/expoKinal',
      demo: 'https://videntia-999-6d296.web.app/',
      category: 'AI Platform',
      status: 'En línea',
      features: [
        'Carga de imágenes por el usuario',
        'Análisis automático con IA',
        'Evaluación de perfiles de riesgo',
        'Detección de patrones criminológicos',
        'Reportes detallados'
      ]
    }
  ]

  return (
    <section className="projects">
      <div className="container">
        {/* Header mejorado */}
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
            <div key={project.id} className={`project-card ${index % 2 === 1 ? 'reverse' : ''}`}>
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
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h4 className="features-title">
                    <FaStar className="features-icon" />
                    Características principales:
                  </h4>
                  <ul className="features-list">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Código fuente
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <FaEye /> Ver demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer de proyectos */}
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
      </div>
    </section>
  )
}

export default Projects