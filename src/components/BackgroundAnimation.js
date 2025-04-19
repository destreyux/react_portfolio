// src/components/BackgroundAnimation.js
import React, { useState, useEffect, useRef } from "react";
import "./BackgroundAnimation.css"; // Ensure CSS uses logoFadeIn and handles hover

// Assuming these are defined in the data file or define them here
import {
  skillsData,
  MAX_LOGOS_VISIBLE,
  // MIN_ANIMATION_DURATION, // Not directly used in JS animation speed
  // MAX_ANIMATION_DURATION, // Not directly used in JS animation speed
} from "../data/backgroundAnimationData"; // Verify path

// Define the state structure conceptually (no interface in JS)
// interface LogoState {
//   id: string;
//   logo: string; // Image source
//   x: number; // Position (percentage)
//   y: number; // Position (percentage)
//   vx: number; // Velocity X (percentage points per second)
//   vy: number; // Velocity Y (percentage points per second)
// }

// --- Configuration for JS Animation ---
const LOGO_SIZE_APPROX_PERCENT_W = 5;
const LOGO_SIZE_APPROX_PERCENT_H = 8;
const MIN_VELOCITY = 3; // Min speed (percent per second)
const MAX_VELOCITY = 8; // Max speed (percent per second)
// --- End Configuration ---

function BackgroundAnimation() {
  // Remove generic type <LogoState[]>
  const [logos, setLogos] = useState([]);
  // Remove generic type <number | null>
  const animationFrameId = useRef(null);
  // Remove generic type <number | null>
  const lastTimestamp = useRef(null);
  // Remove generic type <HTMLDivElement>
  const containerRef = useRef(null);

  useEffect(() => {
    const initialLogos = []; // Initialize empty array
    const shuffledSkills = [...skillsData].sort(() => 0.5 - Math.random());
    const limit = Math.min(MAX_LOGOS_VISIBLE, skillsData.length);
    const selectedSkills = shuffledSkills.slice(0, limit);

    selectedSkills.forEach((skill, index) => {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * (MAX_VELOCITY - MIN_VELOCITY) + MIN_VELOCITY;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      initialLogos.push({
        id: `${skill.name}-${index}-${Date.now()}`,
        logo: skill.logo,
        x: Math.random() * (100 - LOGO_SIZE_APPROX_PERCENT_W),
        y: Math.random() * (100 - LOGO_SIZE_APPROX_PERCENT_H),
        vx: vx,
        vy: vy,
      });
    });
    setLogos(initialLogos);

    // Need to define animate function before using it in requestAnimationFrame
    const animate = (timestamp) => {
      if (!lastTimestamp.current) {
        lastTimestamp.current = timestamp;
        animationFrameId.current = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = (timestamp - lastTimestamp.current) / 1000;
      lastTimestamp.current = timestamp;

      // Use functional update form of setLogos for safety
      setLogos(currentLogos =>
        currentLogos.map(logo => {
          let newX = logo.x + logo.vx * deltaTime;
          let newY = logo.y + logo.vy * deltaTime;
          let newVx = logo.vx;
          let newVy = logo.vy;

          const rightBoundary = 100 - LOGO_SIZE_APPROX_PERCENT_W;
          const bottomBoundary = 100 - LOGO_SIZE_APPROX_PERCENT_H;

          if (newX <= 0) {
            newVx = Math.abs(logo.vx);
            newX = 0;
          } else if (newX >= rightBoundary) {
            newVx = -Math.abs(logo.vx);
            newX = rightBoundary;
          }

          if (newY <= 0) {
            newVy = Math.abs(logo.vy);
            newY = 0;
          } else if (newY >= bottomBoundary) {
            newVy = -Math.abs(logo.vy);
            newY = bottomBoundary;
          }

          // Return a new object for immutability
          return {
            ...logo,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        })
      );

      animationFrameId.current = requestAnimationFrame(animate);
    };


    // Start the animation loop
    lastTimestamp.current = performance.now();
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures this runs only once on mount


  return (
    <div ref={containerRef} className="background-animation-container" aria-hidden="true">
      {logos.map((logo) => (
        <img
          key={logo.id}
          src={logo.logo}
          alt=""
          className="background-skill-logo"
          style={{
            top: `${logo.y}%`,
            left: `${logo.x}%`,
            // Ensure CSS handles initial opacity and fade-in animation
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundAnimation;