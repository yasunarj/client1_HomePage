"use client";

import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SplashScreen from "./components/sections/SplashScreen";
import HeroSection from "./components/sections/HeroSection";
import WhatIsNeppashiSection from "./components/sections/WhatIsNeppashiSection";
import ProfileSection from "./components/sections/ProfileSection";
import PerformanceSection from "./components/sections/PerformanceSection";
import FAQSection from "./components/sections/FAQSection";
import PricingSection from "./components/sections/PricingSection";
import GallerySection from "./components/sections/GallerySection";
import CollaborationSection from "./components/sections/CollaborationSection";
import TrainingSection from "./components/sections/TrainingSection";
import ScheduleSection from "./components/sections/ScheduleSection";
import SocialSection from "./components/sections/SocialSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setShowMain(true);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showMain) {
    return <SplashScreen isFading={isFading} />;
  }

  return (
    <main>
      <Header />
      <HeroSection />
      <WhatIsNeppashiSection />
      <ProfileSection />
      <PerformanceSection />
      <FAQSection />
      <PricingSection />
      <GallerySection />
      <CollaborationSection />
      <TrainingSection />
      <ScheduleSection />
      <SocialSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
