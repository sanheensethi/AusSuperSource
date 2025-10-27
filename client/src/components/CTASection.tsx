import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Partner with AusSuperSource
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Professional, reliable, and audit-ready SMSF administration and
          compliance—ensuring peace of mind and measurable value for your
          retirement strategy.
        </p>
        <Button
          size="lg"
          variant="secondary"
          onClick={scrollToContact}
          className="text-base"
          data-action="cta.contact"
          data-testid="button-cta-contact"
        >
          Contact Us Today
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
