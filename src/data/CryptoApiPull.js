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

// Ensure proper registration of Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

function CryptoApiPull() {
  const [cryptoName, setCryptoName] = useState("");
  const [chartData7Days, setChartData7Days] = useState(null);
  const [chartData30Days, setChartData30Days] = useState(null);
  const [chartDataYTD, setChartDataYTD] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setCryptoName(e.target.value);
  };

  let lastRequestTime = 0;
  const RATE_LIMIT_INTERVAL = 60000 / 50; // CoinGecko allows up to 50 requests per minute

  const fetchCryptoData = async (days, setChartData) => {
    const now = Date.now();
    if (now - lastRequestTime < RATE_LIMIT_INTERVAL) {
        await new Promise(resolve => setTimeout(resolve, RATE_LIMIT_INTERVAL - (now - lastRequestTime)));
    }

    // Update lastRequestTime immediately to prevent overlapping requests
    lastRequestTime = Date.now();
    setError(null); // Clear any previous error state

    try {
        const formattedCryptoName = cryptoName.trim().toLowerCase(); // Ensure proper formatting
        const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${formattedCryptoName}/market_chart`,
            {
                params: {
                    vs_currency: "usd",
                    days,
                },
            }
        );

        const prices = response.data.prices;
        const labels = prices.map((price) => new Date(price[0]).toLocaleDateString());
        const data = prices.map((price) => price[1]);

        setChartData({
            labels,
            datasets: [
                {
                    label: `${cryptoName} Price (Last ${days} Days)`,
                    data,
                    borderColor: "rgba(75,192,192,1)",
                    backgroundColor: "rgba(75,192,192,0.2)",
                },
            ],
        });
    } catch (err) {
        if (err.response && err.response.status === 429) {
            setError("Too many requests. Please try again later.");
        } else {
            setError("Failed to fetch data. Please check the cryptocurrency name.");
        }
    }
  };

  const fetchAllData = () => {
    if (!cryptoName.trim()) {
      setError("Please enter a cryptocurrency name.");
      return;
    }
    fetchCryptoData(7, setChartData7Days);
    fetchCryptoData(30, setChartData30Days);
    fetchCryptoData(365, setChartDataYTD);
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
        />
        <button onClick={fetchAllData}>Pull Crypto Data</button>
      </div>
      {error && (
        <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>{error}</p>
      )}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        {chartData7Days && (
          <div style={{ width: "100%", maxWidth: "500px" }}>
            <h3>Last 7 Days</h3>
            <Line data={chartData7Days} />
          </div>
        )}
        {chartData30Days && (
          <div style={{ width: "100%", maxWidth: "500px" }}>
            <h3>Last 30 Days</h3>
            <Line data={chartData30Days} />
          </div>
        )}
        {chartDataYTD && (
          <div style={{ width: "100%", maxWidth: "500px" }}>
            <h3>Year to Date</h3>
            <Line data={chartDataYTD} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CryptoApiPull;