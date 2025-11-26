import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Users } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";

const CollaborationsSection = () => {
  const collaborations = [
    {
      title: "Factech",
      description: "CAFM Partner",
      icon: Building2,
    },
    {
      title: "VDEI",
      description: "BIM Partner",
      icon: Building2,
    },
    {
      title: "Industry Experts",
      description: "Leading FM Professionals",
      icon: Users,
    },
  ];

  return (
    <section className="relative py-20 bg-muted/30 overflow-hidden z-0">
      {/* Normal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted/30 to-secondary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedContent>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Collaborations
          </h2>
        </AnimatedContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborations.map((collab, index) => {
            const Icon = collab.icon;
            return (
              <AnimatedContent
                key={index}
                distance={50}
                delay={index * 0.15}
                threshold={0.2}
              >
                <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {collab.title}
                    </CardTitle>
                    <CardDescription>{collab.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-24 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-300">
                      <Icon className="h-12 w-12 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    </div>
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

export default CollaborationsSection;
