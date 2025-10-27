import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";

export default function Team() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20">
        <TeamSection />
      </div>

      <Footer />
    </div>
  );
}
