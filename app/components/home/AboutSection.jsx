export default function AboutSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-24">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
          
          <div className="flex-1 py-6 sm:py-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#A855F7]"></div>

              <p className="text-[#A855F7] uppercase tracking-[4px] text-sm font-semibold">
                Who We Are
              </p>
            </div>

            <h2 className="text-[34px] leading-[50px] sm:text-4xl md:text-6xl lg:text-[55px] lg:leading-[74px] font-black text-black max-w-[650px]">
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

  );
}