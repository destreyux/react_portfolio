import React from "react";
import { render, screen } from "@testing-library/react";
import BackgroundAnimation from "./BackgroundAnimation";
import { skillsData } from "../data/skillsData"; // Assuming skillsData is exported from a data file

describe("BackgroundAnimation Component", () => {
    test("renders the correct number of logos", () => {
        render(<BackgroundAnimation />);
        const logos = screen.getAllByRole("img", { hidden: true });
        expect(logos.length).toBeLessThanOrEqual(8); // MAX_LOGOS_VISIBLE is 8
        expect(logos.length).toBeGreaterThan(0); // Ensure at least one logo is rendered
    });

    test("logos have appropriate styles applied", () => {
        render(<BackgroundAnimation />);
        const logos = screen.getAllByRole("img", { hidden: true });

        logos.forEach((logo) => {
            expect(logo).toHaveStyle("--animation-duration");
            expect(logo).toHaveStyle("--animation-delay");
            expect(logo).toHaveStyle("top");
            expect(logo).toHaveStyle("left");
        });
    });

    test("logos are rendered with unique keys", () => {
        render(<BackgroundAnimation />);
        const logos = screen.getAllByRole("img", { hidden: true });
        const keys = logos.map((logo) => logo.getAttribute("key"));
        const uniqueKeys = new Set(keys);
        expect(uniqueKeys.size).toBe(keys.length); // Ensure all keys are unique
    });
});