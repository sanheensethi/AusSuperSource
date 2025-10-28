import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ServicesSection from "@/components/ServicesSection";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="min-h-screen" data-route="services" data-contract-version="1.0.0" data-ready="services-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl text-primary-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive SMSF solutions tailored to your needs
          </motion.p>
        </div>
      </section>
      
      <div className="bg-white">
        <ServicesSection />
      </div>

      <Footer />
      <FloatingContactButton />
    </div>
  );
}
