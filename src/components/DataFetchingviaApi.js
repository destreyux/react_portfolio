import React from "react";
import "./DataFetchingviaApi.css";
import CryptoApiPull from "../data/CryptoApiPull";
import RandomAnimalImagesApiPull from "../data/RandomAnimalImagesApiPull";

function DataFetchingviaApi() {
  return (
    <div id="data-fetching" className="container">
      <h1>Data Fetching via API</h1>
      <div className="api-containers-wrapper">
        <div className="api-container">
          <CryptoApiPull />
        </div>
        <div className="api-container">
          <RandomAnimalImagesApiPull />
        </div>
      </div>
    </div>
  );
}

export default DataFetchingviaApi;