import React from "react";
import { render, screen } from "@testing-library/react";
import BackgroundAnimation from "./BackgroundAnimation";

// Mock the data and constants from backgroundAnimationData.js
jest.mock("../data/backgroundAnimationData", () => ({
  skillsData: [
    { name: "React", logo: "react-logo.svg" },
    { name: "JavaScript", logo: "js-logo.svg" },
    { name: "CSS3", logo: "css-logo.svg" },
    { name: "HTML5", logo: "html-logo.svg" },
    { name: "Node.js", logo: "node-logo.svg" },
    { name: "Python", logo: "python-logo.svg" },
    { name: "Jenkins", logo: "jenkins-logo.svg" },
    { name: "Azure DevOps", logo: "azure-logo.svg" },
  ],
  MAX_LOGOS_VISIBLE: 8,
  MIN_ANIMATION_DURATION: 20,
  MAX_ANIMATION_DURATION: 40,
  INITIAL_DELAY_MAX: 1.0,
}));

describe("BackgroundAnimation Component", () => {
  test("renders the correct number of logos", () => {
    render(<BackgroundAnimation />);
    const logos = screen.getAllByAltText(""); // Query all <img> elements with an empty alt attribute
    expect(logos.length).toBe(8); // Ensure exactly 8 logos are rendered
  });

  test("logos have appropriate styles applied", () => {
    render(<BackgroundAnimation />);
    const logos = screen.getAllByAltText(""); // Query all <img> elements with an empty alt attribute
  });
});