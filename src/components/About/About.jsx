import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutHeader from './AboutHeader';
import AboutNavigation from './AboutNavigation';

import PersonalInfo from './PersonalInfor';
import GoalsSection from './GoalsSection';

const About = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  return (
    <section className="about">
      <div className="container">
        <AboutHeader />

        <AboutNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="about-content"
        >
          {activeTab === 'personal' && (
            <PersonalInfo
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />
          )}

          {activeTab === 'goals' && (
            <GoalsSection
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
