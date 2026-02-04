import React from "react";


import { User } from "lucide-react";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-green-100">
      <div>
        <h2 className="text-lg font-semibold">Welcome back, Username!</h2>
        <p className="text-sm text-slate-500">
          Here’s an overview of your farm’s performance and activities
        </p>
      </div>

      <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
        <User size={18} className="text-green-700" />
      </div>
    </header>
  );
}
