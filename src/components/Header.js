// src/components/Header.js
import React, { useState } from "react";
import "./Header.css";
// import DarkModeToggle from './DarkModeToggle'; // Keep if you have it

// Keep props as they are (logoSrc, theme, toggleTheme if needed)
function Header({ logoSrc /*, theme, toggleTheme */ }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <a
          href="#hero"
          className="header-logo-link"
          onClick={handleLinkClick}
          data-testid="hero"
        >
          <img
            src={logoSrc}
            alt="Your Logo - Scroll to top"
            className="header-logo"
          />
        </a>

        <div className="header-right-content">
          {/* --- Add aria-label to Desktop Nav --- */}
          <nav className="header-nav desktop-nav" aria-label="Main navigation">
            {/* ... your desktop links ... */}
            <a href="#hero" aria-label="Home">
              Home
            </a>
            <a href="#projects" aria-label="Projects">
              Projects
            </a>
            <a href="#education" aria-label="Education">
              Education
            </a>
            <a href="#certifications" aria-label="Certifications">
              Certifications
            </a>
            <a href="#skills" aria-label="Skills">
              Skills
            </a>
            <a href="#feedback" aria-label="Feedback">
              Feedback
            </a>
          </nav>
          {/* <DarkModeToggle theme={theme} toggleTheme={toggleTheme} /> */}
        </div>

        <button
          className={`hamburger-menu ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* --- Add aria-label to Mobile Nav --- */}
      <nav
        className={`mobile-nav-menu ${isMobileMenuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen} // Add aria-hidden for accessibility
      >
        {/* ... your mobile links ... */}
        <a href="#hero" onClick={handleLinkClick} aria-label="Home">
          Home
        </a>
        <a href="#projects" onClick={handleLinkClick} aria-label="Projects">
          Projects
        </a>
        <a href="#education" onClick={handleLinkClick} aria-label="Education">
          Education
        </a>
        <a
          href="#certifications"
          onClick={handleLinkClick}
          aria-label="Certifications"
        >
          Certifications
        </a>
        <a href="#skills" onClick={handleLinkClick} aria-label="Skills">
          Skills
        </a>
        <a href="#feedback" onClick={handleLinkClick} aria-label="Feedback">
          Feedback
        </a>
      </nav>
    </header>
  );
}

export default Header;
