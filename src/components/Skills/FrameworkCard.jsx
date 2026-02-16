import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

const FrameworkCard = ({ framework }) => (
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

export default FrameworkCard;
