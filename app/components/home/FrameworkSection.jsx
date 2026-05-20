"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
  const [architectureData, setArchitectureData] = useState([]);

  useEffect(() => {
    const data = [
      {
        number: "01",
        title: "Sensing Layer",
        icon: "◉",
        desc:
          "Capturing inputs from urban systems and public infrastructure across multiple data streams.",
        points: [
          "Urban monitoring systems",
          "Traffic & mobility sensing",
          "Public safety infrastructure",
        ],
      },

      {
        number: "02",
        title: "Intelligence Layer",
        icon: "⌁",
        desc:
          "Generating real-time analytics and behavioural insights that expose the meaning behind raw data.",
        points: [
          "Real-time analytics",
          "Behaviour detection",
          "Event interpretation",
        ],
      },

      {
        number: "03",
        title: "Prediction Layer",
        icon: "▮▮",
        desc:
          "Identifying patterns and forecasting potential risks before they escalate into incidents.",
        points: [
          "Pattern modelling",
          "Risk forecasting",
          "Preventive governance",
        ],
      },

      {
        number: "04",
        title: "Decision Layer",
        icon: "▣",
        desc:
          "Delivering actionable insights through command centres, dashboards, and governance alerts.",
        points: [
          "Command centres",
          "Alerts & dashboards",
          "Policy insights",
        ],
      },
    ];

    setArchitectureData(data);
  }, []);

  return (
    <section className="w-full bg-[#F8F2FC] px-4 sm:px-6 md:px-10 lg:px-16 py-24">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="text-center">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-[#A855F7]"></div>

            <p className="text-[#A855F7] uppercase tracking-[4px] text-sm font-semibold">
              Our Framework
            </p>
          </div>

          <h2 className="text-[24px] leading-[40px] sm:text-4xl md:text-6xl lg:text-[50px] lg:leading-[72px] font-black text-black px-4">
            The Intelligence Architecture
          </h2>

          <p className="text-gray-500 text-xl leading-9 mt-6 max-w-[760px] mx-auto">
            Four interconnected layers that transform raw infrastructure
            data into actionable government intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 sm:mt-16 lg:mt-20 rounded-[32px] overflow-hidden border border-[#EFE7F6] bg-white shadow-sm">
          
          {architectureData.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#EFE7F6] last:border-r-0 hover:bg-[#FCFAFF] transition duration-300"
            >
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-[#E9E4EF] leading-none">
                {item.number}
              </h2>

              <div className="text-[#A855F7] text-4xl mt-6">
                {item.icon}
              </div>

              <h3 className="text-[22px] leading-[30px] sm:text-[28px] sm:leading-[38px] lg:text-[32px] lg:leading-[40px] font-bold text-black mt-6">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-7 sm:leading-9 mt-5">
                {item.desc}
              </p>

              <div className="space-y-1 mt-8">
                {item.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    
                    <div className="w-2 h-2 rounded-full bg-[#A855F7] mt-3"></div>

                    <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
