import React from 'react';
import { motion } from 'framer-motion';
import { tabs } from './data';

const AboutNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <motion.div
      className="about-navigation"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
        >
          <tab.icon className="tab-icon" />
          <span>{tab.label}</span>
        </button>
      ))}
    </motion.div>
  );
};

export default AboutNavigation;
