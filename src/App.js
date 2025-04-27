// src/App.js
import React, { useState } from "react";

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
import TestRunnerSimulation from "./components/TestRunnerSimulation";
// Import Assets
import myLogo from "./assets/my-logo.png";

import "./App.css"; // Main app styles
import DataFetchingviaApi from "./components/DataFetchingviaApi";

function App() {
  const [appState, setAppState] = useState("simulating"); // Start in simulation mode

  const handleSimulationComplete = () => {
    console.log("Test simulation complete. Displaying main portfolio content.");
    setTimeout(() => setAppState("portfolio"), 500); // Automatically transition to portfolio after 3 seconds
  };

  return (
    <div className="App">
      {appState === "simulating" ? (
        <TestRunnerSimulation onComplete={handleSimulationComplete} />
      ) : (
        <>
          <BackgroundAnimation />
          <Header logoSrc={myLogo} />
          <main className="main-content">
            <Hero/>
            <Projects />
            <DataFetchingviaApi/>
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
