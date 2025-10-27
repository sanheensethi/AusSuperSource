import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20">
        <ServicesSection />
      </div>

      <Footer />
    </div>
  );
}
