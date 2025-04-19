import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "./Projects";
import { projects } from "../data/ProjectData";

jest.mock("../data/ProjectData", () => ({
    projects: [
        {
            title: "Project 1",
            description: "Description for Project 1",
            imageUrl: "https://example.com/project1.png",
            liveUrl: "https://example.com/project1",
            repoUrl: "https://github.com/example/project1",
            tags: ["React", "JavaScript"],
        },
        {
            title: "Project 2",
            description: "Description for Project 2",
            imageUrl: "https://example.com/project2.png",
            liveUrl: "https://example.com/project2",
            repoUrl: "https://github.com/example/project2",
            tags: ["Node.js", "Express"],
        },
    ],
}));

describe("Projects Component", () => {
    test("renders the Projects section with a heading", () => {
        render(<Projects />);
        const heading = screen.getByRole("heading", { level: 2 });
        expect(heading).toHaveTextContent("My Projects");
    });

    test("renders all project cards", () => {
        render(<Projects />);
        const projectCards = screen.getAllByRole("heading", { level: 3 });
        expect(projectCards).toHaveLength(projects.length);

        // Check that each project's title is rendered
        projects.forEach((project) => {
            expect(screen.getByText(project.title)).toBeInTheDocument();
        });
    });

    test("renders project descriptions", () => {
        render(<Projects />);
        projects.forEach((project) => {
            expect(screen.getByText(project.description)).toBeInTheDocument();
        });
    });
});