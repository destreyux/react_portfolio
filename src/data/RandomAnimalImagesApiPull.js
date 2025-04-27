import React, { useState } from "react";
import axios from "axios";

function RandomAnimalImages() {
  const [catImage, setCatImage] = useState(null);
  const [dogImage, setDogImage] = useState(null);
  const [error, setError] = useState(null);

  const fetchCatImage = async () => {
    try {
      setError(null);
      const response = await axios.get("https://api.thecatapi.com/v1/images/search");
      setCatImage(response.data[0].url);
    } catch (err) {
      setError("Failed to fetch cat image.");
    }
  };

  const fetchDogImage = async () => {
    try {
      setError(null);
      const response = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(response.data.message);
    } catch (err) {
      setError("Failed to fetch dog image.");
    }
  };

  return (
    <div className="api-containers-wrapper">
      <h1>Random Animal Images</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <div className="api-container">
          <h3>Random Cat</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button onClick={fetchCatImage}>Get Random Cat</button>
            {catImage && (
              <img
                src={catImage}
                alt="Random Cat"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            )}
          </div>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </div>
        <div className="api-container">
          <h3>Random Dog</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button onClick={fetchDogImage}>Get Random Dog</button>
            {dogImage && (
              <img
                src={dogImage}
                alt="Random Dog"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            )}
          </div>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default RandomAnimalImages;
