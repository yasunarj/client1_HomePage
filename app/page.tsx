"use client";

import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SplashScreen from "./components/sections/SplashScreen";
import HeroSection from "./components/sections/HeroSection";
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
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isMainVisible, setIsMainVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false); // Splashを非表示（フェードアウト）
      setIsMainVisible(true); // Mainを表示（フェードイン）
    }, 3000); // Splash表示3秒 + フェードアウト1秒

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Splash */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-1000 bg-white ${
          isSplashVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <SplashScreen isFading={!isSplashVisible} />
      </div>

      {/* Main */}
      <div
        className={`transition-opacity duration-1000 ${
          isMainVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <main className="min-h-screen pt-16">
          <HeroSection />
          <ProfileSection />
          <PerformanceSection />
          <GallerySection />
          <TestimonialsSection />
          <CollaborationSection />
          <PricingSection />
          <FAQSection />
          <ScheduleSection />
          <TrainingSection />
          <SocialSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
