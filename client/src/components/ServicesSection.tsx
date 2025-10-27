import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck, Settings, ClipboardCheck, ChevronDown, ChevronUp } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <FileCheck className="h-12 w-12" />,
    title: "SMSF Auditing",
    description: "Comprehensive and Independent SMSF Audit Solutions",
    features: [
      "Financial Statement Audit - Verification of fund's financial reports and supporting ledgers",
      "Compliance Audit - Evaluation of compliance with SISA/SISR and ATO policies",
      "Independent Auditor's Report (IAR) - Part A & B for annual tax returns",
      "Audit Contravention Reporting - ACR lodgment for detected breaches",
      "Best Practice Advisory - Recommendations for process improvements",
    ],
  },
  {
    icon: <Settings className="h-12 w-12" />,
    title: "Outsourcing SMSF Solution",
    description: "Seamless, End-to-End SMSF Outsourcing Solutions",
    features: [
      "SMSF Setup and Registration - Fund structure, trust deeds, ABN/TFN applications",
      "Ongoing Compliance Management - Fund administration and statutory reporting",
      "Accounting and Bookkeeping - Transaction processing and reconciliations",
      "Taxation and Regulatory Filings - Annual fund tax and ATO submissions",
      "Member Services - Account management and benefit statements",
      "Investment Administration - Portfolio recordkeeping and valuations",
    ],
  },
  {
    icon: <ClipboardCheck className="h-12 w-12" />,
    title: "Pre-Audit Readiness",
    description: "Proactive SMSF Audit Preparation and Risk Minimization",
    features: [
      "Document Review and Gap Analysis - Assessment of trust deeds and financial statements",
      "Bank and Ledger Reconciliations - End-to-end reconciliation of all transactions",
      "Contribution and Benefit Verification - Validation against ATO thresholds",
      "Asset and Investment Valuation - Independent valuation at market rates",
      "Compliance Checklist Completion - Trustee declarations and strategy reviews",
      "Mock Audit and Risk Identification - Trial procedures to identify issues early",
    ],
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="p-6 md:p-8 hover-elevate transition-all duration-300">
      <div className="text-primary mb-4">{service.icon}</div>
      <h3 className="text-2xl md:text-3xl font-semibold mb-3">{service.title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {service.description}
      </p>

      {isExpanded && (
        <ul className="space-y-3 mb-4">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex gap-2 text-sm">
              <FileCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <Button
        variant="ghost"
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 p-0 h-auto hover:bg-transparent"
        data-action={`service.toggle-${index}`}
        data-testid={`button-expand-service-${index}`}
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="ml-2 h-4 w-4" />
          </>
        ) : (
          <>
            Learn More <ChevronDown className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </Card>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-24 lg:py-32 bg-muted/30">
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
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
