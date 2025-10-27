import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";

export default function Team() {
  return (
    <div className="min-h-screen" data-route="team" data-contract-version="1.0.0" data-ready="team-page">
      <Navbar />
      
      <div className="pt-20">
        <TeamSection />
      </div>

      <Footer />
    </div>
  );
}
