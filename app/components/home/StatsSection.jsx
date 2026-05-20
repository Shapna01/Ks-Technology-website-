"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    setStats([
      {
        number: "12+",
        label: "Government Deployments",
      },

      {
        number: "50+",
        label: "Active Installations",
      },

      {
        number: "98.4%",
        label: "System Uptime SLA",
      },

      {
        number: "8+",
        label: "States Covered",
      },
    ]);
  }, []);

  return (
    <section className="w-full bg-[#A63FD9] py-20 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center">

          {stats.map((item, index) => (
            <div
              key={index}
              className={`text-center py-4 ${
                index !== 3 ? "border-r border-white/10" : ""
              }`}
            >

              <h2 className="text-white text-[38px] sm:text-[48px] lg:text-[64px] leading-none font-black">
                {item.number}
              </h2>

              <p className="text-white/80 text-sm sm:text-base lg:text-lg mt-4">
                {item.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
