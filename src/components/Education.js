// src/components/Education.js
import React from "react";
import "./Education.css"; // Styles for this component
import { education } from "../data/educationData"; // Import the data (now includes logoUrl)

function Education() {
  return (
    <section id="education" className="section education-section">
      <h2>Education</h2>
      <div className="education-list">
        {/* Map over the education data array */}
        {education.map((edu, index) => (
          // Use the institution name or index for a unique key
          <div key={index} className="education-item">
            {/* Conditionally render the logo if a logoUrl exists */}
            {edu.logoUrl && (
              <img
                src={edu.logoUrl} // Use the logoUrl from the data
                alt={`${edu.institution} logo`} // Alt text for accessibility
                className="education-logo"
              />
            )}

            {/* Wrap text details in a div for layout control */}
            <div className="education-details">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p className="education-dates">
                {edu.dates}
                {/* Conditionally add location if it exists */}
                {edu.location ? ` | ${edu.location}` : ""}
              </p>
              {/* Conditionally render description if it exists */}
              {edu.description && (
                <p className="education-description">{edu.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
