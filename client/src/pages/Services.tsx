import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

export default function Services() {
  return (
    <div className="min-h-screen" data-route="services" data-contract-version="1.0.0" data-ready="services-page">
      <Navbar />
      
      <div className="pt-20">
        <ServicesSection />
      </div>

      <Footer />
    </div>
  );
}
