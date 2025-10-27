import { useEffect, useRef, useState } from "react";
import { CheckCircle, Clock, Calendar, Users } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  dataKpi: string;
}

function StatCard({ icon, value, suffix = "", label, dataKpi }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6"
      data-kpi={dataKpi}
    >
      <div className="mb-4 text-primary">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold mb-2" data-testid={`stat-${dataKpi}`}>
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by Hundreds Across Australia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering exceptional SMSF services with proven results and unmatched expertise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatCard
            icon={<CheckCircle className="h-12 w-12 md:h-16 md:w-16" />}
            value={100}
            suffix="%"
            label="Compliant SMSF Audits"
            dataKpi="compliant-audits"
          />
          <StatCard
            icon={<Users className="h-12 w-12 md:h-16 md:w-16" />}
            value={11}
            suffix="+"
            label="Years Experience"
            dataKpi="years-experience"
          />
          <StatCard
            icon={<Calendar className="h-12 w-12 md:h-16 md:w-16" />}
            value={5}
            label="Business Days Turnaround"
            dataKpi="business-days"
          />
          <StatCard
            icon={<Clock className="h-12 w-12 md:h-16 md:w-16" />}
            value={48}
            label="Hours Processing Time"
            dataKpi="processing-hours"
          />
        </div>
      </div>
    </section>
  );
}
