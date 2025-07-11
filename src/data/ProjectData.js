// Import project images/gifs
import project1Gif from "../assets/projects/project1.gif";
import project2Img from "../assets/projects/project2.png"; // Example static image
import project3Gif from "../assets/projects/project3.gif";
import project4Gif from "../assets/projects/project4.gif";
import project5Gif from "../assets/projects/project5.gif"; // Example static image
import project6Gif from "../assets/projects/project6.gif";

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
    title: "Automation Regression Testing [Enterprise]",
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
      "Playwright", 
      "Webhooks",
      "Automation"
    ]
  },
  {
    title: "Minecraft Webhosting [Small Business Project]",
    description: "This project is a web application, server setup, and security configuration that enables users to purchase server space on a Dell R630 (home-based hosted) and host Java Minecraft servers. Users will have control over their server's .jar files for plugins and coding, with payment processing handled via Quickbooks. User tiers, determined by payment, will grant access to small or mid-sized servers, and the application will include server on/off functionality. I will also have the gemma ai run as an MCP to be able to grab plugins on one of the repositories and easily install it for users.",
    imageUrl: project6Gif,
    liveUrl: null,
    repoUrl: null,
    tags: ["JavaScript", "Python", "Database", "Hardware", "Cisco Switch", "Cloudflare", "Docker", "Jenkins", "PostgreSQL", "Gemma", "MCP", "Quickbooks", "AI"]
  }
  // Add more project objects here
];
