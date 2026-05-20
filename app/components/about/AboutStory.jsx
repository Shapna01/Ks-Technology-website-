export default function AboutStory() {
  return (
    <section className="w-full py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

        <div className="bg-gradient-to-br from-[#2D0B59] to-[#5B21B6] rounded-3xl p-12 text-white shadow-2xl relative min-h-[320px] flex flex-col justify-center">

          <div className="text-7xl text-[#8B5CF6] leading-none mb-6">
            “
          </div>

          <h3 className="text-3xl font-bold leading-[1.5] max-w-lg">
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

          <h2 className="text-3xl sm:text-3xl font-bold text-black mt-6 lg:mt-8 leading-tight">
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
  );
}