import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Laptop, Wrench, TrendingUp } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";

const ProgramsSection = () => {
  const programs = [
    {
      icon: Laptop,
      title: "Digital FM",
      description: "CAFM, IoT, BIM",
      details:
        "Master digital tools and technologies transforming facilities management.",
    },
    {
      icon: Wrench,
      title: "FM Operations & Technical Training",
      description: "Comprehensive operational excellence",
      details: "Hands-on training in FM operations and technical maintenance.",
    },
    {
      icon: TrendingUp,
      title: "Sustainability & ESG",
      description: "Environmental responsibility",
      details: "Learn sustainable practices and ESG compliance for facilities.",
    },
  ];

  return (
    <section
      id="programs"
      className="relative py-20 bg-muted/30 overflow-hidden z-0"
    >
      {/* Normal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted/30 to-secondary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedContent>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed to build expertise in
              modern facilities management.
            </p>
          </div>
        </AnimatedContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <AnimatedContent
                key={index}
                distance={50}
                delay={index * 0.15}
                threshold={0.2}
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {program.title}
                    </CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{program.details}</p>
                  </CardContent>
                </Card>
              </AnimatedContent>
            );
          })}
        </div>
        <AnimatedContent delay={0.5}>
          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Programs
            </Button>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default ProgramsSection;
