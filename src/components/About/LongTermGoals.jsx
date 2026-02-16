import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import GoalCard from './GoalCard';
import { longTermGoals } from './data';

const LongTermGoals = ({ variants, itemVariants }) => {
  return (
    <motion.div variants={variants} className="goals-category">
      <h3 className="subsection-title">
        <FaCalendarAlt className="subsection-icon" />
        Metas a Largo Plazo (2027-2035)
      </h3>
      <div className="goals-grid">
        {longTermGoals.map((goal, index) => (
          <GoalCard
            key={index}
            goal={goal}
            index={index}
            type="long"
            variants={itemVariants}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LongTermGoals;
