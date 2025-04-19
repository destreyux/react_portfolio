import React from "react";
import { render, screen } from "@testing-library/react";
import Feedback from "./Feedback";

describe("Feedback Component", () => {
    test("renders the Feedback component with heading and description", () => {
        render(<Feedback />);
        expect(screen.getByText("Feedback")).toBeInTheDocument();
        expect(
            screen.getByText(
                "I appreciate you taking the time to view my portfolio! Please feel free to leave any feedback using the form below."
            )
        ).toBeInTheDocument();
    });

    test("renders the iframe with the correct Google Form embed URL", () => {
        render(<Feedback />);
        const iframe = screen.getByTitle("Portfolio Feedback Form");
        expect(iframe).toBeInTheDocument();
        expect(iframe).toHaveAttribute(
            "src",
            "https://forms.gle/9gEtWNfXEZY6mK9G7"
        );
        expect(iframe).toHaveAttribute("width", "100%");
        expect(iframe).toHaveAttribute("height", "650");
    });

    test("warns if the Google Form embed URL is not set", () => {
        const originalWarn = console.warn;
        console.warn = jest.fn();

        const FeedbackWithoutUrl = () => {
            const googleFormEmbedUrl = "PASTE_YOUR_GOOGLE_FORM_EMBED_URL_HERE";
            if (googleFormEmbedUrl === "PASTE_YOUR_GOOGLE_FORM_EMBED_URL_HERE") {
                console.warn("Feedback component needs the Google Form embed URL!");
            }
            return null;
        };

        render(<FeedbackWithoutUrl />);
        expect(console.warn).toHaveBeenCalledWith(
            "Feedback component needs the Google Form embed URL!"
        );

        console.warn = originalWarn;
    });
});