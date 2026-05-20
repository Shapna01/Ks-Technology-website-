"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHero from "../components/common/PageHero";

import UrbanPlatformSection from "../components/intelligence-platform/UrbanPlatformSection";
import PublicSafetySection from "../components/intelligence-platform/PublicSafetySection";
import SmartCitySection from "../components/intelligence-platform/SmartCitySection";
import PredictiveSection from "../components/intelligence-platform/PredictiveSection";
import CTASection from "../components/intelligence-platform/CTASection";

export default function IntelligencePlatformPage() {
  return (
    <main className="w-full bg-white overflow-x-hidden">
      <Navbar />

      <PageHero
        badge="— OUR CAPABILITIES"
        title="Intelligence Platforms"
        description="Four integrated platforms that form the complete intelligence layer for government systems."
      />

      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">

          <UrbanPlatformSection />

          <PublicSafetySection />

          <SmartCitySection />

          <PredictiveSection />

        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
}