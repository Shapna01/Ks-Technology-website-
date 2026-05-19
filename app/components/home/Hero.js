import Footer from "../layout/Footer";

export default function Hero() {
  return (
    <>
      <section className="w-full bg-[#F8F2FC] px-4 sm:px-6 md:px-10 lg:px-16 py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 mt-12 lg:mt-0 ">
            <div className="inline-block bg-[#F1E4FA] text-[#A855F7] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              ✦ Strategic Intelligence Platform
            </div>

            <h1 className="text-[34px] leading-[50px] sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[82px] font-black text-black">
              Building
              <br />
              <span className="text-[#A855F7]">Intelligence</span>
              <br />
              for Governments
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-8 sm:leading-9 mt-8 max-w-[620px]">
              KS Smart Technologies enables governments to move
              from monitoring systems to intelligence-driven
              decision-making through integrated data and analytics
              platforms.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-10">
              <button className="border border-[#A855F7] text-[#A855F7] px-8 py-4 rounded-full font-semibold hover:bg-[#A855F7] hover:text-white transition duration-300">
                Explore Platforms →
              </button>

              <button className="border border-[#A855F7] text-[#A855F7] px-8 py-4 rounded-full font-semibold hover:bg-[#A855F7] hover:text-white transition duration-300">
                View Deployments
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 mt-14">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-black">12+</h3>

                <p className="text-gray-500 mt-2">
                  Government Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-black">50+</h3>

                <p className="text-gray-500 mt-2">
                  Active Deployments
                </p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-black">
                  Since 2016
                </h3>

                <p className="text-gray-500 mt-2">
                  Trusted Experience
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center relative px-3 sm:px-5 mt-12 ">
            <div className="absolute -top-10 right-3 sm:right-10 bg-white rounded-2xl px-4 sm:px-5 py-4 shadow-xl z-20 flex items-center gap-3 w-[85%] sm:w-auto max-w-[320px]">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>

              <div>
                <h4 className="text-black font-semibold text-sm">
                  Real-time Analytics
                </h4>

                <p className="text-gray-400 text-xs">
                  Active now
                </p>
              </div>
            </div>

            <div className="absolute -bottom-10 left-3 sm:left-0 bg-white rounded-2xl px-4 sm:px-5 py-4 shadow-xl z-20 flex items-center gap-3 w-[85%] sm:w-auto max-w-[320px]">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div>
                <h4 className="text-black font-semibold text-sm">
                  Threat Neutralised
                </h4>

                <p className="text-gray-400 text-xs">
                  Sector 4B
                </p>
              </div>
            </div>

            <div className="w-full max-w-[900px] bg-[#2D0A57] rounded-[30px] px-8 sm:px-25 lg:p-10 py-8 shadow-2xl relative">
              <div className="flex items-center gap-2 mb-6  ">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>

                <p className="text-gray-300 text-sm ml-3">
                  Intelligence Command View
                </p>
              </div>

             <div className="space-y-4 w-full sm:w-[400px]">
                {[
                  "Sensing Layer",
                  "Intelligence Layer",
                  "Prediction Layer",
                  "Decision Layer",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#44206D] rounded-2xl p-5 sm:p-6 flex items-center justify-between w-full"
                  >
                    <div>
                      <h3 className="text-white font-semibold text-base sm:text-lg">
                        {item}
                      </h3>

                      <p className="text-gray-400 text-sm mt-1">
                        Urban analytics running
                      </p>
                    </div>

                    <div className="w-3 h-3 bg-green-400 rounded-full shrink-0"></div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-5">
                {["98.4%", "1.2ms", "240+", "Live"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="bg-[#44206D] rounded-2xl p-5 sm:p-6"
                    >
                      <h2 className="text-white text-2xl sm:text-3xl font-bold">
                        {item}
                      </h2>

                      <p className="text-gray-400 text-sm mt-2">
                        System Analytics
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-[#A855F7] h-20 flex items-center overflow-hidden">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
          className="text-white font-medium text-sm tracking-[2px] flex items-center"
        >
          • URBAN INTELLIGENCE PLATFORM
          <span className="mx-16"></span>
          • PUBLIC SAFETY SYSTEMS
          <span className="mx-16"></span>
          • DATA GOVERNANCE
          <span className="mx-16"></span>
          • REAL-TIME ANALYTICS
          <span className="mx-16"></span>
          • SITUATIONAL AWARENESS
        </marquee>
      </div>
      <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-24">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
          
          <div className="flex-1 py-6 sm:py-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#A855F7]"></div>

              <p className="text-[#A855F7] uppercase tracking-[4px] text-sm font-semibold">
                Who We Are
              </p>
            </div>

            <h2 className="text-[34px] leading-[50px] sm:text-4xl md:text-6xl lg:text-[64px] lg:leading-[74px] font-black text-black max-w-[650px]">
              From Infrastructure
              <br />
              to Intelligence
            </h2>
            <br />
            <p className="text-gray-500 text-base sm:text-lg leading-8 sm:leading-9">
              KS Smart Technologies Ltd operates at the intersection of
              infrastructure, data, and analytics — transforming large-scale
              public systems into intelligent, responsive environments.
            </p>

            <p className="text-gray-500 text-lg leading-9 mt-6 max-w-[650px]">
              We don't just deploy systems. We convert infrastructure into
              intelligence.
            </p>

            <div className="space-y-5 mt-10">
              {[
                "Specialised in intelligence-led governance systems",
                "Integrated analytics for real-time situational awareness",
                "Decision support for government authorities",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  
                  <div className="w-8 h-8 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[#A855F7] text-sm">
                    ✓
                  </div>

                  <p className="text-gray-700 text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-[#A855F7] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
              Learn More About Us
            </button>
          </div>

          <div className="flex-1 flex justify-center relative">
            
            <div className="bg-[#3B0A73] rounded-[32px] p-10 w-full max-w-[560px] relative shadow-2xl">
              
              <h3 className="text-white text-[34px] font-bold leading-[44px] max-w-[420px]">
                Strategic Intelligence Partner
              </h3>

              <p className="text-[#D9C8F3] text-lg leading-8 mt-6 max-w-[450px]">
                Moving beyond implementation — building intelligence layers
                that enable prediction, prevention, and precision in governance.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                {[
                  "AI/ML Analytics",
                  "IoT Integration",
                  "VR/AR Systems",
                  "Smart City",
                  "Defence",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-[#6E42A5] text-[#E9DDFB] px-5 py-3 rounded-full text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="absolute bottom-[-35px] right-[-35px] bg-white rounded-[24px] px-10 py-8 shadow-2xl">
                
                <h2 className="text-[#A855F7] text-5xl font-black">
                  50+  
                </h2>

                <p className="text-gray-400 mt-2">
                  Deployments across India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#F8F2FC] px-4 sm:px-6 md:px-10 lg:px-16 py-24">
  <div className="max-w-[1400px] mx-auto">
    
    <div className="text-center">
      
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-10 h-[2px] bg-[#A855F7]"></div>

        <p className="text-[#A855F7] uppercase tracking-[4px] text-sm font-semibold">
          Our Framework
        </p>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mt-6 lg:mt-8 leading-tight">
        The Intelligence Architecture
      </h2>

      <p className="text-gray-500 text-xl leading-9 mt-6 max-w-[760px] mx-auto">
        Four interconnected layers that transform raw infrastructure
        data into actionable government intelligence.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 sm:mt-16 lg:mt-20 rounded-[32px] overflow-hidden border border-[#EFE7F6] bg-white shadow-sm">      {[
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
      ].map((item, index) => (
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

<section className="w-full bg-[#F8F2FC] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-15 lg:py-20  ">
  <div className="max-w-[1400px] mx-auto">
    
    <div className="text-center">
      
      <div className="flex items-center justify-center gap-2 mb-9">
        <div className="w-10 h-[2px] bg-[#A855F7] sm:text-3xl md:text-6xl "></div> 

        <p className="text-[#A855F7] uppercase tracking-[4px] text-sm font-semibold">
          Impact Areas
        </p>
      </div>
      <h2 className="text-[24px] leading-[40px] sm:text-4xl md:text-6xl lg:text-[64px] lg:leading-[72px] font-black text-black px-4">  
        Where Intelligence Meets Governance
      </h2>

      <p className="text-gray-500 text-base sm:text-lg lg:text-xl leading-8 sm:leading-9 mt-6 max-w-[760px] mx-auto px-2">
        Enabling smarter decisions across the most critical domains
        of public administration.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 ">
      
      {[
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
      ].map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#7B2FF7] via-[#4B148A] to-[#240046] p-10 min-h-[260px] shadow-xl hover:scale-[1.02] transition duration-300"
        >
          
          <div className="absolute top-[-80px] left-[-80px] w-[220px] h-[220px] bg-[#B266FF]/30 blur-3xl rounded-full"></div>

          <div className="relative z-10 w-14 h-14 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-2xl">
            {item.icon}
          </div>
          <h3 className="relative z-10 text-white text-[24px] leading-[32px] sm:text-[28px] sm:leading-[38px] lg:text-[34px] lg:leading-[42px] font-bold mt-10 max-w-[420px]">
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
  <section className="w-full bg-[#A63FD9] py-20 px-4 sm:px-6 md:px-10 lg:px-16">
  <div className="max-w-[1400px] mx-auto">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center">
      
      {[
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
      ].map((item, index) => (
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

<section className="w-full bg-[#F8F2FC] px-4 sm:px-6 md:px-10 lg:px-16 py-24">
  <div className="max-w-[1400px] mx-auto">
    
    <div className="text-center">
      
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-10 h-[2px] bg-[#A855F7]"></div>

        <p className="text-[#A855F7] uppercase tracking-[4px] text-sm font-semibold">
          Deployments
        </p>
      </div>

      <h2 className="text-[28px] leading-[38px] sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-[72px] font-black text-black px-2">
        Intelligence in Action
      </h2>

      <p className="text-gray-500 text-sm sm:text-base lg:text-xl leading-7 sm:leading-9 mt-6 max-w-[760px] mx-auto px-2">
        Real outcomes from real deployments — see how we've
        transformed public systems.
      </p>
    </div >

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
      
      {[
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
      ].map((item, index) => (
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
            
           <h3 className="text-[24px] leading-[34px] sm:text-[28px] sm:leading-[38px] lg:text-[34px] lg:leading-[44px] font-bold text-black">
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

<section className="w-full bg-[#2B0057] px-4 sm:px-6 md:px-10 lg:px-16 pt-14 sm:pt-20 lg:pt-28 pb-10 sm:pb-14 overflow-hidden">
  <div className="max-w-[1400px] mx-auto text-center">
    
    <div className="flex items-center justify-center gap-3 mb-5">
      <div className="w-10 h-[2px] bg-[#D28BFF]"></div>

      <p className="text-[#D8A8FF] uppercase tracking-[4px] text-[9px] sm:text-sm font-semibold">
        Our Mission
      </p>
    </div>
    <h2 className="text-white text-[34px] leading-[52px] sm:text-3xl md:text-6xl lg:text-[70px] lg:leading-[82px] font-black max-w-[1100px] mx-auto px-2">      We don't just deploy systems.
      <br />
      We build intelligence into them.
    </h2>

    <p className="text-[#C8B4E2] text-base sm:text-lg lg:text-xl leading-8 sm:leading-9 mt-6 max-w-[760px] mx-auto px-2">
      Globally, intelligence platforms are redefining governance.
      In India, this evolution is only beginning — and KS Smart
      is leading it.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-14">
      <button className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white hover:text-[#2B0057] transition duration-300">
        Explore Platforms
      </button>

      <button className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#C84BFF] to-[#A855F7] text-white font-semibold shadow-[0_0_40px_rgba(168,85,247,0.45)] hover:scale-105 transition duration-300">
        Partner With Us
      </button>
    </div>
  </div>
</section> 
      <Footer />
    </>
  );
}