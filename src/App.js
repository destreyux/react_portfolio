// src/App.js
import React, { useState } from "react"; // Import useState hook

// Import Components
import BackgroundAnimation from "./components/BackgroundAnimation";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import TestRunnerSimulation from "./components/TestRunnerSimulation"; // Import the simulation component

// Import Assets
import myLogo from "./assets/my-logo.png";

import "./App.css"; // Main app styles

function App() {
  const [appState, setAppState] = useState("simulating"); // Start in simulation mode

  const handleSimulationComplete = () => {
    console.log("Test simulation complete. Displaying main portfolio content.");
    setAppState("portfolio"); // Change state to show the portfolio
  };

  return (
    // Optionally apply dark mode class here if needed: className={`App ${theme === 'dark' ? 'dark-mode' : ''}`}
    <div className="App">
      {appState === "simulating" ? (
        <TestRunnerSimulation onComplete={handleSimulationComplete} />
      ) : (
        <>
          {" "}
          <BackgroundAnimation />
          {/* Header */}
          <Header logoSrc={myLogo} />
          <main className="main-content">
            <Hero />
            <Projects />
            <Education />
            <Certifications />
            <Skills />
            <Feedback />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
