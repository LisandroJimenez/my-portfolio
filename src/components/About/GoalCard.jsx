import React from 'react';
import { motion } from 'framer-motion';

const GoalCard = ({ goal, index, type, variants }) => {
  const isShortTerm = type === 'short';

  return (
    <motion.div
      variants={variants}
      className={`goal-card ${isShortTerm ? 'short-term' : 'long-term'}`}
      whileHover={{ y: -5 }}
    >
      <div className="goal-header">
        <div className="goal-icon">
          <goal.icon />
        </div>
        {isShortTerm ? (
          <div className="goal-timeline">{goal.timeline}</div>
        ) : (
          <div className={`goal-impact ${goal.impact.toLowerCase().replace(' ', '-')}`}>
            {goal.impact}
          </div>
        )}
      </div>
      <h4 className="goal-title">{goal.title}</h4>
      <p className="goal-description">{goal.description}</p>
      {isShortTerm ? (
        <div className="goal-progress">
          <div className="progress-label">Progreso: {goal.progress}%</div>
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${goal.progress}%` }}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          </div>
        </div>
      ) : (
        <div className="goal-timeline-long">{goal.timeline}</div>
      )}
    </motion.div>
  );
};

export default GoalCard;
