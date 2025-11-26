import AnimatedContent from "@/components/AnimatedContent";
import LogoLoop from "@/components/LogoLoop";

const CollaborationsSection = () => {
  const collaborations = [
    {
      name: "Factech",
      subtitle: "CAFM Partner",
      image: "", // Add logo image path here
    },
    {
      name: "VDEI",
      subtitle: "BIM Partner",
      image: "", // Add logo image path here
    },
    {
      name: "Industry Experts",
      subtitle: "Leading FM Professionals",
      image: "", // Add logo image path here
    },
    {
      name: "Partner 4",
      subtitle: "Technology Partner",
      image: "", // Add logo image path here
    },
    {
      name: "Partner 5",
      subtitle: "Training Partner",
      image: "", // Add logo image path here
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

        <div className="mt-8">
          <LogoLoop logos={collaborations} speed={30} direction="left" />
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
