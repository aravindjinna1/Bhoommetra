import React from "react";
import { Link } from "react-router-dom";
import AuthInput from "../Components/AuthInput";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6fbf7]">
      <div className="w-full max-w-md bg-white border border-green-100 rounded-xl shadow-sm p-6">
        
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-green-700">
            Bhoommithra
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Smart farming, powered by data
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <AuthInput
            label="Email address"
            type="email"
            placeholder="you@example.com"
          />

          <AuthInput
            label="Password"
            type="password"
            placeholder="••••••••"
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="accent-green-600" />
              Remember me
            </label>

            <span className="text-green-700 cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="
              w-full bg-green-600 text-white
              py-2 rounded-lg font-medium
              hover:bg-green-700 transition
            "
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Don’t have an account?
          <span>
          <Link to="/signup" className="text-green-700 ml-1 cursor-pointer hover:underline">
            Create one
          </Link>
          </span>

        </p>
      </div>
    </div>
  );
}
