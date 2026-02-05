import React, { useEffect, useState } from "react";
import { CloudRain, Wind, Droplets, Thermometer } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const CITY = "Hyderabad";

export default function Weather() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  async function fetchWeather() {
    try {
      setError(null);

      // Current weather
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
      );
      const currentData = await currentRes.json();

      if (!currentRes.ok) {
        throw new Error(currentData.message || "Current weather failed");
      }

      // Forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=metric&appid=${API_KEY}`
      );
      const forecastData = await forecastRes.json();

      if (!forecastRes.ok || !Array.isArray(forecastData.list)) {
        throw new Error(forecastData.message || "Forecast failed");
      }

      setCurrent(currentData);

      const daily = forecastData.list
        .filter((_, index) => index % 8 === 0)
        .slice(0, 3)
        .map((item) => ({
          day: new Date(item.dt_txt).toLocaleDateString("en-US", {
            weekday: "short",
          }),
          temp: item.main.temp,
        }));

      setForecast(daily);
    } catch (err) {
      console.error("Weather API error:", err.message);
      setError(err.message);
      setCurrent(null);
      setForecast([]);
    }
  }

  if (error) {
    return (
      <div className="p-6 text-red-600 bg-red-50 rounded-xl">
        Weather Error: {error}
      </div>
    );
  }

  if (!current) {
    return <p className="p-6">Loading weather...</p>;
  }
// bg-gradient-to-br from-green-200 via-white to-green-200
  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-green-200 via-white to-green-200 font-sans">
      <h1 className="text-2xl font-semibold">Weather Overview</h1>

      {/* Flash Cards */}
      <div className="grid grid-cols-1 cursor-zoom-in hover:scal-0.15 sm:grid-cols-2  lg:grid-cols-4 gap-4">
        <Card
          icon={<Thermometer />}
          label="Temperature"
          value={`${current.main.temp}°C`}
        />
        <Card
          icon={<CloudRain />}
          label="Clouds"
          value={`${current.clouds.all}%`}
        />
        <Card
          icon={<Wind />}
          label="Wind"
          value={`${current.wind.speed} m/s`}
        />
        <Card
          icon={<Droplets />}
          label="Humidity"
          value={`${current.main.humidity}%`}
        />
      </div>

      {/* Forecast Chart dark:bg-zinc-900 */}
      <div className="bg-white  p-4 cursor-zoom-in rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.15)]">
        <h2 className="mb-4 font-medium">3-Day Forecast</h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={forecast}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="temp" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function Card({ icon, label, value }) {
  return (
    <div className="bg-white  rounded-xl p-4 shadow flex items-center gap-4">
      <div className="p-3 rounded-full bg-green-100 text-green-700">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}
