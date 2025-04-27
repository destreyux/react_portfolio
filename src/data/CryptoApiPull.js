import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

function CryptoApiPull() {
  const [cryptoName, setCryptoName] = useState("");
  const [chartData, setChartData] = useState(null); // Single state for all chart data
  const [marketCap, setMarketCap] = useState(null); // State for market cap
  const [volume, setVolume] = useState(null); // State for volume
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setCryptoName(e.target.value);
  };

  const fetchCryptoData = async () => {
    if (!cryptoName.trim()) {
      setError("Please enter a cryptocurrency name.");
      return;
    }

    if (loading) return; // Prevent multiple requests if already loading

    setLoading(true);
    setError(null);

    try {
      const formattedCryptoName = cryptoName.trim().toLowerCase();

      // Fetch all required data in a single API call
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${formattedCryptoName}/market_chart`,
        {
          params: {
            vs_currency: "usd",
            days: 7,
          },
        }
      );

      const { prices, market_caps, total_volumes } = response.data;

      // Prepare chart data
      const labels = prices.map((price) => new Date(price[0]).toLocaleDateString());
      const priceData = prices.map((price) => price[1]);
      const marketCapData = market_caps.map((cap) => cap[1]);
      const volumeData = total_volumes.map((vol) => vol[1]);

      setChartData({
        labels,
        datasets: [
          {
            label: `${cryptoName} Price (Last 7 Days)`,
            data: priceData,
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
          },
          {
            label: `${cryptoName} Market Cap (Last 7 Days)`,
            data: marketCapData,
            borderColor: "rgba(192,75,75,1)",
            backgroundColor: "rgba(192,75,75,0.2)",
          },
          {
            label: `${cryptoName} Volume (Last 7 Days)`,
            data: volumeData,
            borderColor: "rgba(75,75,192,1)",
            backgroundColor: "rgba(75,75,192,0.2)",
          },
        ],
      });

      // Set market cap and volume
      setMarketCap(market_caps[market_caps.length - 1][1]);
      setVolume(total_volumes[total_volumes.length - 1][1]);
    } catch (err) {
      if (err.response && err.response.status === 429) {
        setError("Too many requests. Please try again later.");
      } else {
        setError("Failed to fetch data. Please check the cryptocurrency name.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="crypto-api-pull">
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Crypto API Pull</h1>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
        <label
          htmlFor="crypto-input"
          style={{ marginRight: "10px", fontWeight: "bold", fontSize: "14px", display: "inline-block" }}
        >
          Cryptocurrency Name:
        </label>
        <input
          id="crypto-input"
          type="text"
          placeholder="e.g., Bitcoin"
          value={cryptoName}
          onChange={handleInputChange}
          style={{ marginRight: "10px" }}
          disabled={loading}
        />
        <button onClick={fetchCryptoData} disabled={loading} style={{ marginRight: "10px" }}>
          {loading ? "Loading..." : "Pull Crypto Data"}
        </button>
      </div>
      {error && (
        <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>{error}</p>
      )}
      {!loading && chartData && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <div style={{ width: "100%", maxWidth: "500px" }}>
            <h3>Price (Last 7 Days)</h3>
            <Line
              data={{
                labels: chartData.labels,
                datasets: [chartData.datasets[0]], // Price dataset
              }}
            />
          </div>
          <div style={{ width: "100%", maxWidth: "500px" }}>
            <h3>Market Cap (Last 7 Days)</h3>
            <Line
              data={{
                labels: chartData.labels,
                datasets: [chartData.datasets[1]], // Market cap dataset
              }}
            />
          <div>
            <p style={{ textAlign: "center" }}>
              <strong>Market Cap:</strong> ${marketCap?.toLocaleString()}
            </p>
          </div>
          </div>
          <div style={{ width: "100%", maxWidth: "500px" }}>
            <h3>Volume (Last 7 Days)</h3>
            <Line
              data={{
                labels: chartData.labels,
                datasets: [chartData.datasets[2]], // Volume dataset
              }}
            />
          </div>
          <p style={{ textAlign: "center" }}>
            <strong>Volume:</strong> ${volume?.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}

export default CryptoApiPull;