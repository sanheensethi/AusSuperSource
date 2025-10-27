import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";

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
        isScrolled ? "bg-background/95 backdrop-blur-md border-b" : isHome ? "bg-black/20 backdrop-blur-sm" : "bg-background/95 backdrop-blur-md border-b"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <h1 className={`text-xl md:text-2xl font-bold transition-colors cursor-pointer ${
              (isScrolled || !isHome) ? "text-primary" : "text-white"
            }`}>
              AusSuperSource
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/">
              <button
                className={`text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors ${
                  (isScrolled || !isHome) ? "" : "text-white"
                }`}
                data-testid="link-home"
              >
                Home
              </button>
            </Link>
            <Link href="/about">
              <button
                className={`text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors ${
                  (isScrolled || !isHome) ? "" : "text-white"
                }`}
                data-testid="link-about"
              >
                About Us
              </button>
            </Link>
            <Link href="/services">
              <button
                className={`text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors ${
                  (isScrolled || !isHome) ? "" : "text-white"
                }`}
                data-testid="link-services"
              >
                Services
              </button>
            </Link>
            <Link href="/team">
              <button
                className={`text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors ${
                  (isScrolled || !isHome) ? "" : "text-white"
                }`}
                data-testid="link-team"
              >
                Our Team
              </button>
            </Link>
            <div className="relative group">
              <button
                className={`text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors ${
                  (isScrolled || !isHome) ? "" : "text-white"
                }`}
                data-testid="link-how-we-do"
              >
                How We Do
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/accountants">
                  <button className="block w-full text-left px-4 py-3 hover-elevate text-sm">
                    Accountants & Advisors
                  </button>
                </Link>
                <Link href="/trustees">
                  <button className="block w-full text-left px-4 py-3 hover-elevate text-sm">
                    Trustee Clients
                  </button>
                </Link>
              </div>
            </div>
            <Link href="/contact">
              <button
                className={`text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors ${
                  (isScrolled || !isHome) ? "" : "text-white"
                }`}
                data-testid="link-contact"
              >
                Contact
              </button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                data-testid="button-login"
              >
                Client Login
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={(isScrolled || !isHome) ? "" : "text-white hover:text-white"}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-4 py-4 space-y-2">
            <Link href="/">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-md hover-elevate transition-colors"
                data-testid="link-home-mobile"
              >
                Home
              </button>
            </Link>
            <Link href="/about">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-md hover-elevate transition-colors"
                data-testid="link-about-mobile"
              >
                About Us
              </button>
            </Link>
            <Link href="/services">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-md hover-elevate transition-colors"
                data-testid="link-services-mobile"
              >
                Services
              </button>
            </Link>
            <Link href="/team">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-md hover-elevate transition-colors"
                data-testid="link-team-mobile"
              >
                Our Team
              </button>
            </Link>
            <Link href="/accountants">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-md hover-elevate transition-colors pl-6 text-sm"
              >
                Accountants & Advisors
              </button>
            </Link>
            <Link href="/trustees">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-md hover-elevate transition-colors pl-6 text-sm"
              >
                Trustee Clients
              </button>
            </Link>
            <Link href="/contact">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-md hover-elevate transition-colors"
                data-testid="link-contact-mobile"
              >
                Contact
              </button>
            </Link>
            <Link href="/login">
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                variant="outline"
                className="w-full mt-2"
                data-testid="button-login-mobile"
              >
                Client Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
