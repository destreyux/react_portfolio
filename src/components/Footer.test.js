// src/components/Footer.test.js
import React from "react";
// Import functions from React Testing Library
import { render, screen } from "@testing-library/react";
// Import the jest-dom matchers (like .toBeInTheDocument())
import "@testing-library/jest-dom";

// Import the component to test
import Footer from "./Footer";

// Describe block groups tests for a specific component
describe("Footer Component", () => {
  // Test block for a specific scenario
  test("renders copyright information with the current year", () => {
    // 1. Render the component
    render(<Footer />);

    // 2. Find the copyright element
    // We use a regular expression to match the text regardless of the exact year
    const currentYear = new Date().getFullYear();
    // screen.getByText finds an element by its text content
    const copyrightElement = screen.getByText(
      new RegExp(`© ${currentYear} destreyux all rights reserved.`, "i") // 'i' for case-insensitive
    );

    // 3. Assert that the element exists in the document
    // expect() is from Jest, .toBeInTheDocument() is from jest-dom/RTL
    expect(copyrightElement).toBeInTheDocument();
  });

  test("renders GitHub link with correct URL", () => {
    render(<Footer />);
    // Find the link by its accessible name (aria-label)
    const githubLink = screen.getByLabelText("GitHub Profile");
    expect(githubLink).toBeInTheDocument();
    // Check if the href attribute is correct
    expect(githubLink).toHaveAttribute("href", "https://github.com/destreyux");
  });

  test("renders Stripe link with correct URL", () => {
    render(<Footer />);
    const stripeLink = screen.getByLabelText("Support via Stripe"); // Use the aria-label
    expect(stripeLink).toBeInTheDocument();
    expect(stripeLink).toHaveAttribute(
      "href",
      "YOUR_LIVE_MODE_STRIPE_LINK_URL" // <-- IMPORTANT: Use the actual URL from your code
    );
    // Check if it opens in a new tab
    expect(stripeLink).toHaveAttribute("target", "_blank");
  });
});
