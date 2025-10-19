import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <VideoSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingContactButtons />
    </div>
  );
};

export default Index;
