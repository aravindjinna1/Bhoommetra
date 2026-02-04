import AuthInput from "../Components/AuthInput";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6fbf7]">
      <div className="w-full max-w-md bg-white border border-green-100 rounded-xl shadow-sm p-6">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-green-700">
            Bhoommithra
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Create your farmer account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <AuthInput
            label="Full name"
            placeholder="Enter your full name"
          />

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

          <AuthInput
            label="Confirm password"
            type="password"
            placeholder="••••••••"
          />

          <button
            type="submit"
            className="
              w-full bg-green-600 text-white
              py-2 rounded-lg font-medium
              hover:bg-green-700 transition
            "
          >
            Create account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?
          <span>
          <Link to="/Login" className="text-green-700 ml-1 cursor-pointer hover:underline">
            Sign in
          </Link>
          </span>
        </p>

      </div>
    </div>
  );
}
