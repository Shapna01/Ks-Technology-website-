"use client";


import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHero from "../components/common/PageHero";

import AboutStory from "../components/about/AboutStory";
import Principles from "../components/about/Principles";
import JourneyTimeline from "../components/about/JourneyTimeline";
import AboutCTA from "../components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      <Navbar />

      <PageHero
        badge="— Who We Are"
        title="About KS Smart"
        description="A strategic intelligence systems provider focused on enabling intelligence-led governance across India."
      />

      <AboutStory />

      <Principles />

      <JourneyTimeline />

      <AboutCTA />

      <Footer />
    </main>
  );
}
