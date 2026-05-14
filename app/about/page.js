"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHero from "../components/common/PageHero";

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      <Navbar />
      <div >
      <PageHero
      badge="— Who We Are"
      title="About KS Smart"
      description="A strategic intelligence systems provider focused on enabling intelligence-led governance across India."
      />
      </div>

      <section className="w-full py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="bg-gradient-to-br from-[#2D0B59] to-[#5B21B6] rounded-3xl p-12 text-white shadow-2xl relative min-h-[320px] flex flex-col justify-center">
            
            <div className="text-7xl text-[#8B5CF6] leading-none mb-6">
              “
            </div>

            <h3 className="text-3xl font-bold leading-[1.5] max-w-lg ">
              We are not implementing infrastructure.
              <br />
              We are converting infrastructure into intelligence.
            </h3>

            <p className="mt-10 text-sm text-[#C4B5FD]">
              — Core Mission, KS Smart Technologies Ltd
            </p>
          </div>

          <div>
            <p className="text-[#A855F7] uppercase tracking-[4px] text-sm font-semibold mb-6">
              Our Story
            </p>

            <h2 className="text-3xl sm:text-3xl  font-bold text-black mt-6 lg:mt-8 leading-tight">
              Built for the Complexity of Governance
            </h2>
             <br />
            <div className="space-y-6 text-gray-500 text-lg leading-9">
              <p>
                KS Smart Technologies Ltd is a strategic techno solutions
                provider focused on enabling intelligence-led governance.
                Since 2016, the company has operated at the intersection of
                infrastructure, data, and analytics.
              </p>

              <p>
                We transform large-scale public systems into intelligent,
                responsive environments integrating multiple data inputs to
                deliver real-time situational awareness, behavioural insights,
                and decision support for government authorities.
              </p>

              <p>
                Our long-term focus is on building systems that move beyond
                automation toward adaptive and proactive governance.
              </p>
            </div>

            <button className="mt-4 bg-[#A855F7] hover:bg-[#9333EA] transition text-white px-8 py-4 rounded-full font-semibold shadow-lg">
              View Intelligence Platforms →
            </button>
          </div>
        </div>
      </section>
      
<section className="w-full bg-[#FAFAFA] py-24">
  <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">
      <p className="text-[#A855F7] uppercase tracking-[4px] text-sm font-semibold mb-5">
        Our Principles
      </p>

      <h2 className="text-3xl sm:text-4xl  font-bold text-black mt-6 lg:mt-8 leading-tight">
        What Drives Us
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">

      {[
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
          desc: "We position ourselves as long-term strategic intelligence partners, not vendors. Our growth is tied directly to the outcomes of those we serve.",
        },
        {
          number: "06",
          title: "Built on Transparency",
          desc: "We operate with complete transparency with our government partners — in technology, implementation, and the insights we deliver.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition duration-300"
        >
          <p className="text-[#A855F7] text-sm font-bold tracking-[3px] uppercase mb-6">
            {item.number} — {item.title.split(" ")[0]}
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


<section className="w-full py-16 sm:py-20 lg:py-28 bg-white">
  <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">

    <div className="text-center mb-14 sm:mb-20">
      <p className="text-[#A855F7] uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
        Our Journey
      </p>

      <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-black mt-6 lg:mt-8 leading-tight">
        Building Intelligence Since 2016
      </h2>
    </div>

    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-5 sm:left-4 top-0 w-[3px] h-full bg-[#A855F7] rounded-full"></div>
      <div className="space-y-12 sm:space-y-16">

        {[
          {
            year: "2016",
            tag: "Foundation",
            title: "KS Smart Technologies Founded",
            desc: "Established in Chennai with a vision to bring intelligence-led technology to Indian governance.",
            icon: "⚡",
          },
          {
            year: "2018",
            tag: "First Deployment",
            title: "First Government Intelligence System",
            desc: "Deployed first-of-its-kind traffic enforcement intelligence system for a major Tamil Nadu municipality.",
            icon: "🕒",
          },
          {
            year: "2020",
            tag: "Expansion",
            title: "Public Safety Intelligence Platform",
            desc: "Launched behavioural analytics and public safety intelligence capabilities across multiple cities.",
            icon: "🛡️",
          },
          {
            year: "2022",
            tag: "Command Systems",
            title: "Integrated Command & Control Platforms",
            desc: "Delivered centralised command dashboards integrating multi-source data streams for government decision support.",
            icon: "🖥️",
          },
          {
            year: "2024",
            tag: "Intelligence Evolution",
            title: "Predictive Intelligence Capabilities",
            desc: "Developing predictive modelling and risk forecasting systems — enabling proactive governance for the first time.",
            icon: "📈",
          },
            ].map((item, index) => (
          <div
            key={index}
            className="relative flex gap-4 sm:gap-8"
          >
            <div 
            className="relative z-2 flex items-center justify-center
            min-w-[40px] min-h-[40px]
            w-[40px] h-[40px]
            rounded-full bg-[#A855F7]
            text-white text-sm
            shadow-md border-2 border-white
            flex-shrink-0"
            >
                {item.icon}
            </div>

            <div className="pb-2 sm:pb-4">
              <p className="text-[#A855F7] uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-sm font-bold mb-2 sm:mb-3">
                {item.year} — {item.tag}
              </p>

              <h3 className="text-2xl sm:text-2xl  font-bold text-black mt-6 lg:mt-8 leading-tight">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm sm:text-lg leading-7 sm:leading-8 max-w-3xl">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
<section className="w-full bg-gradient-to-br from-[#2D0B59] via-[#4C1D95] to-[#6D28D9] py-16 sm:py-20 lg:py-28 overflow-hidden relative">

  <div className="absolute w-[500px] h-[500px] bg-[#A855F7]/20 blur-[120px] rounded-full top-[-120px] left-1/2 -translate-x-1/2"></div>

  <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 text-center">

    <h2 className="text-[30px] leading-[40px] sm:text-3xl md:text-5xl lg:text-5xl font-black text-white sm:leading-tight">
      Ready to build intelligence
      <br />
      into your systems?
    </h2>

    <p className="text-base sm:text-lg lg:text-xl leading-8 sm:leading-9 text-[#D8B4FE] mt-6 sm:mt-8 max-w-3xl mx-auto">
      Partner with KS Smart to transform your infrastructure into a
      strategic intelligence asset.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10 sm:mt-14">

      <button className="w-full sm:w-auto border border-[#C084FC] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition backdrop-blur-md">
        Explore Our Platforms
      </button>

      <button className="w-full sm:w-auto bg-[#C084FC] hover:bg-[#A855F7] transition text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold shadow-[0_0_40px_rgba(168,85,247,0.5)]">
        Contact Us
      </button>
    </div>
  </div>
</section>


<Footer />
    </main>
  );
}