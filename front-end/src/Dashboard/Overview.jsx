
import React from "react";


export default function Overview() {
  return (
    <section className="">
      <h3 className="font-semibold mb-3">Your Farm Overview</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-green-100 rounded-xl p-4">
          Sensor Readings
        </div>

        <div className="bg-white border border-green-100 rounded-xl p-4">
          Crop
        </div>

        <div className="bg-white border border-green-100 rounded-xl p-4">
          Consultations
        </div>
      </div>
    </section>
  );
}
