import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import StatsSection from './StatsSection';

const SkillsHeader = () => {
  return (
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

      <StatsSection />
    </motion.div>
  );
};

export default SkillsHeader;
