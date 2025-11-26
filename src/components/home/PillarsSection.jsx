import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Leaf, Users, Shield } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";

const PillarsSection = () => {
  const pillars = [
    {
      icon: Wrench,
      title: "Technicality",
      description:
        "Deep technical expertise in facilities management operations and systems.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Commitment to environmental responsibility and sustainable practices.",
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Developing strong leadership skills for FM professionals.",
    },
    {
      icon: Shield,
      title: "Accountability",
      description:
        "Fostering a culture of responsibility and ethical practices.",
    },
  ];

  return (
    <section className="relative py-32 mt-8 md:mt-48 overflow-hidden z-0">
      {/* Normal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedContent>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The 4 Pillars
          </h2>
        </AnimatedContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <AnimatedContent
                key={index}
                distance={40}
                delay={index * 0.1}
                threshold={0.2}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
