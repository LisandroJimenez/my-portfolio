import React from 'react';
import { motion } from 'framer-motion';
import ProfileSection from './ProfileSection';

const AboutHeader = () => {
  return (
    <motion.div
      className="about-header"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ProfileSection />
    </motion.div>
  );
};

export default AboutHeader;
