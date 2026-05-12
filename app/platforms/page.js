"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHero from "../components/common/PageHero";

export default function IntelligencePlatformPage() {
  return (
    <main className="w-full bg-white overflow-x-hidden">
      <Navbar />
<div >
      <PageHero
  badge="OUR CAPABILITIES"
  title="Intelligence Platforms"
  description="Four integrated platforms that form the complete intelligence layer
            for government systems."
/></div>
      

      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center border-b border-[#ECE7F4] pb-16 md:pb-24">
            <div>
              <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#F3E8FF] text-[#A855F7] text-xs tracking-[2px] font-bold uppercase">
                Platform 01
              </div>

              <h2 className="text-3xl sm:text-3xl lg:text-6xl font-bold text-black mt-6 lg:mt-8 leading-tight">
                Urban Intelligence Platform
              </h2>

              <p className="text-gray-500 text-base sm:text-lg leading-7 sm:leading-9 mt-6 md:mt-8 max-w-[620px]">
                Enables real-time traffic analytics, violation detection, and
                mobility insights to improve urban flow and enforcement
                efficiency across city infrastructure.
              </p>

              <div className="space-y-5 mt-10 ">
                {[
                  {
                    icon: "◉",
                    title: "Traffic Flow Analytics",
                    desc: "Real-time monitoring and congestion pattern identification across arterial routes.",
                  },
                  {
                    icon: "△",
                    title: "Violation Detection",
                    desc: "Automated identification of signal, speed, and safety violations with evidence capture.",
                  },
                  {
                    icon: "⌁",
                    title: "Mobility Intelligence",
                    desc: "Origin-destination analysis and route optimisation insights for urban planners.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#FAFAFA] border border-[#EFEAF6] rounded-[24px] md:rounded-[28px] p-5 sm:p-6 md:p-7 flex gap-4 sm:gap-5"
                  >
                    <div className="min-w-[44px] sm:min-w-[52px] h-[44px] sm:h-[52px] rounded-2xl bg-[#A855F7] flex items-center justify-center text-white text-lg sm:text-xl shadow-md">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-black">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base lg:text-lg text-gray-500 leading-6 sm:leading-8 mt-2 sm:mt-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-10 w-full sm:w-auto bg-[#A855F7] hover:bg-[#9333EA] transition text-white px-8 py-4 rounded-full font-semibold shadow-lg">
                Request a Demo
              </button>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#2D0B59] to-[#5B21B6] rounded-[28px] md:rounded-3xl p-5 sm:p-8 lg:p-12 text-white shadow-2xl relative min-h-[320px] flex flex-col justify-center">
                <div className="flex items-center justify-between mb-8">
                  <p className="text-[#D9C8F3] text-[10px] sm:text-xs tracking-[3px] uppercase font-semibold">
                    Urban Intelligence — Live Dashboard
                  </p>

                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {[
                    {
                      value: "1,240",
                      label: "Violations Detected Today",
                    },
                    {
                      value: "98.2%",
                      label: "Detection Accuracy",
                    },
                    {
                      value: "32",
                      label: "Active Zones",
                    },
                    {
                      value: "Live",
                      label: "System Status",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 border border-white/10 backdrop-blur-md rounded-[24px] p-5 sm:p-6"
                    >
                      <h2 className="text-3xl sm:text-4xl font-black">
                        {item.value}
                      </h2>

                      <p className="text-[#D8C8F2] text-sm mt-3">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 space-y-6">
                  {[
                    {
                      label: "Signal Violations",
                      value: "78%",
                      width: "78%",
                    },
                    {
                      label: "Speed Violations",
                      value: "54%",
                      width: "54%",
                    },
                    {
                      label: "Safety Violations",
                      value: "41%",
                      width: "41%",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[#D8C8F2] text-sm">
                          {item.label}
                        </p>

                        <p className="text-[#D8C8F2] text-sm">
                          {item.value}
                        </p>
                      </div>

                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#C084FC] rounded-full"
                          style={{ width: item.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center py-16 lg:py-24 border-b border-[#ECE7F4]">
            <div>
              <div className="bg-gradient-to-br from-[#2D0B59] to-[#5B21B6] rounded-[28px] md:rounded-3xl p-5 sm:p-8 lg:p-12 text-white shadow-2xl relative min-h-[320px] flex flex-col justify-center">
                <p className="text-[#D9C8F3] text-[10px] sm:text-xs tracking-[3px] uppercase font-semibold mb-8">
                  Public Safety — Threat Monitor
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {[
                    {
                      value: "4",
                      label: "Active Alerts",
                    },
                    {
                      value: "2.1s",
                      label: "Alert Latency",
                    },
                    {
                      value: "128",
                      label: "Zones Covered",
                    },
                    {
                      value: "99.1%",
                      label: "Uptime",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-[22px] p-5 sm:p-6"
                    >
                      <h2 className="text-3xl sm:text-4xl font-black">
                        {item.value}
                      </h2>

                      <p className="text-[#D8C8F2] text-sm mt-3">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 space-y-6">
                  {[
                    {
                      label: "Crowd Density Index",
                      value: "62%",
                      width: "62%",
                    },
                    {
                      label: "Anomaly Confidence",
                      value: "87%",
                      width: "87%",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-[#D8C8F2] mb-3">
                        <p>{item.label}</p>
                        <p>{item.value}</p>
                      </div>

                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#C084FC] rounded-full"
                          style={{ width: item.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#F3E8FF] text-[#A855F7] text-xs tracking-[2px] font-bold uppercase">
                Platform 02
              </div>

              <h2 className="text-3xl sm:text-3xl lg:text-6xl font-bold text-black mt-6 lg:mt-8 leading-tight">
                Public Safety Intelligence
              </h2>

              <p className="text-gray-500 text-base sm:text-lg leading-7 sm:leading-9 mt-6 md:mt-8 max-w-[620px]">
                Delivers behavioural analytics and real-time alerts to support
                law enforcement and public safety systems.
              </p>

              <div className="space-y-5 mt-10">
                {[
                  {
                    icon: "◎",
                    title: "Crowd Behaviour Analysis",
                    desc: "Detection of abnormal crowd movement, density, and behavioural patterns in real time.",
                  },
                  {
                    icon: "⬡",
                    title: "Incident Detection",
                    desc: "Early identification of incidents and threat indicators before escalation occurs.",
                  },
                  {
                    icon: "⌂",
                    title: "Real-time Alerts",
                    desc: "Automated alerts with priority routing to enforcement teams and command centres.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#FAFAFA] border border-[#EFEAF6] rounded-[24px] md:rounded-[28px] p-5 sm:p-6 md:p-7 flex gap-4 sm:gap-5"
                  >
                    <div className="min-w-[44px] sm:min-w-[52px] h-[44px] sm:h-[52px] rounded-2xl bg-[#A855F7] flex items-center justify-center text-white text-lg sm:text-xl shadow-md">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-black">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base lg:text-lg text-gray-500 leading-6 sm:leading-8 mt-2 sm:mt-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-10 w-full sm:w-auto bg-[#A855F7] hover:bg-[#9333EA] transition text-white px-8 py-4 rounded-full font-semibold shadow-lg">
                Request a Demo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center border-b border-[#ECE7F4] py-16 md:py-24">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 sm:px-5 py-2 rounded-full bg-[#F3E8FF] text-[#A855F7] text-[10px] sm:text-xs tracking-[2px] font-bold uppercase">
                Platform 03
              </div>

              <h2 className="text-3xl sm:text-3xl lg:text-6xl font-bold text-black mt-6 lg:mt-8 leading-tight">
                Smart City Command Platform
              </h2>

              <p className="text-gray-500 text-[15px] sm:text-lg leading-7 sm:leading-9 mt-5 sm:mt-7 max-w-[620px]">
                Unified command systems integrating multiple city data streams
                into one operational intelligence layer.
              </p>

              <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-10">
                {[
                  {
                    icon: "▣",
                    title: "Unified Operations",
                    desc: "Centralised dashboards integrating transport, safety, and infrastructure systems.",
                  },
                  {
                    icon: "◈",
                    title: "Decision Intelligence",
                    desc: "AI-powered recommendations enabling faster governance decisions.",
                  },
                  {
                    icon: "⌘",
                    title: "Integrated Monitoring",
                    desc: "Cross-platform situational awareness with real-time alerts and reporting.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#FAFAFA] border border-[#EFEAF6] rounded-[22px] sm:rounded-[26px] p-4 sm:p-6 flex gap-4"
                  >
                    <div className="min-w-[46px] w-[46px] h-[46px] sm:min-w-[54px] sm:w-[54px] sm:h-[54px] rounded-2xl bg-[#A855F7] flex items-center justify-center text-white text-lg sm:text-xl shadow-md">
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

              <button className="mt-8 sm:mt-10 w-full sm:w-auto bg-[#A855F7] hover:bg-[#9333EA] transition text-white px-8 py-4 rounded-full font-semibold shadow-lg">
                Request a Demo
              </button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-[#2D0B59] to-[#5B21B6] rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 lg:p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-2 gap-4 sm:gap-5">
                  {[
                    {
                      value: "24",
                      label: "Integrated Systems",
                    },
                    {
                      value: "8+",
                      label: "Departments Connected",
                    },
                    {
                      value: "99%",
                      label: "Data Availability",
                    },
                    {
                      value: "Live",
                      label: "Operational Status",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-[20px] p-4 sm:p-6 backdrop-blur-sm"
                    >
                      <h2 className="text-2xl sm:text-4xl font-black leading-none">
                        {item.value}
                      </h2>

                      <p className="text-[#D8C8F2] text-xs sm:text-sm mt-3 leading-5">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
                  {[
                    {
                      label: "Infrastructure Monitoring",
                      value: "91%",
                      width: "91%",
                    },
                    {
                      label: "Decision Accuracy",
                      value: "84%",
                      width: "84%",
                    },
                    {
                      label: "Alert Efficiency",
                      value: "76%",
                      width: "76%",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-xs sm:text-sm text-[#D8C8F2] mb-2 sm:mb-3 gap-4">
                        <p>{item.label}</p>
                        <p>{item.value}</p>
                      </div>

                      <div className="w-full h-2.5 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#C084FC] rounded-full"
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center pt-16 lg:pt-24">
            <div>
              <div className="bg-gradient-to-br from-[#2D0B59] to-[#5B21B6] rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 lg:p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="mb-7 sm:mb-8">
                  <p className="text-[#DCC7FF] text-[10px] sm:text-[11px] tracking-[3px] uppercase font-semibold">
                    Predictive Intelligence — Preview
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
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
                  ].map((item, index) => (
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

                <div className="mt-8 space-y-5 sm:space-y-6">
                  {[
                    {
                      label: "Risk Score Confidence",
                      value: "94%",
                      width: "94%",
                    },
                    {
                      label: "Model Completeness",
                      value: "71%",
                      width: "71%",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <p className="text-[#D7C2FF] text-xs sm:text-sm">
                          {item.label}
                        </p>

                        <p className="text-[#D7C2FF] text-xs sm:text-sm">
                          {item.value}
                        </p>
                      </div>

                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#C084FC]"
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center px-4 sm:px-5 py-2 rounded-full bg-[#F3E8FF] text-[#A855F7] text-[10px] sm:text-xs tracking-[2px] font-bold uppercase">
                Platform 04 — Emerging
              </div>

              <h2 className="text-3xl sm:text-3xl lg:text-6xl font-bold text-black mt-6 lg:mt-8 leading-tight">
                Predictive Intelligence
              </h2>

              <p className="text-gray-500 text-[15px] sm:text-lg lg:text-xl leading-7 sm:leading-9 lg:leading-10 mt-5 sm:mt-6 max-w-[650px]">
                Our emerging capabilities focused on risk modelling, pattern
                analysis, and proactive governance — enabling governments to
                act before incidents occur.
              </p>

              <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-10">
                {[
                  {
                    icon: "📊",
                    title: "Risk Modelling",
                    desc: "Statistical and ML models that score risk probability across urban environments.",
                  },
                  {
                    icon: "◎",
                    title: "Pattern Analysis",
                    desc: "Deep pattern mining across historical and real-time data streams to surface hidden signals.",
                  },
                  {
                    icon: "♫",
                    title: "Preventive Insights",
                    desc: "Actionable forecasts delivered to enforcement and governance teams ahead of time.",
                  },
                ].map((item, index) => (
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

        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-[#2D0B59] via-[#4C1D95] to-[#6D28D9] py-16 md:py-24 lg:py-28 overflow-hidden relative">
        <div className="absolute w-[500px] h-[500px] bg-[#A855F7]/20 blur-[120px] rounded-full top-[-120px] left-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-3xl lg:text-5xl font-black text-white leading-tight">
            Intelligence for governance.
            <br />
            Built for India.
          </h2>

          <p className="text-[#D8B4FE] text-base sm:text-lg lg:text-xl leading-7 sm:leading-9 mt-6 sm:mt-8 max-w-3xl mx-auto">
            Ready to integrate these platforms into your government
            infrastructure? Talk to our team.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-6 mt-10 md:mt-14">
            <button className="w-full sm:w-auto border border-[#C084FC] text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition backdrop-blur-md">
              Explore Our Platforms
            </button>

            <button className="w-full sm:w-auto bg-[#C084FC] hover:bg-[#A855F7] transition text-white px-10 py-4 rounded-full font-semibold shadow-[0_0_40px_rgba(168,85,247,0.5)]">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
