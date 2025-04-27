import ReactGA from "react-ga";

const trackingId = process.env.GOOGLE_ANALYTICS_API; // Use the environment variable

export const initializeAnalytics = () => {
  if (trackingId) {
    ReactGA.initialize(trackingId);
    console.log("Google Analytics initialized with ID:", trackingId);
  } else {
    console.warn("Google Analytics tracking ID is missing.");
  }
};
