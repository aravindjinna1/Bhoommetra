// StatsSection.jsx

import React from "react";

const stats = [
  {
    value: "10,000+",
    label: "Farmers Onboarded",
    icon: "👨‍🌾",
  },
  {
    value: "35%",
    label: "Yield Increase",
    icon: "📈",
  },
  {
    value: "25%",
    label: "Water Saved",
    icon: "💧",
  },
  {
    value: "180%",
    label: "ROI",
    icon: "⚡",
  },
];

function StatsSection() {
  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-2xl font-bold text-green-700">
                {item.value}
              </h3>
              <p className="text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Heading Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800">
            Comprehensive AgriTech Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Everything you need to modernize your farming operations and
            increase productivity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
