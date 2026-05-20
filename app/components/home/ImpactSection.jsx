"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
  const [impactAreas, setImpactAreas] = useState([]);

  useEffect(() => {
    setImpactAreas([
      {
        icon: "◔",
        title: "Traffic & Mobility Intelligence",
        desc:
          "Real-time violation detection, flow analytics, and enforcement decision support.",
      },

      {
        icon: "⬒",
        title: "Public Safety Intelligence",
        desc:
          "Crowd behaviour analysis, early anomaly detection, and proactive intervention support.",
      },

      {
        icon: "⌘",
        title: "Smart City Operations",
        desc:
          "Integrated infrastructure awareness enabling responsive, adaptive urban governance.",
      },

      {
        icon: "▥",
        title: "Governance Analytics",
        desc:
          "Data-driven policy insights and performance tracking across government systems.",
      },
    ]);
  }, []);

  return (
    <section className="w-full bg-[#F8F2FC] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-15 lg:py-20">
      <div className="max-w-[1400px] mx-auto">

        <div className="text-center">

          <div className="flex items-center justify-center gap-2 mb-9">
            <div className="w-10 h-[2px] bg-[#A855F7]"></div>

            <p className="text-[#A855F7] uppercase tracking-[4px] text-sm font-semibold">
              Impact Areas
            </p>
          </div>

          <h2 className="text-[24px] leading-[40px] sm:text-4xl md:text-6xl lg:text-[50px] lg:leading-[72px] font-black text-black px-4">
            Where Intelligence Meets Governance
          </h2>

          <p className="text-gray-500 text-base sm:text-lg lg:text-xl leading-8 sm:leading-9 mt-6 max-w-[760px] mx-auto px-2">
            Enabling smarter decisions across the most critical domains
            of public administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">

          {impactAreas.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#7B2FF7] via-[#4B148A] to-[#240046] p-10 min-h-[260px] shadow-xl hover:scale-[1.02] transition duration-300"
            >

              <div className="absolute top-[-80px] left-[-80px] w-[220px] h-[220px] bg-[#B266FF]/30 blur-3xl rounded-full"></div>

              <div className="relative z-10 w-14 h-14 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-2xl">
                {item.icon}
              </div>

              <h3 className="relative z-10 text-white text-[24px] leading-[32px] sm:text-[28px] sm:leading-[38px] lg:text-[28px] lg:leading-[42px] font-bold mt-10 max-w-[420px]">
                {item.title}
              </h3>

              <p className="relative z-10 text-[#D8C8F2] text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 mt-6 max-w-[520px]">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
