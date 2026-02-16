import React from 'react';
import { motion } from 'framer-motion';
import ShortTermGoals from './ShortTermGoals';
import LongTermGoals from './LongTermGoals';

const GoalsSection = ({ containerVariants, itemVariants }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="goals-content"
    >
      <div className="goals-section">
        <ShortTermGoals variants={itemVariants} itemVariants={itemVariants} />
        <LongTermGoals variants={itemVariants} itemVariants={itemVariants} />
      </div>
    </motion.div>
  );
};

export default GoalsSection;
