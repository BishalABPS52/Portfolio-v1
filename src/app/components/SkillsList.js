import React, { useState, useEffect } from "react";
import "./SkillsList.css"; // Import the CSS file

const skills = [
  "Next.js", "Web Development", "React.js", "Python", "C++", "HTML", "JavaScript",
  "Object-Oriented Programming", "Game Testing", "Public Speaking", "Software Testing",
  "Data Entry", "Data Science", "Game Development", "Front-End Development", "C",
  "Software Development", "MySQL", "Git", "Programming"
];

const SkillsList = () => {
  const [currentSkills, setCurrentSkills] = useState([]);
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    // Timer to update the skill list every 3 seconds
    const timer = setInterval(() => {
      if (skillIndex < skills.length) {
        // Update the list with 5 new skills
        setCurrentSkills((prevSkills) => [
          ...prevSkills,
          ...skills.slice(skillIndex, skillIndex + 5),
        ]);
        // Move the index forward by 5
        setSkillIndex((prevIndex) => prevIndex + 5);
      }
    }, 3000);

    // Clear the timer when all skills are displayed
    if (skillIndex >= skills.length) {
      clearInterval(timer);
    }

    return () => clearInterval(timer); // Cleanup on unmount
  }, [skillIndex]);

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <ul>
        {currentSkills.map((skill, index) => (
          <li key={index} style={{ animationDelay: `${index * 0.5}s` }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
