import React from 'react'

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import StatsCards from "./StatsCards";
import Overview from "./Overview";

const Dashboard = () => {
  return (
    <div className='bg-gradient-to-br from-green-200 via-white to-green-200 font-sans'>

      <div className="flex h-screen bg-[#f6fbf7] text-slate-800 ">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <TopBar />

        <div className="p-6 space-y-6">
          <StatsCards />
          <Overview />
        </div>
      </main>
    </div>

    </div>
  )
}

export default Dashboard
