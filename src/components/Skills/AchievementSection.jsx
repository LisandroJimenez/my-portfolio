import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaLightbulb } from 'react-icons/fa';

const AchievementSection = () => {
  return (
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
  );
};

export default AchievementSection;
