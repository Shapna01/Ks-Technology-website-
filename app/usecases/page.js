"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHero from "../components/common/PageHero";


import {
  Clock3,
  Shield,
  Briefcase,
  BarChart3,
  MonitorSmartphone,
  CheckCircle2,
} from "lucide-react";

const useCases = [
  {
    icon: <Clock3 className="w-4 h-4" />,
    badge: "Traffic Intelligence",
    title: "Traffic Enforcement Intelligence System",
    challenge:
      "Manual violation detection causing delays, inconsistency, and high false-negative rates in traffic enforcement operations.",
    solution:
      "Automated analytics platform for seat belt, signal, and speed violation detection with real-time alerts delivered to enforcement teams.",
    outcome:
      "Improved compliance rates and enforcement efficiency across the city. Significant reduction in manual workload for traffic personnel.",
    tags: ["40% Efficiency Gain", "Real-time Alerts", "Tamil Nadu"],
  },
  {
    icon: <Shield className="w-4 h-4" />,
    badge: "Public Safety",
    title: "Urban Safety Monitoring & Behavioural Analytics",
    challenge:
      "Reactive law enforcement with limited ability to identify threats before they escalated into serious public safety incidents.",
    solution:
      "Behavioural analytics deployed across public spaces to detect abnormal crowd patterns and surface early threat indicators.",
    outcome:
      "Enabled early intervention and significantly reduced incident response time. Law enforcement teams moved from reactive to proactive operations.",
    tags: ["Proactive Response", "Reduced Response Time", "Multi-city"],
  },
  {
    icon: <Briefcase className="w-4 h-4" />,
    badge: "Smart City",
    title: "Smart City Command & Control Platform",
    challenge:
      "Siloed city data across departments with no unified operational visibility, resulting in slow and poorly informed governance decisions.",
    solution:
      "Centralised command platform integrating traffic, safety, utility, and administrative data streams into a unified dashboard.",
    outcome:
      "Unified situational awareness enabling faster, better-informed governance decisions and inter-departmental coordination.",
    tags: ["Unified Visibility", "240+ Streams", "8 Departments"],
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    badge: "Governance Analytics",
    title: "Governance Performance Analytics Dashboard",
    challenge:
      "Government leadership lacked data-driven visibility into performance metrics across public services and infrastructure programmes.",
    solution:
      "Analytics dashboard aggregating KPI data across city departments, delivering performance insights with trend analysis and alerts.",
    outcome:
      "Leadership teams able to monitor policy effectiveness in real time and redirect resources based on data-driven insights.",
    tags: ["Data-driven Policy", "Real-time KPIs", "Leadership Visibility"],
  },
  {
    icon: <MonitorSmartphone className="w-4 h-4" />,
    badge: "Defence",
    title: "Defence Simulation & VR Training Systems",
    challenge:
      "High-risk training environments with limited opportunity for realistic simulation without operational risk exposure.",
    solution:
      "VR/AR simulation platforms delivering realistic mission-critical training scenarios with performance analytics.",
    outcome:
      "Measurable improvements in operational readiness and training efficiency while significantly reducing risk exposure.",
    tags: ["VR/AR Systems", "Risk Reduction", "Defence Sector"],
  },
  {
    icon: <CheckCircle2 className="w-4 h-4" />,
    badge: "Smart Infrastructure",
    title: "IoT-based Utility & Infrastructure Monitoring",
    challenge:
      "Inefficient resource consumption and delayed fault detection across city utility infrastructure leading to service disruptions.",
    solution:
      "IoT sensor network with real-time monitoring and anomaly detection across utility grid, water, and energy systems.",
    outcome:
      "Optimised resource consumption and significantly reduced mean-time-to-detect for infrastructure faults.",
    tags: ["IoT Integration", "Resource Optimisation", "Fault Detection"],
  },
];

export default function Usecase() {
  return (
    <main className="w-full bg-white">
      <Navbar />
      <div >
      <PageHero
       badge="— REAL DEPLOYMENTS"
       title="Use Cases"
       description="Documented outcomes from our intelligence platform deployments across Indian government systems."
      />
      </div>
      <section
      className="w-full py-24"
      style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20"> 
            {useCases.map((item, index) => (
              <div
               key={index}
               className="bg-white overflow-hidden w-[600px] h-auto min-h-[400px] mx-auto"
               style={{
                 border: "1px solid #E8DDF4",
                 borderRadius: "24px",
                 padding: "0px",
                 maxWidth: "1000px",
                 minHeight: "auto",
                 margin: "0 auto",
                }}
              >
          <div
            className="flex items-center justify-between px-5"
            style={{
              background:
                "linear-gradient(90deg, #4B0F8A 0%, #6E19D8 100%)",
              height: "82px",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.12)",
                color: "#FFFFFF",
              }}
            >
              {item.icon}
            </div>

            <div
              style={{
                padding: "6px 12px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.12)",
                color: "#FFFFFF",
                fontSize: "10px",
                fontWeight: 500,
              }}
            >
              {item.badge}
            </div>
          </div>

          <div className="p-6">
            <h3
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                fontWeight: 700,
                color: "#111111",
                marginBottom: "18px",
              }}
            >
              {item.title}
            </h3>

            <div style={{ marginBottom: "16px" }}>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#B14DFF",
                  marginBottom: "6px",
                }}
              >
                Challenge
              </p>

              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#757575",
                }}
              >
                {item.challenge}
              </p>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#B14DFF",
                  marginBottom: "6px",
                }}
              >
                Solution
              </p>

              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#757575",
                }}
              >
                {item.solution}
              </p>
            </div>

            <div style={{ marginBottom: "18px" }}>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#B14DFF",
                  marginBottom: "6px",
                }}
              >
                Outcome
              </p>

              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#757575",
                }}
              >
                {item.outcome}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <div
                  key={i}
                  style={{
                    padding: "5px 10px",
                    borderRadius: "999px",
                    background: "#F3E8FF",
                    color: "#B14DFF",
                    fontSize: "10px",
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="w-full bg-gradient-to-br from-[#2D0B59] via-[#4C1D95] to-[#6D28D9] py-16 lg:py-28 overflow-hidden relative">

  <div className="absolute w-[500px] h-[500px] bg-[#A855F7]/20 blur-[120px] rounded-full top-[-120px] left-1/2 -translate-x-1/2"></div>

  <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">

    <h2 className="text-3xl sm:text-3xl lg:text-5xl font-black text-white leading-tight">
    Have a governance challenge
    <br />
    we should solve?      
    </h2>

    <p className="text-[#D8B4FE] text-xl leading-9 mt-8 max-w-3xl mx-auto">
      Tell us about your infrastructure and objectives. We'll show you how
      intelligence can transform it.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-14">

      <button className="border border-[#C084FC] text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition backdrop-blur-md">
        view Our Platforms
      </button>

      <button className="bg-[#C084FC] hover:bg-[#A855F7] transition text-white px-10 py-4 rounded-full font-semibold shadow-[0_0_40px_rgba(168,85,247,0.5)]">
        Talk to Us
      </button>
    </div>
  </div>
</section>


<Footer />
    </main>
  );
}