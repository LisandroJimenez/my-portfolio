import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'juan.perez@example.com',
      link: 'mailto:juan.perez@example.com'
    },
    {
      icon: FaPhone,
      label: 'Teléfono',
      value: '+502 1234-5678',
      link: 'tel:+50212345678'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Ubicación',
      value: 'Guatemala, Guatemala',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/juan-perez-dev',
      color: '#0077B5',
      description: 'Conecta conmigo profesionalmente'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/juan-perez-dev',
      color: '#333',
      description: 'Revisa mi código y proyectos'
    },
    {
      name: 'CompuTrabajo',
      icon: FaBriefcase,
      url: 'https://computrabajo.com.gt/candidato/juan-perez',
      color: '#FF6B35',
      description: 'Mi perfil profesional'
    }
  ]

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Contáctame</h2>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos y creemos algo increíble juntos!
        </p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-section-title">Información de contacto</h3>
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <item.icon />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    <a href={item.link} className="contact-value">{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="availability">
              <h4 className="availability-title">Disponibilidad</h4>
              <p className="availability-text">
                Actualmente <span className="status-available">disponible</span> para proyectos freelance 
                y oportunidades de empleo a tiempo completo.
              </p>
            </div>
          </div>
          
          <div className="contact-form">
            <h3 className="contact-section-title">Envíame un mensaje</h3>
            <form className="form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Asunto del mensaje"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows="5"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-full">
                Enviar mensaje
              </button>
            </form>
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