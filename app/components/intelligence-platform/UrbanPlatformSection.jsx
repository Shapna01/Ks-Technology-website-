export default function UrbanPlatformSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center border-b border-[#ECE7F4] pb-16 md:pb-24">
      
      <div>
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#F3E8FF] text-[#A855F7] text-xs tracking-[2px] font-bold uppercase">
          Platform 01
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-4xl font-bold text-black mt-6 lg:mt-8 leading-tight">
          Urban Intelligence Platform
        </h2>

        <p className="text-gray-500 text-base sm:text-lg leading-7 sm:leading-9 mt-6 md:mt-8 max-w-[620px]">
          Enables real-time traffic analytics, violation detection,
          and mobility insights to improve urban flow and enforcement
          efficiency across city infrastructure.
        </p>

        <div className="space-y-5 mt-10">
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
                value: "62%",
                width: "62%",
              },
              {
                label: "Speed Violations",
                value: "87%",
                width: "87%",
              },
              {
                label: "Safety Violations",
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