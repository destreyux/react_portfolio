import React from "react";
import { render, screen } from "@testing-library/react";
import DataFetchingviaApi from "./DataFetchingviaApi";
import CryptoApiPull from "../data/CryptoApiPull";
import RandomAnimalImagesApiPull from "../data/RandomAnimalImagesApiPull";

// Mock the child components
jest.mock("../data/CryptoApiPull", () => () => <div data-testid="crypto-api-pull-mock"></div>);
jest.mock("../data/RandomAnimalImagesApiPull", () => () => <div data-testid="random-animal-images-api-pull-mock"></div>);

describe("DataFetchingviaApi Component", () => {
  test("renders correctly and includes child components", () => {
    render(<DataFetchingviaApi />);

    // Check if the main heading is rendered
    expect(screen.getByText("Data Fetching via API")).toBeInTheDocument();

    // Check if the mocked child components are rendered
    expect(screen.getByTestId("crypto-api-pull-mock")).toBeInTheDocument();
    expect(screen.getByTestId("random-animal-images-api-pull-mock")).toBeInTheDocument();
  });
});
