export default function AboutCTA() {
  return (
    <section className="w-full bg-gradient-to-br from-[#2D0B59] via-[#4C1D95] to-[#6D28D9] py-16 sm:py-20 lg:py-28 overflow-hidden relative">

      <div className="absolute w-[500px] h-[500px] bg-[#A855F7]/20 blur-[120px] rounded-full top-[-120px] left-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 text-center">

        <h2 className="text-[30px] leading-[40px] sm:text-3xl md:text-5xl lg:text-5xl font-black text-white sm:leading-tight">
          Ready to build intelligence
          <br />
          into your systems?
        </h2>

        <p className="text-base sm:text-lg lg:text-xl leading-8 sm:leading-9 text-[#D8B4FE] mt-6 sm:mt-8 max-w-3xl mx-auto">
          Partner with KS Smart to transform your infrastructure into a
          strategic intelligence asset.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10 sm:mt-14">

          <button className="w-full sm:w-auto border border-[#C084FC] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition backdrop-blur-md">
            Explore Our Platforms
          </button>

          <button className="w-full sm:w-auto bg-[#C084FC] hover:bg-[#A855F7] transition text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold shadow-[0_0_40px_rgba(168,85,247,0.5)]">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}