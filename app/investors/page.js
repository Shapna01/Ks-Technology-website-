"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHero from "../components/common/PageHero";

import InvestorsSection from "../components/investors/InvestorsSection";

export default function InvestorsPage() {
  return (
    <main className="w-full bg-white min-h-screen overflow-hidden">
      <Navbar />

      <PageHero
        badge="— Shareholders"
        title="Investors"
        description="Financial insights, regulatory disclosures, and shareholder information—clearly organized and easy to access."
      />

      <InvestorsSection />

      <Footer />
    </main>
  );
}