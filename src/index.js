import React from "react";
import ReactDOM from "react-dom/client"; // Use ReactDOM from React 18
import App from "./App";
import "./index.css";

// Render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
