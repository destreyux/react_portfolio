// Import project images/gifs
import project1Gif from "../assets/projects/project1.gif";
import project2Img from "../assets/projects/project2.png"; // Example static image
import project3Gif from "../assets/projects/project3.gif";

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
  // Add more project objects here
];
