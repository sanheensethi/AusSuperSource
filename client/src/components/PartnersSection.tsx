import { motion } from "framer-motion";

const partners = [
  { name: "CPA Australia", color: "0066cc" },
  { name: "CA ANZ", color: "003366" },
  { name: "SMSF Assoc", color: "0099cc" },
  { name: "ATO Registered", color: "006633" },
];

export default function PartnersSection() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Our Credentials
          </h2>
        </motion.div>

        <div className="relative">
          <div className="flex animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`partner-${index}`}
                className="flex-shrink-0 px-6 md:px-8"
                data-testid={`partner-${index}`}
              >
                <div className="w-40 h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                  <img
                    src={`https://via.placeholder.com/180x80/${partner.color}/ffffff?text=${encodeURIComponent(partner.name)}`}
                    alt={partner.name}
                    className="max-w-full h-auto grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
