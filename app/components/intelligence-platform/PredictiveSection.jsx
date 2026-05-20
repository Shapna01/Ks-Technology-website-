"use client";

import { useEffect, useState } from "react";

export default function PredictiveSection() {
const [stats, setStats] = useState([]);
const [features, setFeatures] = useState([]);

  useEffect(() => {
    setStats([
      {
        value: "94%",
        label: "Forecast Accuracy",
      },
      {
        value: "72hr",
        label: "Prediction Window",
      },
      {
        value: "Beta",
        label: "Current Phase",
      },
      {
        value: "2025",
        label: "Launch Target",
      },
    ]);

    setFeatures([
      {
        icon: "📊",
        title: "Risk Modelling",
        desc: "Statistical and ML models that score risk probability across urban environments.",
      },
      {
        icon: "◎",
        title: "Pattern Analysis",
        desc: "Deep pattern mining across historical and real-time data streams.",
      },
      {
        icon: "♫",
        title: "Preventive Insights",
        desc: "Actionable forecasts delivered to enforcement and governance teams.",
      },
    ]);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center pt-16 lg:pt-24">

      <div>
        <div className="bg-gradient-to-br from-[#2D0B59] to-[#5B21B6] rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 lg:p-10 text-white shadow-2xl relative overflow-hidden">

          <div className="mb-7 sm:mb-8">
            <p className="text-[#DCC7FF] text-[10px] sm:text-[11px] tracking-[3px] uppercase font-semibold">
              Predictive Intelligence — Preview
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white/8 border border-white/10 rounded-[18px] p-4 sm:p-5 backdrop-blur-md"
              >
                <h3 className="text-white text-2xl sm:text-[40px] font-black leading-none">
                  {item.value}
                </h3>

                <p className="text-[#CBB5F8] text-xs sm:text-sm mt-3 leading-5">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div>
        <div className="inline-flex items-center px-4 sm:px-5 py-2 rounded-full bg-[#F3E8FF] text-[#A855F7] text-[10px] sm:text-xs tracking-[2px] font-bold uppercase">
          Platform 04 — Emerging
        </div>

        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-black mt-6 lg:mt-8 leading-tight">
          Predictive Intelligence
        </h2>

        <p className="text-gray-500 text-[15px] sm:text-lg lg:text-xl leading-7 sm:leading-9 lg:leading-10 mt-5 sm:mt-6 max-w-[650px]">
          Our emerging capabilities focused on risk modelling,
          pattern analysis, and proactive governance.
        </p>

        <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 sm:gap-5 bg-[#FAF7FD] border border-[#F1E7FA] rounded-[22px] sm:rounded-[24px] p-4 sm:p-6 hover:shadow-md transition duration-300"
            >
              <div className="min-w-[46px] w-[46px] h-[46px] sm:min-w-[50px] sm:w-[50px] sm:h-[50px] rounded-2xl bg-[#A855F7] flex items-center justify-center text-white text-lg shadow-md">
                {item.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-lg sm:text-2xl font-bold text-black leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-gray-500 leading-6 sm:leading-8 mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-8 sm:mt-10 w-full sm:w-auto border border-[#C084FC] text-[#A855F7] px-8 py-4 rounded-full font-semibold hover:bg-[#F8F3FF] transition duration-300">
          Join Early Access
        </button>
      </div>

    </div>
  );
}