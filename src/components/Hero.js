import React from "react";
import "./Hero.css";

function Hero() {
  return (
    // Add id for potential navigation linking
    <section id="hero" className="section hero-section">
      <h1>My Portfolio</h1>
      <h2>Software Quality Assurance Engineer</h2>
      <p>
        Welcome to my portfolio! I'm passionate about software automation
        engineering specifically for testing web and mobile applications,
        however I do have experience with building web applications and android
        mobile applications.{" "}
      </p>
      {/* Optional: Add Call to Action button */}
      {/* <a href="#contact" className="cta-button">Get In Touch</a> */}
    </section>
  );
}

export default Hero;
