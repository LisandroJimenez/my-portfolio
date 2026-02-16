import React from 'react';
import { motion } from 'framer-motion';

const InfoCard = ({ info, variants }) => {
  return (
    <motion.div
      variants={variants}
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
  );
};

export default InfoCard;
