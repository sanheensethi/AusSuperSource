import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Yateender Gupta",
    role: "Director, CPA, SPAA (SSAud)",
    bio: "Yateender Gupta, the Director, has provided trusted advice to thousands of personal clients over more than 25 years and is an acknowledged expert in areas of tax, Small Business Concessions, Structures and Self managed superannuation funds. His consulting experience ranges across a broad range of clients from individuals, SME's to leading manufacturing, trading companies, real-estate developers and medical practices.",
    email: "Yateen@aussupersource.com.au",
    image: "https://i.pravatar.cc/400?img=12",
  },
  {
    name: "Suresh Jangra",
    role: "Senior Consultant, CPA",
    bio: "With significant expertise in self-managed super funds accounting and compliance as well as general retirement strategies, Suresh Jangra is the Senior Consultant at Australian Super Source Pty Ltd. He is well versed and always updated with the latest in the self-managed super fund industry. He is leading the Accounting, Compliance and Administration Division of Australian Super Source Pty Ltd, which is responsible for the administration of more than 300 SMSFs.",
    email: "suresh@aussupersource.com.au",
    image: "https://i.pravatar.cc/400?img=13",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Expert Team
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Australian Super Source Pty Ltd, specialist self-managed superannuation firm, has been facilitating Accountants & Financial advisors on wholesale SMSF solution provider for more than 8 years, based in Sydney and offering services throughout Australia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" data-list="team-members">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-entity-type="team-member"
              data-entity-id={index.toString()}
            >
              <Card
                className="p-8 h-full hover-elevate transition-all duration-300"
                data-testid={`team-member-${index}`}
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/10"
                    />
                    <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background">
                      <Linkedin className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-1" data-col="name">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2" data-col="role">{member.role}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm" data-col="bio">
                  {member.bio}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                  data-col="email"
                >
                  <Mail className="h-4 w-4" />
                  {member.email}
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
