import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiHtml5, 
  SiCss3, 
  SiMongodb, 
  SiGit, 
  SiExpress,
  SiSpring,
  SiMysql,
  SiBootstrap,
  SiVercel
} from 'react-icons/si';
import { 
  FaCoffee, 
  FaCode, 
  FaRocket, 
  FaDatabase, 
  FaTools,
  FaTrophy,
  FaGraduationCap,
  FaLightbulb
} from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'JavaScript', percentage: 90, color: '#F7DF1E', icon: SiJavascript, category: 'Frontend' },
    { name: 'React', percentage: 85, color: '#61DAFB', icon: SiReact, category: 'Frontend' },
    { name: 'Node.js', percentage: 80, color: '#339933', icon: SiNodedotjs, category: 'Backend' },
    { name: 'Java', percentage: 95, color: '#ED8B00', icon: FaCoffee, category: 'Backend' },
    { name: 'HTML5', percentage: 85, color: '#E34F26', icon: SiHtml5, category: 'Frontend' },
    { name: 'CSS3', percentage: 80, color: '#1572B6', icon: SiCss3, category: 'Frontend' },
    { name: 'MongoDB', percentage: 80, color: '#47A248', icon: SiMongodb, category: 'Database' },
    { name: 'MySQL', percentage: 90, color: '#4479A1', icon: SiMysql, category: 'Database' },
    { name: 'Git', percentage: 85, color: '#F05032', icon: SiGit, category: 'Tools' },
    { name: 'Express.js', percentage: 80, color: '#000000', icon: SiExpress, category: 'Backend' }
  ];

  const frameworks = [
    { 
      name: 'React', 
      level: 'Avanzado', 
      experience: '+1 años', 
      icon: SiReact, 
      color: '#61DAFB',
      description: 'Desarrollo de SPAs modernas con hooks y context'
    },
    { 
      name: 'Spring Boot', 
      level: 'Intermedio', 
      experience: '1 año', 
      icon: SiSpring, 
      color: '#6DB33F',
      description: 'APIs REST y microservicios con Java'
    },
    { 
      name: 'Express.js', 
      level: 'Avanzado', 
      experience: '1 año', 
      icon: SiExpress, 
      color: '#000000',
      description: 'Servidores web rápidos y escalables'
    },
    { 
      name: 'Bootstrap', 
      level: 'Avanzado', 
      experience: '1 año', 
      icon: SiBootstrap, 
      color: '#563D7C',
      description: 'Diseño responsive y componentes UI'
    }
  ];

  const databases = [
    { 
      name: 'MongoDB', 
      level: 'Avanzado', 
      experience: '2+ años', 
      icon: SiMongodb, 
      color: '#47A248',
      description: 'Base de datos NoSQL para aplicaciones modernas'
    },
    { 
      name: 'MySQL', 
      level: 'Avanzado', 
      experience: '3+ años', 
      icon: SiMysql, 
      color: '#4479A1',
      description: 'Sistemas relacionales robustos y consultas complejas'
    }
  ];

  const tools = [
    { 
      name: 'Vercel', 
      level: 'Avanzado', 
      experience: '2+ años', 
      icon: SiVercel, 
      color: '#000000',
      description: 'Despliegue automático y hosting de aplicaciones'
    },
    { 
      name: 'Git', 
      level: 'Avanzado', 
      experience: '3+ años', 
      icon: SiGit, 
      color: '#F05032',
      description: 'Control de versiones y colaboración en equipo'
    }
  ];

  const categories = [
    { id: 'technical', label: 'Habilidades Técnicas', icon: FaCode, count: skills.length },
    { id: 'frameworks', label: 'Frameworks', icon: FaRocket, count: frameworks.length },
    { id: 'databases', label: 'Bases de Datos', icon: FaDatabase, count: databases.length },
    { id: 'tools', label: 'Herramientas', icon: FaTools, count: tools.length }
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

  const SkillCard = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      className="skill-card"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="skill-header" style={{ marginBottom: '1rem' }}>
        <div 
          className="skill-icon" 
          style={{ 
            color: skill.color, 
            fontSize: '2.5rem', 
            marginBottom: '0.5rem',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <skill.icon />
        </div>
        <h4 className="skill-name">{skill.name}</h4>
        <span style={{ 
          fontSize: '0.875rem', 
          color: 'var(--text-secondary)',
          display: 'block',
          marginTop: '0.25rem'
        }}>
          {skill.category}
        </span>
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem'
        }}>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Dominio
          </span>
          <span style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: skill.color 
          }}>
            {skill.percentage}%
          </span>
        </div>
        
        <div style={{
          width: '100%',
          height: '8px',
          backgroundColor: 'var(--gray-200)',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <motion.div
            style={{
              height: '100%',
              backgroundColor: skill.color,
              borderRadius: '4px'
            }}
            initial={{ width: 0 }}
            animate={{ width: `${skill.percentage}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          marginTop: '0.25rem'
        }}>
          <span>Básico</span>
          <span>Experto</span>
        </div>
      </div>
    </motion.div>
  );

  const FrameworkCard = ({ framework, index }) => (
    <motion.div
      variants={itemVariants}
      className="framework-card"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{ borderLeftColor: framework.color }}
    >
      <div className="framework-header" style={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        gap: '1rem',
        marginBottom: '1rem'
      }}>
        <div 
          style={{ 
            color: framework.color, 
            fontSize: '2rem',
            padding: '0.75rem',
            backgroundColor: `${framework.color}15`,
            borderRadius: 'var(--border-radius)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <framework.icon />
        </div>
        <div style={{ flex: 1 }}>
          <h4 className="framework-name">{framework.name}</h4>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '0.875rem',
            margin: '0.5rem 0',
            lineHeight: '1.5'
          }}>
            {framework.description}
          </p>
          <div className="framework-info">
            <span className={`framework-level ${framework.level.toLowerCase()}`}>
              {framework.level}
            </span>
            <span className="framework-experience">{framework.experience}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch (activeCategory) {
      case 'technical':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="skills-grid"
          >
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        );
      case 'frameworks':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="frameworks-grid"
          >
            {frameworks.map((framework, index) => (
              <FrameworkCard key={framework.name} framework={framework} index={index} />
            ))}
          </motion.div>
        );
      case 'databases':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="frameworks-grid"
          >
            {databases.map((db, index) => (
              <FrameworkCard key={db.name} framework={db} index={index} />
            ))}
          </motion.div>
        );
      case 'tools':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="frameworks-grid"
          >
            {tools.map((tool, index) => (
              <FrameworkCard key={tool.name} framework={tool} index={index} />
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="skills page-content">
      <div className="container">
        {/* Header mejorado */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '4rem',
            height: '4rem',
            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
            borderRadius: '50%',
            marginBottom: '1.5rem',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <FaGraduationCap style={{ fontSize: '2rem', color: 'white' }} />
          </div>
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">
            Tecnologías y herramientas que domino para crear soluciones completas, escalables y de alta calidad
          </p>
          
          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: 'var(--primary-color)' 
              }}>
                10+
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>Tecnologías</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: 'var(--primary-color)' 
              }}>
                3+
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>Años Experiencia</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: 'var(--primary-color)' 
              }}>
                15+
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>Proyectos</div>
            </div>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--border-radius)',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: activeCategory === category.id 
                  ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'
                  : 'var(--white)',
                color: activeCategory === category.id ? 'white' : 'var(--text-primary)',
                boxShadow: activeCategory === category.id 
                  ? 'var(--shadow-lg)' 
                  : 'var(--shadow)',
                transform: activeCategory === category.id ? 'translateY(-2px)' : 'none'
              }}
            >
              <category.icon style={{ fontSize: '1.25rem' }} />
              <span>{category.label}</span>
              <span style={{
                padding: '0.25rem 0.5rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '600',
                background: activeCategory === category.id 
                  ? 'rgba(255,255,255,0.2)' 
                  : 'var(--gray-100)',
                color: activeCategory === category.id ? 'white' : 'var(--text-secondary)'
              }}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>

        {/* Achievement Section */}
        <motion.div 
          className="card"
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            background: 'linear-gradient(135deg, var(--gray-100), var(--white))',
            border: '1px solid var(--gray-200)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              padding: '1rem',
              background: 'linear-gradient(135deg, #F59E0B, #D97706)',
              borderRadius: '50%',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <FaTrophy style={{ fontSize: '2rem', color: 'white' }} />
            </div>
          </div>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>
            Siempre Aprendiendo
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            maxWidth: '32rem',
            margin: '0 auto 1.5rem'
          }}>
            La tecnología evoluciona constantemente, y yo evoluciono con ella. Cada proyecto es una oportunidad 
            para aprender algo nuevo y mejorar mis habilidades.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--primary-color)',
            fontWeight: '600'
          }}>
            <FaLightbulb style={{ fontSize: '1.25rem' }} />
            <span>Próximo objetivo: TypeScript & Next.js</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;