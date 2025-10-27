import { Link } from "wouter";
import { Twitter, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-3">
              AusSuperSource
            </h3>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              Specialist self-managed superannuation firm, facilitating Accountants & Financial advisors on wholesale SMSF solution provider for more than 8 years, based in Sydney and offering services throughout Australia.
            </p>
            
            <div>
              <h4 className="font-semibold mb-3">Supportive Partners</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <img
                  src="https://via.placeholder.com/80x80/0066cc/ffffff?text=SPAA"
                  alt="SPAA Specialist"
                  className="h-16 w-auto"
                />
                <img
                  src="https://via.placeholder.com/120x60/003366/ffffff?text=CPA+Australia"
                  alt="CPA Australia"
                  className="h-12 w-auto"
                />
                <img
                  src="https://via.placeholder.com/140x40/0099cc/ffffff?text=SimpleFund+360"
                  alt="SimpleFund 360"
                  className="h-10 w-auto"
                />
              </div>
              <div className="flex flex-wrap gap-4 items-center mt-3">
                <img
                  src="https://via.placeholder.com/120x40/99cc33/ffffff?text=Simple+Fund"
                  alt="Simple Fund"
                  className="h-10 w-auto"
                />
                <img
                  src="https://via.placeholder.com/120x40/006699/ffffff?text=Portal+by+BGL"
                  alt="Portal by BGL"
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Services
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/accountants">
                  <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Accountants & Advisors
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/trustees">
                  <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Trustee Clients
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Privacy Statement
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li>PO box 1213, Burwood, NSW 1805</li>
              <li>
                <a
                  href="tel:0289701102"
                  className="hover:text-primary transition-colors"
                >
                  02 8970 1102
                </a>
              </li>
              <li>
                <a
                  href="tel:0280048156"
                  className="hover:text-primary transition-colors"
                >
                  02 8004 8156
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aussupersource.com.au"
                  className="hover:text-primary transition-colors"
                >
                  info@aussupersource.com.au
                </a>
              </li>
            </ul>

            <div>
              <h4 className="font-semibold mb-3">Social Links</h4>
              <div className="flex gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover-elevate transition-all"
                  aria-label="Twitter"
                  data-testid="social-twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-[#4267B2] flex items-center justify-center text-white hover-elevate transition-all"
                  aria-label="Facebook"
                  data-testid="social-facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover-elevate transition-all"
                  aria-label="LinkedIn"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Australian Super Source Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
