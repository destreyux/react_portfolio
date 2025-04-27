import React from "react";
import { render, screen, act } from "@testing-library/react";
import TestRunnerSimulation from "./TestRunnerSimulation";

jest.useFakeTimers(); // Use fake timers to control time-based effects

describe("TestRunnerSimulation Component", () => {
    test("renders all test descriptions in the initial pending state", () => {
        render(<TestRunnerSimulation onComplete={jest.fn()} />);
        const pendingTests = screen.getAllByText("[PENDING]");
        expect(pendingTests).toHaveLength(9); // Ensure all 8 tests are initially pending
    });
});