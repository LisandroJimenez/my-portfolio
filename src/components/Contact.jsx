import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaCalendarAlt, FaClock } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ljimenezv2006@gmail.com',
      link: 'mailto:ljimenezv2006@gmail.com',
      description: 'Envía tu mensaje en cualquier momento'
    },
    {
      icon: FaPhone,
      label: 'Teléfono',
      value: '+502 5160-4553',
      link: 'tel:+50251604553',
      description: 'Disponible en horario laboral'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Ubicación',
      value: 'Guatemala, Guatemala',

      description: 'Disponible para trabajo remoto'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/lisandro-jim%C3%A9nez-v%C3%A1squez-537382352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: '#0077B5',
      description: 'Conecta conmigo profesionalmente'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/LisandroJimenez',
      color: '#333',
      description: 'Revisa mi código y proyectos'
    }
  ]

  const quickActions = [

    {
      title: 'Consulta rápida',
      description: 'Pregunta sobre desarrollo',
      icon: FaClock,
      action: 'mailto:ljimenezv2006@gmail.com?subject=Consulta Rápida',
      color: '#F59E0B'
    }
  ]

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-header">
          <div className="header-icon-wrapper">
            <FaEnvelope className="header-icon" />
          </div>
          <h2 className="section-title">Contáctame</h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente? ¡Hablemos y creemos algo increíble juntos!
          </p>
        </div>
        
        <div className="contact-main">
          <div className="contact-info-section">
            <h3 className="contact-section-title">Información de contacto</h3>
            <div className="contact-cards">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="contact-card"
                >
                  <div className="contact-card-icon">
                    <item.icon />
                  </div>
                  <div className="contact-card-content">
                    <span className="contact-card-label">{item.label}</span>
                    <span className="contact-card-value">{item.value}</span>
                    <span className="contact-card-description">{item.description}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="availability-section">
            <div className="availability-card">
              <div className="availability-header">

              </div>
              <h4 className="availability-title">Estado actual</h4>
              <p className="availability-description">
                Actualmente disponible para proyectos freelance y oportunidades 
                de empleo a tiempo completo. Especializado en desarrollo web moderno.
              </p>
              
              <div className="quick-actions">
                <h5 className="quick-actions-title">Acciones rápidas</h5>
                <div className="quick-actions-grid">
                  {quickActions.map((action, index) => (
                    <a
                      key={index}
                      href={action.action}
                      className="quick-action-card"
                      style={{ '--action-color': action.color }}
                    >
                      <div className="quick-action-icon">
                        <action.icon />
                      </div>
                      <div className="quick-action-content">
                        <span className="quick-action-title">{action.title}</span>
                        <span className="quick-action-description">{action.description}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="social-section">
          <h3 className="social-title">Sígueme en redes profesionales</h3>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--social-color': social.color }}
              >
                <div className="social-icon">
                  <social.icon />
                </div>
                <div className="social-info">
                  <span className="social-name">{social.name}</span>
                  <span className="social-description">{social.description}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact