import { CheckCircle2 } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Real-site Learning",
      description: "Hands-on experience at actual facilities management sites.",
    },
    {
      title: "Industry Collaborations",
      description: "Partnerships with leading FM organizations and experts.",
    },
    {
      title: "Placement Support",
      description: "Career assistance in India & GCC markets.",
    },
    {
      title: "Hands-on Digital FM Tools",
      description: "Practical training on cutting-edge FM technologies.",
    },
  ];

  return (
    <section id="why-us" className="relative py-20 overflow-hidden z-0">
      {/* Normal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedContent>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
        </AnimatedContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedContent
              key={index}
              distance={30}
              delay={index * 0.1}
              threshold={0.2}
            >
              <div className="space-y-3 group">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
