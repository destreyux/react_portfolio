// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts", "**/?(*.)+(spec|test).ts"],
  testTimeout: 30000,
  collectCoverage: true,
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "clover", "json"], // Ensure 'lcov' is here

  // --- Add/Update this section ---
  collectCoverageFrom: [
    // Include all JS/JSX/TS/TSX files within the src directory
    "src/**/*.{js,jsx,ts,tsx}",

    // --- EXCLUDE Files ---
    // Exclude the main entry point file (index.js or index.tsx)
    "!src/index.{js,jsx,ts,tsx}",

    // Exclude test setup files if you have them
    "!src/setupTests.{js,ts}",

    // Exclude CRA's web vitals reporter if present
    "!src/reportWebVitals.{js,ts}",
  ],
  // --- End Coverage Configuration ---
};
