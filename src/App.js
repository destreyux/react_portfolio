import React from "react";

// Import Components
import BackgroundAnimation from "./components/BackgroundAnimation"; // The moving logos background
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

// Import Assets
import myLogo from "./assets/my-logo.png";

import "./App.css"; // Main app styles

function App() {
  return (
    <div className="App">
      {/* Background animation rendered first, stays behind everything */}
      <BackgroundAnimation />

      {/* Header with your logo */}
      <Header logoSrc={myLogo} />

      {/* Main content area */}
      {/* This wrapper helps manage padding and ensures content is above background */}
      <main className="main-content">
        <Hero />
        <Projects />
        <Education />
        <Certifications />
        <Skills />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}

export default App;
