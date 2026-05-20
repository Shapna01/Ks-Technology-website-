export default function MarqueeSection() {
  return (
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

  );
}