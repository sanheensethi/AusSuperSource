import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-3">
              AusSuperSource
            </h3>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Specialist self-managed superannuation firm, facilitating Accountants & Financial advisors on wholesale SMSF solution provider for more than 8 years, based in Sydney and offering services throughout Australia.
            </p>
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
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
