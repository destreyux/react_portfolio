// src/components/BackgroundAnimation.js
import React, { useState, useEffect } from "react";
import "./BackgroundAnimation.css"; // We'll update this CSS file next

// --- Import your logos ---
import azureDevopsLogo from "../assets/logos/azuredevops-plain.svg";
import cLogo from "../assets/logos/c-original.svg";
import cssLogo from "../assets/logos/css3-original.svg";
import cypressioLogo from "../assets/logos/cypressio-original.svg";
import htmlLogo from "../assets/logos/html5-original.svg";
import jsLogo from "../assets/logos/javascript-original.svg";
import jenkinsLogo from "../assets/logos/jenkins-original.svg";
import jiraLogo from "../assets/logos/jira-original.svg";
import nodeLogo from "../assets/logos/nodejs-original.svg";
import playwrightLogo from "../assets/logos/playwright-original.svg";
import pythonLogo from "../assets/logos/python-original.svg";
import reactLogo from "../assets/logos/react-original.svg";
import seleniumLogo from "../assets/logos/selenium-original.svg";
import sqlDevLogo from "../assets/logos/sqldeveloper-original.svg";
// --- Add any other logos ---

// --- Skill data ---
const skillsData = [
  { name: "Azure DevOps", logo: azureDevopsLogo },
  { name: "C", logo: cLogo },
  { name: "CSS3", logo: cssLogo },
  { name: "Cypress.io", logo: cypressioLogo },
  { name: "HTML5", logo: htmlLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Jenkins", logo: jenkinsLogo },
  { name: "Jira", logo: jiraLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "Playwright", logo: playwrightLogo },
  { name: "Python", logo: pythonLogo },
  { name: "React", logo: reactLogo },
  { name: "Selenium", logo: seleniumLogo },
  { name: "SQL Developer", logo: sqlDevLogo },
  // --- Add other skills ---
];

// --- Configuration ---
const MAX_LOGOS_VISIBLE = 8; // Show exactly 8 logos
const MIN_ANIMATION_DURATION = 20; // Minimum seconds for a loop
const MAX_ANIMATION_DURATION = 40; // Maximum seconds for a loop
const INITIAL_DELAY_MAX = 1.0; // Max delay in seconds for initial fade-in (very short)

function BackgroundAnimation() {
  const [logoPositions, setLogoPositions] = useState([]);

  useEffect(() => {
    const generateInitialState = () => {
      const shuffledSkills = [...skillsData].sort(() => 0.5 - Math.random());
      // Ensure we only take up to MAX_LOGOS_VISIBLE, even if skillsData is shorter
      const selectedSkills = shuffledSkills.slice(
        0,
        Math.min(MAX_LOGOS_VISIBLE, skillsData.length)
      );

      const positions = selectedSkills.map((skill, index) => {
        const initialTop = Math.random() * 85 + 7.5; // 7.5% to 92.5%
        const initialLeft = Math.random() * 90 + 5; // 5% to 95%

        const duration =
          Math.random() * (MAX_ANIMATION_DURATION - MIN_ANIMATION_DURATION) +
          MIN_ANIMATION_DURATION;
        // --- CHANGE: Very short initial random delay ---
        const delay = Math.random() * INITIAL_DELAY_MAX;

        return {
          ...skill,
          id: `${skill.name}-${index}-${Date.now()}`,
          style: {
            top: `${initialTop}%`,
            left: `${initialLeft}%`,
            "--animation-duration": `${duration}s`,
            "--animation-delay": `${delay}s`,
          },
        };
      });
      setLogoPositions(positions);
    };

    generateInitialState();
  }, []);

  return (
    <div className="background-animation-container" aria-hidden="true">
      {logoPositions.map((skill) => (
        <img
          key={skill.id}
          src={skill.logo}
          alt=""
          className="background-skill-logo" // CSS handles animation and hover
          style={skill.style} // Provides initial position and CSS variables
        />
      ))}
    </div>
  );
}

export default BackgroundAnimation;
