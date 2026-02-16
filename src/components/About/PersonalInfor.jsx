import React from 'react';
import { motion } from 'framer-motion';
import InfoCard from './InforCard';
import PersonalitySection from './PersonalitlySection';
import { personalInfo } from './data';

const PersonalInfo = ({ containerVariants, itemVariants }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="personal-content"
    >
      <div className="info-cards-grid">
        {personalInfo.map((info, index) => (
          <InfoCard
            key={index}
            info={info}
            variants={itemVariants}
          />
        ))}
      </div>
      <PersonalitySection variants={itemVariants} />
    </motion.div>
  );
};

export default PersonalInfo;
