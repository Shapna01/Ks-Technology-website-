export default function SmartCitySection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center border-b border-[#ECE7F4] py-16 md:py-24">

      <div className="order-2 lg:order-1">
        <div className="inline-flex items-center px-4 sm:px-5 py-2 rounded-full bg-[#F3E8FF] text-[#A855F7] text-[10px] sm:text-xs tracking-[2px] font-bold uppercase">
          Platform 03
        </div>

        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-black mt-6 lg:mt-8 leading-tight">
          Command & control system
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
          <div className="mt-10 space-y-6">
            {[
              {
                label: "Traffic Systems",
                value: "62%",
                width: "62%",
              },
              {
                label: "Safety Systems",
                value: "87%",
                width: "87%",
              },
              {
                label: "Utility Systems",
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

    </div>
  );
}