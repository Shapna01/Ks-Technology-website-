import HeroSection from "./HeroSection";
import MarqueeSection from "./MarqueeSection";
import AboutSection from "./AboutSection";
import FrameworkSection from "./FrameworkSection";
import ImpactSection from "./ImpactSection";
import StatsSection from "./StatsSection";
import DeploymentsSection from "./DeploymentsSection";
import MissionSection from "./MissionSection";
import Footer from "../layout/Footer";

export default function Hero() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <FrameworkSection />
      <ImpactSection />
      <StatsSection />
      <DeploymentsSection />
      <MissionSection />
      <Footer />
    </>
  );
}