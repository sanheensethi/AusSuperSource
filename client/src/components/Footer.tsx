export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-3">
              AusSuperSource
            </h3>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Simplifying SMSF management with expert auditing, outsourcing, and
              compliance solutions tailored for Australian self-managed super funds.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-testid="footer-link-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-testid="footer-link-team"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-testid="footer-link-contact"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:contact@aussupersource.com.au"
                  className="hover:text-primary transition-colors"
                >
                  contact@aussupersource.com.au
                </a>
              </li>
              <li>
                <a
                  href="tel:1300123456"
                  className="hover:text-primary transition-colors"
                >
                  1300 123 456
                </a>
              </li>
              <li>Sydney, Australia</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} AusSuperSource. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
