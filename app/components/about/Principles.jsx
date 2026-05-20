"use client";

import { useEffect, useState } from "react";

export default function Principles() {

  const [principles, setPrinciples] = useState([]);

  useEffect(() => {
    setPrinciples([
      {
        number: "01",
        title: "Constantly Pushing Boundaries",
        desc: "We constantly push boundaries with AI, ML, and intelligent systems to deliver next-generation governance solutions that set new standards.",
      },
      {
        number: "02",
        title: "Solutions That Deliver",
        desc: "Every system we build is engineered to produce measurable outcomes — from cost savings to enhanced security and operational efficiency.",
      },
      {
        number: "03",
        title: "Long-term Thinking",
        desc: "Intelligent systems designed for long-term resilience — promoting efficient resource use and creating a foundation for sustainable governance.",
      },
      {
        number: "04",
        title: "Intelligence, Not Guesswork",
        desc: "Every insight we deliver is backed by rigorous analytics. Precision in data means precision in decisions — and that is what governments deserve.",
      },
      {
        number: "05",
        title: "Strategic, Not Transactional",
        desc: "We position ourselves as long-term strategic intelligence partners, not vendors.",
      },
      {
        number: "06",
        title: "Built on Transparency",
        desc: "We operate with complete transparency with our government partners.",
      },
    ]);
  }, []);

  return (
    <section className="w-full bg-[#FAFAFA] py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">
          <p className="text-[#A855F7] uppercase tracking-[4px] text-sm font-semibold mb-5">
            Our Principles
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-black mt-6 lg:mt-8 leading-tight">
            What Drives Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {principles.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition duration-300"
            >
              <p className="text-[#A855F7] text-sm font-bold tracking-[3px] uppercase mb-6">
                {item.number}
              </p>

              <h3 className="text-2xl font-bold text-black leading-tight mb-5">
                {item.title}
              </h3>

              <p className="text-gray-500 text-lg leading-8">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}