// src/components/Footer.js
import React from "react";
import "./Footer.css"; // Make sure this CSS file has the corresponding styles

// Import your GitHub logo
import githubLogo from "../assets/logos/github-logo.svg";
import donationLogo from "../assets/logos/donation.jpg"; // Adjust path/filename if needed
// Optional: Import an icon for the Stripe link if desired
// import { FaStripeS } from 'react-icons/fa'; // Example using react-icons

function Footer() {
  const currentYear = new Date().getFullYear();
  const githubProfileUrl = "https://github.com/destreyux";
  // --- Define the Stripe Payment Link URL ---
  const stripePaymentLink = "https://buy.stripe.com/test_00geWG3tB5ZW3OU3cc";

  return (
    <footer className="app-footer">
      <div className="footer-content">
        {/* Section for social media/external links */}
        <div className="footer-links">
          {/* Link to GitHub Profile */}
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <p>Github</p>
            <img src={githubLogo} alt="GitHub" className="footer-social-icon" />
          </a>

          {/* --- ADD STRIPE PAYMENT LINK HERE --- */}
          <a
            href={stripePaymentLink}
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            aria-label="Support via Stripe" // Describe the link
            className="footer-stripe-link" // Optional: Add specific class if needed
          >
            <p>Donation</p>
            <img
              src={donationLogo}
              alt="Donation"
              className="footer-social-icon"
            />
          </a>
        </div>

        {/* Copyright Information */}
        <p className="footer-copyright">
          © {currentYear} destreyux all rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
