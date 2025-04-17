// src/components/Footer.js
import React from "react";
import "./Footer.css";
// --- IMPORT YOUR GITHUB LOGO ---
import githubLogo from "../assets/logos/github-logo.svg";

function Footer() {
  const currentYear = new Date().getFullYear();
  const githubProfileUrl = "https://github.com/destreyux";

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-links">
          {/* GitHub Link with Logo */}
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <img src={githubLogo} alt="GitHub" className="footer-social-icon" />
          </a>
        </div>
        <p className="footer-copyright">
          © {currentYear} destreyux all rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
