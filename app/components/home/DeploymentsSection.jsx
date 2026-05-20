"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {

  const [deployments, setDeployments] = useState([]);

  useEffect(() => {
    setDeployments([
      {
        tag: "TRAFFIC INTELLIGENCE",
        number: "01",
        title: "Traffic Enforcement Intelligence System",

        challenge:
          "Manual violation detection causing delays and inconsistency in enforcement.",

        solution:
          "Automated analytics for seat belt, signal, and speed violations with real-time alerts.",

        outcome:
          "Improved compliance rates and enforcement efficiency across the city.",
      },

      {
        tag: "PUBLIC SAFETY",
        number: "02",
        title: "Urban Safety Monitoring & Analytics",

        challenge:
          "Reactive law enforcement with limited capacity for early threat identification.",

        solution:
          "Behavioural analytics deployed across public spaces to detect abnormal patterns.",

        outcome:
          "Enabled early intervention and significantly reduced incident response time.",
      },

      {
        tag: "SMART CITY",
        number: "03",
        title: "Smart City Command & Control",

        challenge:
          "Siloed city data with no unified operational visibility for decision makers.",

        solution:
          "Centralised command platform integrating multiple city data streams.",

        outcome:
          "Unified situational awareness enabling faster, better-informed governance decisions.",
      },
    ]);
  }, []);

  return (
    <section className="w-full bg-[#F8F2FC] px-4 sm:px-6 md:px-10 lg:px-16 py-24">
      <div className="max-w-[1400px] mx-auto">

        <div className="text-center">

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-[#A855F7]"></div>

            <p className="text-[#A855F7] uppercase tracking-[4px] text-sm font-semibold">
              Deployments
            </p>
          </div>

          <h2 className="text-[28px] leading-[38px] sm:text-4xl md:text-5xl lg:text-[50px] lg:leading-[72px] font-black text-black px-2">
            Intelligence in Action
          </h2>

          <p className="text-gray-500 text-sm sm:text-base lg:text-xl leading-7 sm:leading-9 mt-6 max-w-[760px] mx-auto px-2">
            Real outcomes from real deployments — see how we've
            transformed public systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {deployments.map((item, index) => (
            <div
              key={index}
              className="rounded-[32px] overflow-hidden bg-white border border-[#EDE7F5] shadow-sm hover:shadow-xl transition duration-300"
            >

              <div className="relative h-[150px] sm:h-[170px] bg-gradient-to-br from-[#6F1DFF] via-[#4B148A] to-[#2B0057] p-5 sm:p-8 overflow-hidden">

                <h1 className="absolute right-4 sm:right-6 bottom-[-10px] sm:bottom-[-20px] text-[80px] sm:text-[120px] font-black text-white/10 leading-none">
                  {item.number}
                </h1>

                <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs tracking-[2px] font-semibold">
                  {item.tag}
                </div>
              </div>

              <div className="p-5 sm:p-6 lg:p-8">

                <h3 className="text-[24px] leading-[34px] sm:text-[28px] sm:leading-[38px] lg:text-[24px] lg:leading-[44px] font-bold text-black">
                  {item.title}
                </h3>

                <div className="space-y-6 mt-8">

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
                    <p className="text-[#A855F7] font-bold uppercase tracking-[2px] text-sm min-w-[110px]">
                      Challenge
                    </p>

                    <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8">
                      {item.challenge}
                    </p>
                  </div>

                  <div className="flex gap-5">
                    <p className="text-[#A855F7] font-bold uppercase tracking-[2px] text-sm min-w-[110px]">
                      Solution
                    </p>

                    <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8">
                      {item.solution}
                    </p>
                  </div>

                  <div className="flex gap-5">
                    <p className="text-[#A855F7] font-bold uppercase tracking-[2px] text-sm min-w-[110px]">
                      Outcome
                    </p>

                    <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8">
                      {item.outcome}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#EFE7F6] px-8 py-6">
                <button className="text-[#A855F7] font-semibold hover:translate-x-1 transition duration-300">
                  Read Full Case →
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
