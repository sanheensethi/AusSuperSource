import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_SMSF_office_collaboration_e65dfd08.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-white/90">
              Award-Winning SMSF Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            SMSF Expertise{" "}
            <span className="text-primary">You Can Count On</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            At AusSuperSource, we simplify SMSF management with expert auditing,
            outsourcing, and compliance solutions tailored for Australian
            self-managed super funds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-base"
              data-action="hero.contact"
              data-testid="button-contact-us"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="text-base bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
              data-action="hero.services"
              data-testid="button-our-services"
            >
              Our Services
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-md bg-white/10 backdrop-blur-md flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-white/90">
                <div className="text-xs font-medium">CPA Australia</div>
                <div className="text-xs text-white/70">Accredited</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-md bg-white/10 backdrop-blur-md flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-white/90">
                <div className="text-xs font-medium">CA ANZ</div>
                <div className="text-xs text-white/70">Member</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-md bg-white/10 backdrop-blur-md flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-white/90">
                <div className="text-xs font-medium">ATO</div>
                <div className="text-xs text-white/70">Registered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
