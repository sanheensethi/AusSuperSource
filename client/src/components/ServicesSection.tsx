import { Card } from "@/components/ui/card";
import { FileCheck, Settings, FileText, DollarSign, ClipboardCheck, Users, FileSignature } from "lucide-react";

const services = [
  {
    icon: <FileCheck className="h-10 w-10" />,
    title: "Audit Services",
    description: "A SMSF Auditor registered by ASIC",
  },
  {
    icon: <Settings className="h-10 w-10" />,
    title: "Fund Setup",
    description: "We can assist you in SMSF setup, opening bank accounts for super fund",
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: "Trust Deed Variations & Updates",
    description: "Service to the member application(s) to become member (where applicable)",
  },
  {
    icon: <FileSignature className="h-10 w-10" />,
    title: "Lump Sum Documentation",
    description: "Service to prepare ATO registrations and documentation (where applicable)",
  },
  {
    icon: <DollarSign className="h-10 w-10" />,
    title: "Commencement of Pension",
    description: "Documents regarding reversionary / non-reversionary pensions and calculation",
  },
  {
    icon: <ClipboardCheck className="h-10 w-10" />,
    title: "Administration, Compliance & Audit",
    description: "Arrangement for SMSF audit, Preparation of Financial Statements and Tax Return",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Admission & Retirement",
    description: "ATO submission documentation and Member application(s) to become member",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive SMSF solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover-elevate transition-all duration-300"
              data-testid={`service-${index}`}
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
