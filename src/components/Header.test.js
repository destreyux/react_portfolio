import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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

describe("Header Component - Hamburger Menu", () => {
  const setupAndOpenMenu = () => {
    render(<Header logoSrc={myLogo} />);
    const hamburgerButton = screen.getByLabelText("Toggle navigation menu");
    fireEvent.click(hamburgerButton);
  };

  test.each(navLinksData)(
    'renders menu link "$name" with correct href "$href"',
    ({ name, href }) => {
      setupAndOpenMenu();

      const mobileMenu = screen.getByRole("navigation", { hidden: true });
      expect(mobileMenu).toHaveClass("open");
      const linkElement = screen.getByLabelText(name);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", href);
    }
  );

  test("toggle menu visibility on hamburger click", () => {
    render(<Header logoSrc={myLogo} />);
    const hamburgerButton = screen.getByLabelText("Toggle navigation menu");

    expect(hamburgerButton).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(hamburgerButton);
    expect(hamburgerButton).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(hamburgerButton);
    expect(hamburgerButton).toHaveAttribute("aria-expanded", "false");
  });
  test.each(navLinksData)(
    "Header Component - desktop-nav",
    ({ name, href }) => {
      render(<Header />);
      const headerLink = screen.getByRole("link", { name: name });
      expect(headerLink).toBeInTheDocument();
      expect(headerLink).toHaveAttribute("href", href);
    }
  );
});
