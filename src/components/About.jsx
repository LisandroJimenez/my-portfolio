import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUser, 
  FaCalendar, 
  FaMapMarkerAlt, 
  FaGraduationCap,
  FaCode,
  FaHeart,
  FaRocket,
  FaClock,
  FaCalendarAlt,
  FaLightbulb,
  FaTrophy,
  FaBookOpen,
  FaGlobe,
  FaUsers,
  FaStar,
  FaBullseye
} from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalInfo = [
    {
      icon: FaUser,
      label: 'Nombre completo',
      value: 'Lisandro Jiménez Vásquez',
      color: '#3B82F6'
    },
    {
      icon: FaCalendar,
      label: 'Edad',
      value: '18 años',
      color: '#10B981'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Ubicación',
      value: 'Guatemala, Guatemala',
      color: '#F59E0B'
    },
    {
      icon: FaGraduationCap,
      label: 'Formación actual',
      value: 'Informática - Fundación Kinal',
      color: '#8B5CF6'
    },
    {
      icon: FaCode,
      label: 'Experiencia',
      value: '3+ años desarrollando',
      color: '#EF4444'
    },
    {
      icon: FaHeart,
      label: 'Pasión',
      value: 'Desarrollo Full Stack',
      color: '#EC4899'
    }
  ];

  const shortTermGoals = [
    {
      icon: FaBookOpen,
      title: 'Dominar TypeScript',
      description: 'Profundizar en TypeScript para desarrollo más robusto',
      timeline: '3-6 meses',
      progress: 60
    },
    {
      icon: FaRocket,
      title: 'Certificaciones',
      description: 'Obtener certificaciones en AWS y React',
      timeline: '6-12 meses',
      progress: 30
    },
    {
      icon: FaUsers,
      title: 'Primer trabajo',
      description: 'Conseguir mi primera posición como desarrollador junior',
      timeline: '6-12 meses',
      progress: 45
    }
  ];

  const longTermGoals = [
    {
      icon: FaTrophy,
      title: 'Desarrollador Senior',
      description: 'Convertirme en un desarrollador senior con liderazgo técnico',
      timeline: '3-5 años',
      impact: 'Alto'
    },
    {
      icon: FaGlobe,
      title: 'Proyectos Globales',
      description: 'Trabajar en proyectos que impacten a usuarios a nivel mundial',
      timeline: '2-4 años',
      impact: 'Muy Alto'
    },
    {
      icon: FaLightbulb,
      title: 'Innovación Tecnológica',
      description: 'Contribuir al desarrollo de nuevas tecnologías y frameworks',
      timeline: '5+ años',
      impact: 'Revolucionario'
    }
  ];

  const tabs = [
    { id: 'personal', label: 'Información Personal', icon: FaUser },
    { id: 'goals', label: 'Metas y Objetivos', icon: FaBullseye },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="about">
      <div className="container">
        {/* Header con foto de perfil */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-section">
            <div className="profile-image-container">
              <div className="profile-image">
                <img 
                  src="/assets/Avatar.jpg" 
                  alt="Lisandro Jiménez" 
                />
                <div className="profile-status">
                  <div className="status-dot"></div>
                  <span>Disponible </span>
                </div>
              </div>
            </div>
            <div className="profile-intro">
              <h2 className="section-title">Acerca de mí</h2>
              <p className="section-subtitle">
                Desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras 
                que generen impacto real en la vida de las personas
              </p>
              <div className="profile-stats">
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Proyectos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Años</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Tecnologías</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          className="about-navigation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              <tab.icon className="tab-icon" />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content Sections */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="about-content"
        >
          {activeTab === 'personal' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="personal-content"
            >
              <div className="info-cards-grid">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="info-card"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="info-icon-wrapper" style={{ backgroundColor: `${info.color}15` }}>
                      <info.icon style={{ color: info.color }} className="info-icon" />
                    </div>
                    <div className="info-content">
                      <span className="info-label">{info.label}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="personality-section">
                <h3 className="subsection-title">
                  <FaHeart className="subsection-icon" />
                  Lo que me define
                </h3>
                <div className="personality-grid">
                  <div className="personality-card">
                    <h4>🚀 Innovador</h4>
                    <p>Siempre busco nuevas formas de resolver problemas y crear soluciones únicas</p>
                  </div>
                  <div className="personality-card">
                    <h4>🎯 Orientado a resultados</h4>
                    <p>Me enfoco en entregar valor real y measurable en cada proyecto</p>
                  </div>
                  <div className="personality-card">
                    <h4>🤝 Colaborativo</h4>
                    <p>Creo en el poder del trabajo en equipo y la comunicación efectiva</p>
                  </div>
                  <div className="personality-card">
                    <h4>📚 Autodidacta</h4>
                    <p>Constantemente aprendiendo nuevas tecnologías y mejorando mis habilidades</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'goals' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="goals-content"
            >
              <div className="goals-section">
                <motion.div variants={itemVariants} className="goals-category">
                  <h3 className="subsection-title">
                    <FaClock className="subsection-icon" />
                    Metas a Corto Plazo (2025-2026)
                  </h3>
                  <div className="goals-grid">
                    {shortTermGoals.map((goal, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="goal-card short-term"
                        whileHover={{ y: -5 }}
                      >
                        <div className="goal-header">
                          <div className="goal-icon">
                            <goal.icon />
                          </div>
                          <div className="goal-timeline">{goal.timeline}</div>
                        </div>
                        <h4 className="goal-title">{goal.title}</h4>
                        <p className="goal-description">{goal.description}</p>
                        <div className="goal-progress">
                          <div className="progress-label">Progreso: {goal.progress}%</div>
                          <div className="progress-bar">
                            <motion.div 
                              className="progress-fill"
                              initial={{ width: 0 }}
                              animate={{ width: `${goal.progress}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="goals-category">
                  <h3 className="subsection-title">
                    <FaCalendarAlt className="subsection-icon" />
                    Metas a Largo Plazo (2025-2035)
                  </h3>
                  <div className="goals-grid">
                    {longTermGoals.map((goal, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="goal-card long-term"
                        whileHover={{ y: -5 }}
                      >
                        <div className="goal-header">
                          <div className="goal-icon">
                            <goal.icon />
                          </div>
                          <div className={`goal-impact ${goal.impact.toLowerCase().replace(' ', '-')}`}>
                            {goal.impact}
                          </div>
                        </div>
                        <h4 className="goal-title">{goal.title}</h4>
                        <p className="goal-description">{goal.description}</p>
                        <div className="goal-timeline-long">{goal.timeline}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          
        </motion.div>
      </div>
    </section>
  );
};

export default About;