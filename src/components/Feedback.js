// src/components/Feedback.js
import React from "react";
import "./Feedback.css";

function Feedback() {
  // --- PASTE THE 'src' URL FROM GOOGLE FORMS EMBED CODE HERE ---
  const googleFormEmbedUrl = "https://forms.gle/9gEtWNfXEZY6mK9G7";

  // Basic check if the URL was pasted
  if (googleFormEmbedUrl === "PASTE_YOUR_GOOGLE_FORM_EMBED_URL_HERE") {
    console.warn("Feedback component needs the Google Form embed URL!");
    // Optionally render nothing or a message if the URL isn't set
    // return null;
  }

  return (
    <section id="feedback" className="section feedback-section">
      <h2>Feedback</h2>
      <p>
        I appreciate you taking the time to view my portfolio! Please feel free
        to leave any feedback using the form below.
      </p>

      <div className="feedback-form-container">
        <iframe
          src={googleFormEmbedUrl}
          width="100%" // Container CSS will control actual width
          height="650" // Adjust default height as needed
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Portfolio Feedback Form" // For accessibility
          style={{ display: "block", border: "none" }} // Ensure block display and no iframe border
        >
          Loading Feedback Form…
        </iframe>
      </div>
    </section>
  );
}

export default Feedback;
