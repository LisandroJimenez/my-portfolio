import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

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

export default SkillCard;
