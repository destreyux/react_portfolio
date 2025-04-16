import React from "react";
import "./Skills.css";
// Optional: Import skill logos if you want to display them
// import reactLogo from '../assets/logos/react-original.svg';
// import jsLogo from '../assets/logos/javascript-original.svg';
// ... etc

// Define your skills - can be simple strings or objects with logos
const skillCategories = {
  Languages: ["JavaScript", "Python", "C#", "HTML5", "CSS3", "SQL"],
  "Frameworks/Libraries": [
    "Selenium",
    "React",
    "nodeJs",
    "jQuery",
    "Pandas",
    "Openpyxl",
    "Playwright",
    "Cypress",
    "google-generativeai",
    "requests",
  ],
  "Tools/Platforms": [
    "Git",
    "Docker",
    "AWS",
    "Jenkins (Test Management)",
    "Jira (Issue-Tracking)",
    "Azure DevOps (CI/CD)",
    "TestComplete",
    "BitBar",
    "Power BI",
    "LifePro",
    "OnBase",
    "Microsoft Access (SQL Query)",
  ],
};

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill}>
                  {/* Optional: Add logo */}
                  {/* <img src={getLogoForSkill(skill)} alt={skill} /> */}
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// Optional helper function to get logo based on skill name
// function getLogoForSkill(skillName) {
//   switch(skillName.toLowerCase()) {
//     case 'react': return reactLogo;
//     case 'javascript': return jsLogo;
//     // ... add cases for other skills
//     default: return null; // Or a default placeholder logo
//   }
// }

export default Skills;
