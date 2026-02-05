import React, { useState } from "react";
import { Droplets, Thermometer, Leaf, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const soilHistory = [
  { time: "Day 1", moisture: 40, ph: 6.4, temp: 27 },
  { time: "Day 2", moisture: 42, ph: 6.5, temp: 28 },
  { time: "Day 3", moisture: 38, ph: 6.3, temp: 29 },
  { time: "Day 4", moisture: 45, ph: 6.6, temp: 30 }
];

export default function SoilMonitoring() {

    
  const [moisture, setMoisture] = useState(45);
  const [ph, setPh] = useState(6.5);
  const [temperature, setTemperature] = useState(28);

  const lastUpdated = new Date().toLocaleString();

  const alerts = [];
  if (moisture < 30) alerts.push("Soil moisture is too low");
  if (ph < 5.5 || ph > 7.5) alerts.push("Soil pH is not suitable for crops");
  if (temperature > 35) alerts.push("Soil temperature is too high");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-white p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-2">Soil Monitoring</h1>
      <p className="text-gray-600 mb-8">Track real-time soil health and history</p>

      {/* Alert Popup */}
      {alerts.length > 0 && (
        <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-xl flex gap-3">
          <AlertTriangle className="text-red-600" />
          <ul className="text-red-700 text-sm list-disc pl-4">
            {alerts.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard
          title="Moisture"
          value={`${moisture}%`}
          icon={<Droplets className="text-blue-600" />}
        />
        <StatCard
          title="Soil pH"
          value={ph}
          icon={<Leaf className="text-green-600" />}
        />
        <StatCard
          title="Temperature"
          value={`${temperature}°C`}
          icon={<Thermometer className="text-orange-600" />}
        />
        <StatCard title="Last Update" value={lastUpdated} />
      </div>

      {/* User Input */}
      <div className="bg-white rounded-2xl shadow p-6 mb-10 max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Update Soil Readings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="Moisture (%)" value={moisture} setValue={setMoisture} />
          <Input label="Soil pH" value={ph} setValue={setPh} />
          <Input label="Temperature (°C)" value={temperature} setValue={setTemperature} />
        </div>
      </div>

      {/* Soil History Chart Placeholder */}
      <div className="bg-white rounded-2xl shadow p-6 h-64">
  <h3 className="text-lg font-semibold text-gray-700 mb-4">
    Soil History
  </h3>

  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={soilHistory}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="moisture"
        stroke="#16a34a"
        strokeWidth={2}
      />
      <Line
        type="monotone"
        dataKey="ph"
        stroke="#2563eb"
        strokeWidth={2}
      />
      <Line
        type="monotone"
        dataKey="temp"
        stroke="#ea580c"
        strokeWidth={2}
      />
    </LineChart>
  </ResponsiveContainer>
</div>

    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        {icon && <div className="p-2 bg-gray-100 rounded-xl">{icon}</div>}
      </div>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

function Input({ label, value, setValue }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>
  );
}
