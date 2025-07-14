import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'Sexto Perito en Informática',
      institution: 'Fundación Kinal',
      period: '2025',
      location: 'Guatemala, Guatemala',
      description: 'Desarrollo de aplicaciones web con Node.js, Express, MongoDB, HTML, CSS, JavaScript y React, utilizando frameworks como Chakra UI y Tailwind CSS.'
    },
    {
      degree: 'Quinto Perito en Informática',
      institution: 'Fundación Kinal',
      period: '2024',
      location: 'Guatemala, Guatemala',
      description: 'Desarrollo de aplicaciones con Java (consola, JavaFX y Spring Boot), uso de MySQL, HTML, CSS (Bootstrap), JavaScript e introducción a React..'
    },
    {
      degree: 'Cuarto Perito en Informática',
      institution: 'Fundación Kinal',
      period: '2023',
      location: 'Guatemala, Guatemala',
      description: 'Redes Cisco (CCNA), introducción a la programación y fundamentos de Java..'
    }
  ]

  
  return (
    <section className="education">
      <div className="container">
        <h2 className="section-title">Educación y Experiencia</h2>
        <p className="section-subtitle">
          Mi formación académica y experiencia profesional en el desarrollo de software
        </p>
        
        <div className="education-experience-grid">
          <div className="education-section">
            <h3 className="section-heading">
              <FaGraduationCap className="section-icon" />
              Educación
            </h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{edu.degree}</h4>
                      <span className="timeline-period">{edu.period}</span>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-institution">{edu.institution}</span>
                      <span className="timeline-location">
                        <FaMapMarkerAlt /> {edu.location}
                      </span>
                    </div>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education