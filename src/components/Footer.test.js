import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer Component", () => {
  // Test block for a specific scenario
  test("renders copyright information with the current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightElement = screen.getByText(
      new RegExp(`© ${currentYear} destreyux all rights reserved.`, "i") // 'i' for case-insensitive
    );

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
    const stripeLink = screen.getByLabelText("Support via Stripe");
    expect(stripeLink).toBeInTheDocument();
    expect(stripeLink).toHaveAttribute(
      "href",
      "https://buy.stripe.com/test_00geWG3tB5ZW3OU3cc"
    );
    // Check if it opens in a new tab
    expect(stripeLink).toHaveAttribute("target", "_blank");
  });
});
