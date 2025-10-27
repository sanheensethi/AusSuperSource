import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ValueProposition from "@/components/ValueProposition";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" data-route="home" data-contract-version="1.0.0" data-ready="home-page">
      <Navbar />
      <Hero />
      <StatsSection />
      <ValueProposition />
      <ServicesSection />
      <TeamSection />
      <PartnersSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
