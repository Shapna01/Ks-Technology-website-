export default function PublicSafetySection() {
  return (
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

        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-black mt-6 lg:mt-8 leading-tight">
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
  );
}