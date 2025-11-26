import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "The hands-on training at Our Own FM Academy helped us optimize operations and achieve real cost savings.",
      author: "Industry Professional",
      role: "FM Manager",
    },
    {
      quote:
        "The comprehensive curriculum and expert guidance prepared me for real-world FM challenges.",
      author: "Graduate",
      role: "FM Specialist",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden z-0">
      {/* Normal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedContent>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Students Say
          </h2>
        </AnimatedContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedContent
              key={index}
              distance={40}
              delay={index * 0.2}
              threshold={0.2}
            >
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/50">
                <CardContent className="space-y-4">
                  <Quote className="h-8 w-8 text-primary/50 group-hover:text-primary/80 group-hover:scale-110 transition-all duration-300" />
                  <p className="text-muted-foreground italic group-hover:text-foreground/90 transition-colors duration-300">
                    {testimonial.quote}
                  </p>
                  <div className="pt-4 border-t group-hover:border-primary/30 transition-colors duration-300">
                    <p className="font-semibold group-hover:text-primary transition-colors duration-300">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
