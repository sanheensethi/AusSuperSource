import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      data-route="home"
      data-contract-version="1.0.0"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              AusSuperSource
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors"
              data-nav-item="services"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors"
              data-nav-item="team"
              data-testid="link-team"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors"
              data-nav-item="contact"
              data-testid="link-contact"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              data-action="navigation.contact"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 rounded-md hover-elevate transition-colors"
              data-testid="link-services-mobile"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left px-3 py-2 rounded-md hover-elevate transition-colors"
              data-testid="link-team-mobile"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 rounded-md hover-elevate transition-colors"
              data-testid="link-contact-mobile"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full"
              data-testid="button-get-started-mobile"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
