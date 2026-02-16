import React, { useState } from 'react';
import SkillsHeader from './SkillsHeader';
import CategoryNavigation from './CategoryNavigation';
import SkillsContent from './SkillsContent';
import AchievementSection from './AchievementSection';
import { skills, frameworks, databases, tools } from './skillsData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const counts = {
    skills: skills.length,
    frameworks: frameworks.length,
    databases: databases.length,
    tools: tools.length
  };

  return (
    <section className="skills page-content">
      <div className="container">
        <SkillsHeader />

        <CategoryNavigation
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          counts={counts}
        />

        <SkillsContent
          activeCategory={activeCategory}
          skills={skills}
          frameworks={frameworks}
          databases={databases}
          tools={tools}
        />

        <AchievementSection />
      </div>
    </section>
  );
};

export default Skills;
