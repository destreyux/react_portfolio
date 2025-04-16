// src/data/educationData.js
import universityLogo1 from "../assets/education/elmhurst.jpg";
import universityLogo2 from "../assets/education/truman.jpg";
export const education = [
  {
    institution: "Elmhurst University",
    degree: "Bachelor of Science in Information Technology", // Or your specific degree
    dates: "August 2023 - December 2025", // Or your dates
    location: "Elmhurst, Illinois", // Optional
    description:
      "Learning IT Project Management, Automation Testing Frameworks, & Web and Mobile Application Development. On the Dean's List.",
    logoUrl: universityLogo1, // Optional details, courses, honors etc.
  },
  {
    institution: "Harry S. Truman College",
    degree: "Associate of Science, Computer Science",
    dates: "August 2022 - May 2023",
    location: "Chicago, Illinois", // Optional
    description:
      "Basic General Education and Python, C#, C++, HTML, CSS, & JavaScript. Graduated with High Honors and part of the Phi Theta Kappa Honor Society.", // Optional
    logoUrl: universityLogo2,
  },
  // Add more education entries if needed
];
