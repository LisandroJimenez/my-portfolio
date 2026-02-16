import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import FrameworkCard from './FrameworkCard';
import { containerVariants } from './animations';

const SkillsContent = ({ activeCategory, skills, frameworks, databases, tools }) => {
  const renderContent = () => {
    switch (activeCategory) {
      case 'technical':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="skills-grid"
          >
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        );
      case 'frameworks':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="frameworks-grid"
          >
            {frameworks.map((framework, index) => (
              <FrameworkCard key={framework.name} framework={framework} index={index} />
            ))}
          </motion.div>
        );
      case 'databases':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="frameworks-grid"
          >
            {databases.map((db, index) => (
              <FrameworkCard key={db.name} framework={db} index={index} />
            ))}
          </motion.div>
        );
      case 'tools':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="frameworks-grid"
          >
            {tools.map((tool, index) => (
              <FrameworkCard key={tool.name} framework={tool} index={index} />
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      key={activeCategory}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {renderContent()}
    </motion.div>
  );
};

export default SkillsContent;
