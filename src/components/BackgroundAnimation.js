import React, { useState, useEffect } from "react";
import "./BackgroundAnimation.css"; // We'll create this CSS file next

// --- Import your logos (same as before) ---
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

// --- Skill data (same as before) ---
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
const MAX_LOGOS_VISIBLE = 12; // How many logos to animate in the background
const MIN_ANIMATION_DURATION = 10; // Minimum seconds for a full bounce loop
const MAX_ANIMATION_DURATION = 20; // Maximum seconds for a full bounce loop

function BackgroundAnimation() {
  const [logoPositions, setLogoPositions] = useState([]);

  useEffect(() => {
    // Generate positions and animation details only once on mount
    const generateInitialState = () => {
      // Shuffle skills for randomness
      const shuffledSkills = [...skillsData].sort(() => 0.5 - Math.random());
      const selectedSkills = shuffledSkills.slice(0, MAX_LOGOS_VISIBLE);

      const positions = selectedSkills.map((skill, index) => {
        // Start position somewhere within the viewport (not exactly on edge)
        const initialTop = Math.random() * 80 + 10; // 10% to 90%
        const initialLeft = Math.random() * 80 + 10; // 10% to 90%

        // Random duration and delay for chaotic movement
        const duration =
          Math.random() * (MAX_ANIMATION_DURATION - MIN_ANIMATION_DURATION) +
          MIN_ANIMATION_DURATION;
        const delay = Math.random() * MAX_ANIMATION_DURATION; // Delay up to max duration for staggered starts

        return {
          ...skill,
          id: `${skill.name}-${index}-${Date.now()}`, // Unique key
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

    // No interval needed here, animation is infinite via CSS
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="background-animation-container" aria-hidden="true">
      {" "}
      {/* Hide from screen readers */}
      {logoPositions.map((skill) => (
        <img
          key={skill.id}
          src={skill.logo}
          alt="" // Alt text is empty as it's decorative
          className="background-skill-logo"
          style={skill.style}
          // title={skill.name} // Optional: Tooltip might be distracting in background
        />
      ))}
    </div>
  );
}

export default BackgroundAnimation;
