export default function PageHero({
  badge,
  title,
  description,
}) {
  return (
    <section className="w-full bg-[#F8F3FB]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10  pt-40 pb-20 lg:pt-44 lg:pb-24 text-center">
        <p className="text-[#A855F7] uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-5">
          {badge}
        </p>

        <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
          {title}
        </h1>

        <p className="max-w-3xl mx-auto text-gray-500 text-base sm:text-lg leading-7 sm:leading-8">
          {description}
        </p>

      </div>
    </section>
  );
}