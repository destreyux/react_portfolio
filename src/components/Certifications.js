// src/components/Certifications.js
import React from "react";
import "./Certifications.css"; // Styles for this component
// Make sure you are importing from the correct data file path
import { certificationsData } from "../data/certificationsData"; // Import the data (now includes logoUrl)

function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <h2>Certifications</h2>
      {/* Use a <ul> since these are conceptually list items */}
      <ul className="certifications-list">
        {/* Map over the certifications data array */}
        {certificationsData.map((cert, index) => (
          // Use the certification name or index for a unique key
          <li key={index} className="certification-item">
            {/* Conditionally render the logo if a logoUrl exists */}
            {cert.logoUrl && (
              <img
                src={cert.logoUrl} // Use the logoUrl from the data
                alt={`${cert.issuer} logo`} // Alt text for accessibility
                className="cert-logo"
              />
            )}

            {/* Text details */}
            <div className="cert-details">
              <h3>{cert.name}</h3>
              <p>
                {cert.issuer} - {cert.date}
              </p>
              {/* Conditionally render the verification link if it exists */}
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  Verify
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
