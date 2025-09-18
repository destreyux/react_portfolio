// Import project images/gifs
import project1Gif from "../assets/projects/project1.gif";
import project2Img from "../assets/projects/project2.png"; // Example static image
import project3Gif from "../assets/projects/project3.gif";
import project4Gif from "../assets/projects/project4.gif";
import project5Gif from "../assets/projects/project5.gif"; // Example static image
import project6Gif from "../assets/projects/project6.gif";
import project7Gif from "../assets/projects/project7.gif"; 
import project8Img from "../assets/projects/project8.png"; 
import project9Img from "../assets/projects/project9.png"; 



export const projects = [
  {
    title: "AI Review Automation",
    description:
      "Creates a json of the data found on the review page, uses AI api to create the review which is saved into json, inputs the review and submits it. This is available through Jenkins so that I have all my projects in one place.",
    imageUrl: project1Gif, // Use the imported variable
    liveUrl: null,
    repoUrl: null,
    tags: [
      "Python",
      "Gemini AI",
      "Selenium",
      "json",
      "Jenkins",
      "API",
      "requests",
    ], // Optional tags
  },
  {
    title: "Upcoming Stock Splits Discord Bot",
    description:
      "Pulls upcoming stock split data through webscraping only gathering today's date and newer stock splits, uses an AI API to search if the upcoming stock split will round up or provide cash-in-lieu, sent to a discord webhook where a discord bot will notify the discord channel. Runs every hour on the hour on Jenkins.",
    imageUrl: project2Img,
    liveUrl: null, // Can be null if no live demo
    repoUrl: "https://github.com/destreyux/Stock_Split_Discord_Bot",
    tags: [
      "Python",
      "Selenium",
      "Pandas",
      "Gemini AI",
      "API",
      "Jenkins",
      "json",
      "requests",
    ],
  },
  {
    title: "TestComplete Automation Regression Testing [Enterprise]",
    description:
      "Uses Data-Driven framework, collects the data and generates random data through scripts, all the data is input into the web application, quotes are validated against data within a range. Runs around five thousand test cases in an hour to an hour and a half.",
    imageUrl: project3Gif,
    liveUrl: null,
    repoUrl: null,
    tags: [
      "JavaScript",
      "TestComplete",
      "Jira",
      "Zephyr Squad",
      "Azure DevOps",
    ],
  },
  {
        title: "E2E Insurance Quoting Automation Framework [Enterprise]",
    description:
      "Automates the end-to-end user journey for a multi-product insurance quoting application. This data-driven framework uses Playwright with a scalable Page Object Model to validate the entire business flow, from applicant entry to final premium calculation. The suite runs in a consistent Docker environment, is triggered automatically by Jenkins for CI/CD, and integrates with Jira to create bug tickets from failed pipeline runs, providing rapid and actionable feedback to developers.",
    imageUrl: project7Gif,
    liveUrl: null,
    repoUrl: null,
    tags: [
      "Typescript",
      "Playwright",
      "POM",
      "Docker",
      "Jenkins",
      "Jira",
      "Azure DevOps",
      "Git",
    ],
  },
  {
    title: "Agent OnBoarding Automation [Enterprise]",
    description: "Automates the onboarding process for newly contracted agent. This program works with OnBase workflows as well as the EXL LifePro System. The program is ran through an Azure Agent on a set schedule to grab documents containing agent onboarding information and then inputting the data into EXL LifePro System to automatically create the agent removing the entire duty for the department. Ensuring accuracy, high agent ratings, and allowing agents to start selling faster.",
    imageUrl: project4Gif, // Replace with actual path
    liveUrl: null,
    repoUrl: null,
    tags: ["C#", 
      "dotnet", 
      "UI Automation",
      "Azure DevOps",
      "Azure Agent",
      "Azure Pipelines",
      "EXL LifePro System",
      "OnBase",],
  },
  {
    title: "File Logging and Webhooks [Enterprise]",
    description: "Makes an observer in shared networks where files are being processed and will notify the QA department if a file incurs and error or fails during processing by sending a webhook message to Teams with the location of the failing/erroring file and what the file is used for.",
    imageUrl: project5Gif, // Replace with actual path
    liveUrl: null,
    repoUrl: null,
    tags: ["Python", 
      "Webhooks",
      "Automation",
      "Git",
    ]
  },
  {
    title: "Minecraft Webhosting [Small Business Project]",
    description: "This project is a web application, server setup, and security configuration that enables users to purchase server space on a Dell R630 (home-based hosted) and host Java Minecraft servers. Users will have control over their server's .jar files for plugins and coding, with payment processing handled via Quickbooks. User tiers, determined by payment, will grant access to small or mid-sized servers, and the application will include server on/off functionality. I will also have the gemma ai run as an MCP to be able to grab plugins on one of the repositories and easily install it for users.",
    imageUrl: project6Gif,
    liveUrl: null,
    repoUrl: null,
    tags: ["JavaScript", "Python", "Database", "Hardware", "Cisco Switch", "Cloudflare", "Docker", "Jenkins", "PostgreSQL", "Gemma", "MCP", "Quickbooks", "AI", "Git",]
  },
  {
    title: "Custom Wedding Website with Interactive Guest Features",
    description: "I engineered a bespoke website to serve as a central hub for wedding guests, handling everything from logistics to shared memories. The platform features a secure RSVP system powered by an SQLite database to validate guest entries and manage the attendee list. To keep everyone informed, I integrated an automated email notification system for any updates to the event schedule. A key feature is the live, collaborative media gallery which, using the Google Drive API, allows guests to upload their own photos and videos directly to the site. The entire application is self-hosted on a custom-built home server running on a Cisco server with an Ubuntu OS, virtualized using Proxmox for efficient resource management.",
    imageUrl: project8Img,
    liveUrl: null,
    repoUrl: null,
    tags: [
      "Full-Stack",
      "Web Development",
      "Self-Hosted",
      "Proxmox",
      "Unbuntu",
      "Docker",
      "SysAdmin",
      "Cisco",
      "Docker",
      "HTML",
      "CSS",
      "SQLite",
      "Google Drive API",
      "Python",
      "Json",
      "Git"
    ]
  },
  {
    title: "GuestCam: Disposable Wedding Camera App [In Progress]",
    description: "This mobile app acts as a digital disposable camera for wedding guests, creating a private and seamless way to collect memories. Building upon my wedding website's backend, the app authenticates guests against the existing SQLite database using just their names. Once logged in, guests can capture photos and videos with a simple, Snapchat-like interface. All captured media is automatically uploaded in the background to a designated Google Drive folder via the API, ensuring every moment is saved centrally without using the guests' personal phone storage.",
    imageUrl: project9Img,
    liveUrl: null,
    repoUrl: null,
    tags: [
      "Mobile App",
      "SQLite",
      "Google Drive API",
      "Authentication",
      "Camera",
      "Video",
      "Event Photography",
      "UI/UX",
      "Git"
    ]
  }
  // Add more project objects here
];
