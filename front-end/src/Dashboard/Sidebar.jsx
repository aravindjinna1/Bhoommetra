import React from "react";

import {
  LayoutDashboard,
  Sprout,
  CloudSun,
  Leaf,
  LineChart,
  MessageSquare,
  Bot,
  Shield
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Soil Monitoring", icon: Sprout },
  { label: "Weather", icon: CloudSun },
  { label: "Crop Recommendations", icon: Leaf },
  { label: "Market Prices", icon: LineChart },
  { label: "Expert Consultation", icon: MessageSquare },
  { label: "AI Assistant", icon: Bot },
  { label: "Admin Panel", icon: Shield }
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-green-100 p-4  ">
       <div className="flex items-center gap-2 cursor-pointer mb-10">
                <Leaf className="text-green-600" size={30} />
                <span className="text-2xl font-bold tracking-tight text-[#1a3a3a]">Bhoommetra</span>
              </div>

      <nav className="space-y-2">
        {navItems.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
              ${
                active
                  ? "bg-green-50 text-green-700 font-medium"
                  : "text-slate-600 hover:bg-green-50"
              }`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
