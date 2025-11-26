import AnimatedContent from "@/components/AnimatedContent";
import TiltedCard from "@/components/TiltedCard";
import { Building2, Users, Briefcase, Laptop } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Real-site Learning",
      description: "Hands-on experience at actual facilities management sites.",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      title: "Industry Collaborations",
      description: "Partnerships with leading FM organizations and experts.",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
    },
    {
      title: "Placement Support",
      description: "Career assistance in India & GCC markets.",
      icon: Briefcase,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50 dark:bg-green-950/30",
    },
    {
      title: "Hands-on Digital FM Tools",
      description: "Practical training on cutting-edge FM technologies.",
      icon: Laptop,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedContent
                key={index}
                distance={50}
                delay={index * 0.15}
                threshold={0.1}
              >
                <TiltedCard
                  imageSrc=""
                  altText={feature.title}
                  captionText=""
                  containerHeight="350px"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  scaleOnHover={1.05}
                  rotateAmplitude={8}
                  showMobileWarning={false}
                  showTooltip={false}
                  overlayContent={
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-background border border-border/50 shadow-lg">
                      {/* Icon Circle */}
                      <div
                        className={`w-20 h-20 rounded-full ${feature.bgColor} flex items-center justify-center mb-6`}
                      >
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-foreground">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  }
                  displayOverlayContent={true}
                />
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
