import Footer from "../layout/Footer";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#2B0057] px-4 sm:px-6 md:px-10 lg:px-16 pt-14 sm:pt-20 lg:pt-28 pb-10 sm:pb-14 overflow-hidden">
  <div className="max-w-[1400px] mx-auto text-center">
    
    <div className="flex items-center justify-center gap-3 mb-5">
      <div className="w-10 h-[2px] bg-[#D28BFF]"></div>

      <p className="text-[#D8A8FF] uppercase tracking-[4px] text-[9px] sm:text-sm font-semibold">
        Our Mission
      </p>
    </div>
    <h2 className="text-white text-[34px] leading-[52px] sm:text-3xl md:text-6xl lg:text-[50px] lg:leading-[82px] font-black max-w-[1100px] mx-auto px-2">      We don't just deploy systems.
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
  );
}