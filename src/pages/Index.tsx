import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { DestaqueSection, ProcuradosSection, NovosSection } from "@/components/PropertySections";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import CitiesSection from "@/components/CitiesSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <FeaturedProperties />
      <ProcuradosSection />
      <NovosSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CitiesSection />
      <NewsletterSection />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
