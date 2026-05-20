export default function JourneyTimeline() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10">

        <div className="text-center mb-14 sm:mb-20">
          <p className="text-[#A855F7] uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
            Our Journey
          </p>

          <h2 className="text-2xl sm:text-2xl xl:text-4xl font-bold text-black mt-6 lg:mt-8 leading-tight">
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

                  <h3 className="text-2xl sm:text-2xl font-bold text-black mt-6 lg:mt-8 leading-tight">
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
  );
}