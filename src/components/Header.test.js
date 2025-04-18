// src/components/Header.test.js
import React from "react";
// Import render, screen, and fireEvent for interactions
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";
// You might need to import the logo if the component requires it as a prop
import myLogo from "../assets/my-logo.png";

describe("Header Component", () => {
  // Helper function to render the header
  const renderHeader = () => {
    render(<Header logoSrc={myLogo} />);
  };

  test("renders navigation links on desktop", () => {
    renderHeader();
    // Check for a desktop link (assuming it's not hidden by default CSS for tests)
    // Note: This test might fail depending on how CSS media queries are handled
    // in the test environment (JSDOM). It's often better to test
    // functionality triggered by interaction.
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
  });

  // Integration test for mobile menu toggle
  test("toggles mobile menu on hamburger click", () => {
    renderHeader();

    // 1. Find the hamburger button (using its accessible name)
    const hamburgerButton = screen.getByLabelText("Toggle navigation menu");
    expect(hamburgerButton).toBeInTheDocument();

    expect(hamburgerButton).toHaveAttribute("aria-expanded", "false");
    // Or find the nav menu and check visibility (if CSS handles it via non-display properties)
    const mobileNav = screen.getByRole("navigation", { name: "" }); // Assuming mobile nav has no aria-label

    fireEvent.click(hamburgerButton);

    expect(hamburgerButton).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(hamburgerButton);
    expect(hamburgerButton).toHaveAttribute("aria-expanded", "false");
  });
});
