import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const PersonalitySection = ({ variants }) => {
  return (
    <motion.div variants={variants} className="personality-section">
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
  );
};

export default PersonalitySection;
