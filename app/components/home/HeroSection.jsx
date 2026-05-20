export default function HeroSection() {
  return (
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
  );
}