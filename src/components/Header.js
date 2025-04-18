// src/components/Header.js
import React, { useState } from "react";
import "./Header.css";

function Header({ logoSrc }) {
  // State to track if the mobile menu is open
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="app-header">
      <div className="header-content">
        {/* Logo Link - points to #hero (Home) */}
        <a href="#hero" className="header-logo-link" onClick={handleLinkClick}>
          <img
            src={logoSrc}
            alt="Your Logo - Scroll to top"
            className="header-logo"
          />
        </a>

        {/* --- Desktop Navigation (visible by default) --- */}
        <nav className="header-nav desktop-nav">
          {/* Update Link Text Here */}
          <a href="#hero">Home</a> {/* Added Home link */}
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#skills">Skills</a>
          <a href="#feedback">Feedback</a>
        </nav>

        {/* --- Hamburger Menu Button (hidden by default, shown on mobile) --- */}
        <button
          className={`hamburger-menu ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* --- Mobile Navigation Menu (hidden by default, toggled by state) --- */}
      <nav className={`mobile-nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {/* Update Link Text Here Too */}
        <a href="#hero" onClick={handleLinkClick}>
          Home
        </a>{" "}
        {/* Added Home link */}
        <a href="#projects" onClick={handleLinkClick}>
          Projects
        </a>
        <a href="#education" onClick={handleLinkClick}>
          Education
        </a>
        <a href="#certifications" onClick={handleLinkClick}>
          Certifications
        </a>
        <a href="#skills" onClick={handleLinkClick}>
          Skills
        </a>
        <a href="#feedback" onClick={handleLinkClick}>
          Feedback
        </a>
        {/* <a href="#contact" onClick={handleLinkClick}>Contact</a> */}
      </nav>
    </header>
  );
}

export default Header;
