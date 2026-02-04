import React from "react";
export default function AuthInput({
  label,
  type = "text",
  placeholder
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-600">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          rounded-lg border border-green-200
          px-3 py-2 text-sm
          focus:outline-none
          focus:ring-2 focus:ring-green-300
          bg-white
        "
      />
    </div>
  );
}
