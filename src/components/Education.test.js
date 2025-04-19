import React from "react";
import { render, screen } from "@testing-library/react";
import Education from "./Education";
import { education } from "../data/educationData";

jest.mock("../data/educationData", () => ({
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University A",
            dates: "2015 - 2019",
            location: "City A",
            description: "Focused on software engineering and data structures.",
            logoUrl: "https://example.com/logoA.png",
        },
        {
            degree: "Master of Science in Artificial Intelligence",
            institution: "University B",
            dates: "2020 - 2022",
            location: "City B",
            description: "Specialized in machine learning and AI systems.",
            logoUrl: null,
        },
    ],
}));

describe("Education Component", () => {
    test("renders the Education section with a heading", () => {
        render(<Education />);
        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Education");
    });

    test("renders all education items", () => {
        render(<Education />);
        const educationItems = screen.getAllByRole("heading", { level: 3 });
        expect(educationItems).toHaveLength(education.length);
    });

    test("renders institution names and degrees", () => {
        render(<Education />);
        education.forEach((edu) => {
            expect(screen.getByText(edu.degree)).toBeInTheDocument();
            expect(screen.getByText(edu.institution)).toBeInTheDocument();
        });
    });

    test("renders dates and locations if available", () => {
        render(<Education />);
        education.forEach((edu) => {
            const combinedText = edu.location ? `${edu.dates} | ${edu.location}` : edu.dates;
            expect(screen.getByText(combinedText)).toBeInTheDocument();
        });
    });

    test("renders descriptions if available", () => {
        render(<Education />);
        education.forEach((edu) => {
            if (edu.description) {
                expect(screen.getByText(edu.description)).toBeInTheDocument();
            }
        });
    });

    test("renders logos if logoUrl is provided", () => {
        render(<Education />);
        education.forEach((edu) => {
            if (edu.logoUrl) {
                const logo = screen.getByAltText(`${edu.institution} logo`);
                expect(logo).toBeInTheDocument();
                expect(logo).toHaveAttribute("src", edu.logoUrl);
            }
        });
    });
});