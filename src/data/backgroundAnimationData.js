// Import logos
import azureDevopsLogo from "../assets/logos/azuredevops-plain.svg";
import cLogo from "../assets/logos/c-original.svg";
import cssLogo from "../assets/logos/css3-original.svg";
import cypressioLogo from "../assets/logos/cypressio-original.svg";
import htmlLogo from "../assets/logos/html5-original.svg";
import jsLogo from "../assets/logos/javascript-original.svg";
import jenkinsLogo from "../assets/logos/jenkins-original.svg";
import jiraLogo from "../assets/logos/jira-original.svg";
import nodeLogo from "../assets/logos/nodejs-original.svg";
import playwrightLogo from "../assets/logos/playwright-original.svg";
import pythonLogo from "../assets/logos/python-original.svg";
import reactLogo from "../assets/logos/react-original.svg";
import seleniumLogo from "../assets/logos/selenium-original.svg";
import sqlDevLogo from "../assets/logos/sqldeveloper-original.svg";

// Skill data
export const skillsData = [
  { name: "Azure DevOps", logo: azureDevopsLogo },
  { name: "C", logo: cLogo },
  { name: "CSS3", logo: cssLogo },
  { name: "Cypress.io", logo: cypressioLogo },
  { name: "HTML5", logo: htmlLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Jenkins", logo: jenkinsLogo },
  { name: "Jira", logo: jiraLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "Playwright", logo: playwrightLogo },
  { name: "Python", logo: pythonLogo },
  { name: "React", logo: reactLogo },
  { name: "Selenium", logo: seleniumLogo },
  { name: "SQL Developer", logo: sqlDevLogo },
];

// Configuration constants
export const MAX_LOGOS_VISIBLE = 14;
export const MIN_ANIMATION_DURATION = 20; // Minimum seconds for a loop
export const MAX_ANIMATION_DURATION = 40; // Maximum seconds for a loop
export const INITIAL_DELAY_MAX = 1.0; // Max delay in seconds for initial fade-in