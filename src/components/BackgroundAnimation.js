// src/components/BackgroundAnimation.js
import React, { useState, useEffect } from "react";
import "./BackgroundAnimation.css";
import {
  skillsData,
  MAX_LOGOS_VISIBLE,
  MIN_ANIMATION_DURATION,
  MAX_ANIMATION_DURATION,
  INITIAL_DELAY_MAX,
} from "../data/backgroundAnimationData";

function BackgroundAnimation() {
  const [logoPositions, setLogoPositions] = useState([]);

  useEffect(() => {
    const generateInitialState = () => {
      const shuffledSkills = [...skillsData].sort(() => 0.5 - Math.random());
      const selectedSkills = shuffledSkills.slice(0, MAX_LOGOS_VISIBLE);

      const positions = selectedSkills.map((skill, index) => {
        const initialTop = Math.random() * 85 + 7.5; // 7.5% to 92.5%
        const initialLeft = Math.random() * 90 + 5; // 5% to 95%

        const duration =
          Math.random() * (MAX_ANIMATION_DURATION - MIN_ANIMATION_DURATION) +
          MIN_ANIMATION_DURATION;
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

      console.log("Generated logo positions:", positions); // Debugging
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
          className="background-skill-logo"
          style={skill.style}
        />
      ))}
    </div>
  );
}

export default BackgroundAnimation;
