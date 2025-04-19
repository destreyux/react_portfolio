// src/components/TestRunnerSimulation.js
import React, { useState, useEffect } from "react";
import "./TestRunnerSimulation.css"; // We'll create this CSS

// --- MANUALLY DEFINE YOUR TEST SUITES/DESCRIPTIONS HERE ---
// Mirror the 'describe' or key test descriptions from your actual tests
const testDescriptions = [
  "Footer Component Renders Correctly",
  "Header Component Toggles Menu",
  "Hero Component Displays Name",
  "Project Card Renders Data",
  "Education Section Loads Data",
  "Certification Section Loads Data",
  "Skills Section Structure",
  "Feedback Form Section Renders",
  // Add more descriptive names based on your actual tests
];
// --- END TEST DEFINITIONS ---

// Speed controls (milliseconds)
const RUNNING_DELAY = 350; // How long to show "RUNNING..."
const PASS_DELAY = 150; // How long after "PASS" before starting next test

// Component receives a prop to call when simulation is done
function TestRunnerSimulation({ onComplete }) {
  const [tests, setTests] = useState(
    testDescriptions.map((desc) => ({ name: desc, status: "pending" })) // Initial state: pending
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // If all tests are done, call the onComplete callback after a short delay
    if (currentIndex >= tests.length) {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 500); // Wait half a second after the last "PASS"
      return () => clearTimeout(completeTimer); // Cleanup timer
    }

    // Simulate the test running process
    const currentTestTimer = setTimeout(
      () => {
        // 1. Set current test to 'running'
        setTests((prevTests) =>
          prevTests.map((test, index) =>
            index === currentIndex ? { ...test, status: "running" } : test
          )
        );

        // 2. After a short delay, set current test to 'pass'
        const passTimer = setTimeout(() => {
          setTests((prevTests) =>
            prevTests.map((test, index) =>
              index === currentIndex ? { ...test, status: "pass" } : test
            )
          );
          // 3. Move to the next test index for the next cycle
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, RUNNING_DELAY); // How long it shows "RUNNING"

        // Cleanup pass timer if component unmounts or effect re-runs
        return () => clearTimeout(passTimer);
      },
      currentIndex === 0 ? 100 : PASS_DELAY
    ); // Start first test almost immediately, delay between others

    // Cleanup current test timer
    return () => clearTimeout(currentTestTimer);

    // Dependency array: effect runs when currentIndex changes
  }, [currentIndex, tests.length, onComplete]);

  return (
    <div className="test-simulation-container">
      <div className="test-simulation-output">
        <h2>Initializing Portfolio Integrity Scan...</h2>
        {tests.map((test, index) => (
          <div key={index} className={`test-line status-${test.status}`}>
            <span className="test-status">
              {test.status === "pending" && "[PENDING]"}
              {test.status === "running" && "[RUNNING]"}
              {test.status === "pass" && "[ PASS  ]"}
              {/* Add fail condition if you want to simulate failures */}
              {/* {test.status === 'fail' && '[ FAIL  ]'} */}
            </span>
            <span className="test-name">{test.name}</span>
          </div>
        ))}
        {currentIndex >= tests.length && (
          <div className="test-complete-message">
            All checks passed. Loading portfolio...
          </div>
        )}
      </div>
      {/* Optional Skip Button */}
      {/* <button onClick={onComplete} className="skip-button">Skip</button> */}
    </div>
  );
}

export default TestRunnerSimulation;
