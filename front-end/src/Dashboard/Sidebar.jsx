import React from "react";
import { NavLink } from "react-router-dom";
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
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Soil Monitoring", icon: Sprout, path: "/soil-monitoring" },
  { label: "Weather", icon: CloudSun, path: "/weather" },
  { label: "Crop Recommendations", icon: Leaf, path: "/crops" },
  { label: "Market Prices", icon: LineChart, path: "/market" },
  { label: "Expert Consultation", icon: MessageSquare, path: "/expert" },
  { label: "AI Assistant", icon: Bot, path: "/ai" },
  { label: "Admin Panel", icon: Shield, path: "/admin" }
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-green-100 p-4 ">
      <div className="flex items-center gap-2 mb-10">
        <Leaf className="text-green-600" size={30} />
        <span className="text-2xl font-bold text-[#1a3a3a]">
          Bhoommetra
        </span>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition
               ${
                 isActive
                   ? "bg-green-50 text-green-700 font-medium"
                   : "text-slate-600 hover:bg-green-50"
               }`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
