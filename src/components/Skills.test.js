import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills Component", () => {
    test("renders the Skills section with a heading", () => {
        render(<Skills />);
        const heading = screen.getByRole("heading", { level: 2 });
        expect(heading).toHaveTextContent("My Skills");
    });

    test("renders all skill categories", () => {
        render(<Skills />);
        const categories = screen.getAllByRole("heading", { level: 3 });
        expect(categories).toHaveLength(3); // There are 3 categories in skillCategories
        expect(categories.map((category) => category.textContent)).toEqual([
            "Languages",
            "Frameworks/Libraries",
            "Tools/Platforms",
        ]);
    });

    test("renders all skills within each category", () => {
        render(<Skills />);
        const languages = screen.getByText("Languages").nextElementSibling;
        const frameworks = screen.getByText("Frameworks/Libraries").nextElementSibling;
        const tools = screen.getByText("Tools/Platforms").nextElementSibling;

        // Check the number of skills in each category
        expect(languages.children).toHaveLength(6); // 6 skills in "Languages"
        expect(frameworks.children).toHaveLength(10); // 10 skills in "Frameworks/Libraries"
        expect(tools.children).toHaveLength(12); // 12 skills in "Tools/Platforms"

        // Check specific skills
        expect(screen.getByText("JavaScript")).toBeInTheDocument();
        expect(screen.getByText("React")).toBeInTheDocument();
        expect(screen.getByText("Docker")).toBeInTheDocument();
    });
});