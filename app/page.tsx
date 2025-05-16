import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ClientSplashWrapper from "./components/splash/ClientSplashWrapper";
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
import ScrollToTop from "./components/scroll/ScrollToTop";
import FadeInMain from "./components/sections/fadeIn/FadeInMain";

export default function Home() {
  return (
    <ClientSplashWrapper>
      <FadeInMain>
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
        <ScrollToTop />
        <Footer />
      </FadeInMain>
    </ClientSplashWrapper>
  );
}
