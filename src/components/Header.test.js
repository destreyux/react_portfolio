// src/components/Header.test.js
import React from "react";
// Import 'within'
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import myLogo from "../assets/my-logo.png";

const navLinksData = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Skills", href: "#skills" },
  { name: "Feedback", href: "#feedback" },
];

describe("Header Component", () => {
  const setup = () => {
    render(<Header logoSrc={myLogo} />);
  };

  // --- Tests for logo and basic rendering (no changes needed) ---
  test("renders header banner and logo", () => {
    setup();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(
      screen.getByAltText(/Your Logo - Scroll to top/i)
    ).toBeInTheDocument();
  });

  test("renders logo link pointing to #hero", () => {
    setup();
    const logoLink = screen.getByRole("link", {
      name: /Your Logo - Scroll to top/i,
    });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "#hero");
  });

  // --- Test the always-visible desktop links using 'within' ---
  describe("Desktop Navigation Links", () => {
    test.each(navLinksData)(
      'renders desktop link "$name" with href "$href"',
      ({ name, href }) => {
        setup();
        // Find the specific desktop navigation container by its accessible name
        const desktopNav = screen.getByRole("navigation", {
          name: /Main navigation/i,
        });
        // Query *within* that container for the link
        const linkElement = within(desktopNav).getByRole("link", {
          name: name,
        });

        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute("href", href);
      }
    );
  });

  // --- Tests for hamburger toggle (no changes needed) ---
  test("renders hamburger button", () => {
    setup();
    expect(screen.getByLabelText("Toggle navigation menu")).toBeInTheDocument();
  });

  test("hamburger button toggles aria-expanded on click", () => {
    setup();
    const hamburgerButton = screen.getByLabelText("Toggle navigation menu");
    expect(hamburgerButton).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(hamburgerButton);
    expect(hamburgerButton).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(hamburgerButton);
    expect(hamburgerButton).toHaveAttribute("aria-expanded", "false");
  });

  // --- Test the dropdown menu links using 'within' AFTER clicking hamburger ---
  describe("Dropdown Navigation Menu Links", () => {
    test.each(navLinksData)(
      'renders dropdown link "$name" with href "$href" when menu is open',
      ({ name, href }) => {
        setup();
        const hamburgerButton = screen.getByLabelText("Toggle navigation menu");
        fireEvent.click(hamburgerButton); // Open the menu

        // Find the specific mobile navigation container by its accessible name
        const mobileNav = screen.getByRole("navigation", {
          name: /Mobile navigation/i,
        });
        // Query *within* that container for the link
        const linkElement = within(mobileNav).getByRole("link", { name: name });

        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute("href", href);
      }
    );

    test("clicking a dropdown link closes the menu", () => {
      setup();
      const hamburgerButton = screen.getByLabelText("Toggle navigation menu");
      fireEvent.click(hamburgerButton); // Open

      // Find the mobile nav container first
      const mobileNav = screen.getByRole("navigation", {
        name: /Mobile navigation/i,
      });
      // Find the link within the mobile nav
      const dropdownLink = within(mobileNav).getByRole("link", {
        name: "Projects",
      }); // Pick any link text

      expect(hamburgerButton).toHaveAttribute("aria-expanded", "true");
      fireEvent.click(dropdownLink); // Click the link
      expect(hamburgerButton).toHaveAttribute("aria-expanded", "false"); // Should close
    });

    test("clicking the logo link closes the menu", () => {
      setup();
      const hamburgerButton = screen.getByLabelText("Toggle navigation menu");
      const logoLink = screen.getByRole("link", {
        name: /Your Logo - Scroll to top/i,
      });

      fireEvent.click(hamburgerButton); // Open
      expect(hamburgerButton).toHaveAttribute("aria-expanded", "true");

      fireEvent.click(logoLink); // Click logo
      expect(hamburgerButton).toHaveAttribute("aria-expanded", "false"); // Should close
    });
  });
});
