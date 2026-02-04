import React from "react";


import { Users, TrendingUp, Droplet, Zap } from "lucide-react";

const stats = [
  {
    title: "Total Farmers",
    value: "10,000+",
    subtitle: "Active users on platform",
    icon: Users
  },
  {
    title: "Yield Increase",
    value: "35%",
    subtitle: "Average improvement",
    icon: TrendingUp
  },
  {
    title: "Water Saved",
    value: "25%",
    subtitle: "Resource optimization",
    icon: Droplet
  },
  {
    title: "ROI",
    value: "180%",
    subtitle: "Return on investment",
    icon: Zap
  }
];

export default function StatsCards() {
  return (
    <section>
      <h3 className="font-semibold mb-3">Platform Impact</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map(({ title, value, subtitle, icon: Icon }) => (
          <div
            key={title}
            className="bg-white border border-green-100 rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-500">{title}</p>
              <Icon size={18} className="text-green-600" />
            </div>

            <p className="text-2xl font-semibold">{value}</p>
            <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
