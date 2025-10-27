import { Card } from "@/components/ui/card";

const partners = [
  {
    name: "CPA Australia",
    color: "0066cc",
  },
  {
    name: "CA ANZ",
    color: "003366",
  },
  {
    name: "SMSF Assoc",
    color: "0099cc",
  },
  {
    name: "ATO Registered",
    color: "006633",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-20 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Partners & Accreditations
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted and certified by Australia's leading professional bodies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-6 flex items-center justify-center hover-elevate transition-all duration-300"
              data-testid={`partner-${index}`}
            >
              <img
                src={`https://via.placeholder.com/180x80/${partner.color}/ffffff?text=${encodeURIComponent(partner.name)}`}
                alt={partner.name}
                className="max-w-full h-auto"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
