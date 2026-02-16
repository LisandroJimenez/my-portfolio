import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaRocket,
  FaDatabase,
  FaTools
} from 'react-icons/fa';

const CategoryNavigation = ({ activeCategory, setActiveCategory, counts }) => {
  const categories = [
    { id: 'technical', label: 'Habilidades Técnicas', icon: FaCode, count: counts.skills },
    { id: 'frameworks', label: 'Frameworks', icon: FaRocket, count: counts.frameworks },
    { id: 'databases', label: 'Bases de Datos', icon: FaDatabase, count: counts.databases },
    { id: 'tools', label: 'Herramientas', icon: FaTools, count: counts.tools }
  ];

  return (
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
  );
};

export default CategoryNavigation;
