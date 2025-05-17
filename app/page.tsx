import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ClientSplashWrapper from "./components/splash/ClientSplashWrapper";
import HeroSection from "./components/sections/HeroSection";
import WhatIsNeppashiSection from "./components/sections/WhatIsNeppashiSection";
import ProfileSection from "./components/sections/ProfileSection";
import PerformanceSection from "./components/sections/PerformanceSection";
import GallerySection from "./components/sections/GallerySection";
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
        <ScheduleSection />
        <GallerySection />
        <SocialSection />
        <TestimonialsSection />
        <ContactSection />
        <ScrollToTop />
        <Footer />
      </FadeInMain>
    </ClientSplashWrapper>
  );
}
