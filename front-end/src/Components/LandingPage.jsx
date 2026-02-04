import React from 'react';
import { Leaf, Droplets, Calendar, Bug, ArrowRight } from 'lucide-react';
import FarmImage from '../assets/FarmImage.png';
import StatsSection from './Stats'

import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-white to-green-200 font-sans text-slate-900 relative overflow-hidden">

      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 310c50 0 50-20 100-20s50 20 100 20 50-20 100-20 50 20 100 20M0 210c50 0 50-20 100-20s50 20 100 20 50-20 100-20 50 20 100 20M0 110c50 0 50-20 100-20s50 20 100 20 50-20 100-20 50 20 100 20' fill='none' stroke='%23166534' stroke-width='2'/%3E%3C/svg%3E")`
        }}
      />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <Leaf className="text-green-600" size={30} />
          <span className="text-2xl font-bold tracking-tight text-[#1a3a3a]">Bhoommetra</span>
        </div>
        <div className="flex gap-4">
          <Link to="/Login" className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-green-600 transition-colors cursor-pointer">
            Sign In
          </Link>
          <Link to="/Dashboard" className="px-6 py-2 bg-green-600 text-white rounded-full text-sm font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition-all cursor-pointer">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-16 pb-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-5xl xl:text-6xl font-extrabold leading-[1.1]">
            Transform Your Farm with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-500">
              Smart Agriculture
            </span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            Leverage IoT sensors, satellite imagery, and AI-driven insights to maximize yield while promoting sustainable farming practices.
          </p>
          <div className="flex gap-5 items-center">
            <button className="group flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-2xl font-semibold shadow-lg hover:bg-green-700 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
              Start Free Trial
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <Link to="/Dashboard"  className="px-8 py-4 bg-white border border-slate-200 rounded-2xl font-semibold text-slate-600 shadow-sm hover:bg-slate-50 hover:border-green-300 transition-all cursor-pointer">
              View Dashboard
            </Link>

          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">
          {/* Main Image */}
          <div className="relative rounded-[36px] overflow-hidden shadow-2xl max-w-[520px] w-full">
            <img
              src={FarmImage}
              alt="Smart Farming"
              className="w-full h-[340px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
          </div>

          {/* Floating Cards */}
          <div className="absolute -right-4 top-10 space-y-4">
            <DataCard icon={<Droplets className="text-blue-500" />} label="Soil Moisture" value="42%" />
            <DataCard icon={<Calendar className="text-green-600" />} label="Optimal Harvest" value="12 Days" />
            <DataCard icon={<Bug className="text-red-500" />} label="Pest Index" value="Low" />
          </div>
        </div>
      </main>

      <StatsSection />

    </div>
  );
};

const DataCard = ({ icon, label, value }) => (
  <div className="group bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/60 flex items-center gap-4 min-w-[210px] cursor-pointer transition-all hover:shadow-xl hover:-translate-x-2">
    <div className="p-3 bg-slate-50 rounded-xl group-hover:scale-105 transition-transform">
      {icon}
    </div>
    <div>
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</p>
      <p className="text-lg font-bold text-slate-800">{value}</p>
    </div>
  </div>
);

export default LandingPage;
