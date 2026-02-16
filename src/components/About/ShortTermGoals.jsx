import React from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';
import GoalCard from './GoalCard';
import { shortTermGoals } from './data';

const ShortTermGoals = ({ variants, itemVariants }) => {
  return (
    <motion.div variants={variants} className="goals-category">
      <h3 className="subsection-title">
        <FaClock className="subsection-icon" />
        Metas a Corto Plazo (2026-2027)
      </h3>
      <div className="goals-grid">
        {shortTermGoals.map((goal, index) => (
          <GoalCard
            key={index}
            goal={goal}
            index={index}
            type="short"
            variants={itemVariants}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ShortTermGoals;
