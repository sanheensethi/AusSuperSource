import { CheckCircle, Users, Zap, DollarSign, Shield, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "100% Compliant",
    description: "Full adherence to SISA/SISR, ATO policies, and Australian Auditing Standards",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert SMSF Team",
    description: "Qualified auditors and accountants specializing in self-managed super funds",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Fast Turnaround",
    description: "Quick processing with detailed reporting and actionable insights",
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Transparent Pricing",
    description: "No hidden fees—clear, upfront pricing for all SMSF services",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Comprehensive Support",
    description: "Full-service SMSF solutions from setup to ongoing compliance",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Risk Mitigation",
    description: "Proactive identification and resolution of compliance issues before they become problems",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Less Complexity, More Confidence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At AusSuperSource, we don't think SMSF compliance should feel like solving
            a puzzle in the dark. That's why we've built services that are fast,
            professional, and remarkably straightforward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover-elevate transition-all duration-300 hover:shadow-lg"
              data-testid={`benefit-${index}`}
            >
              <div className="text-primary mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
