import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Senior SMSF Auditor",
    image: "https://i.pravatar.cc/400?img=47",
  },
  {
    name: "David Chen",
    role: "Compliance Manager",
    image: "https://i.pravatar.cc/400?img=13",
  },
  {
    name: "Emma Williams",
    role: "Senior Accountant",
    image: "https://i.pravatar.cc/400?img=45",
  },
  {
    name: "Michael Brown",
    role: "Tax Specialist",
    image: "https://i.pravatar.cc/400?img=12",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our SMSF specialists who ensure your success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="p-6 text-center hover-elevate transition-all duration-300"
              data-entity-type="team-member"
              data-entity-id={index.toString()}
              data-testid={`team-member-${index}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
