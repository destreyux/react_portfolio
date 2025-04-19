// src/components/Hero.test.js
import React from "react";
// Import render and screen
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "./Hero";

describe("Hero Component", () => {
  test("renders the main heading correctly", () => {
    render(<Hero />);
    const mainHeading = screen.getByRole("heading", {
      level: 1,
      name: /My Portfolio/i,
    });
    expect(mainHeading).toBeInTheDocument();
  });

  test("renders the subheading correctly", () => {
    render(<Hero />);
    const subHeading = screen.getByRole("heading", {
      level: 2,
      name: /Software Quality Assurance Engineer/i,
    });
    expect(subHeading).toBeInTheDocument();
  });

  test("renders the introductory paragraph text", () => {
    render(<Hero />);
    const paragraphText = screen.getByText(
      /passionate about software automation engineering/i
    );
    expect(paragraphText).toBeInTheDocument();
  });

  // --- REVISED TEST using getByTestId ---
  test("section element has the correct id and classes", () => {
    render(<Hero />);

    // Find the element using the data-testid attribute
    const sectionElement = screen.getByTestId("hero-section");

    // Now perform assertions directly on the element found via screen query
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveAttribute("id", "hero");
    expect(sectionElement).toHaveClass("section", "hero-section");
    // Check tagName using a matcher, which avoids direct node access lint error
    expect(sectionElement).toHaveProperty("tagName", "SECTION");
  });
  // --- END REVISED TEST ---
});
