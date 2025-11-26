import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Target, Lightbulb, Wrench } from "lucide-react";

const AboutSection = ({ scrollToSection }) => {
  const { theme } = useTheme();

  return (
    <section id="about" className="relative pb-0 bg-background z-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20 dark:to-background" />

      {/* Sticky Header - acts as folder label */}
      <div className="sticky top-0 z-[500] bg-background/95 backdrop-blur-md py-4 border-b border-border/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building Excellence in Facilities Management
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-[5] mt-0">
        {/* ScrollStack Cards */}
        <div className="max-w-4xl mx-auto">
          <ScrollStack
            useWindowScroll={true}
            itemDistance={10}
            itemScale={0.02}
            itemStackDistance={30}
            stackPosition="180px"
            scaleEndPosition="140px"
            baseScale={0.94}
            scaleDuration={0.5}
            rotationAmount={0}
            blurAmount={0}
          >
            {/* Vision Card */}
            <ScrollStackItem
              itemClassName={`${
                theme === "dark"
                  ? "bg-gradient-to-br from-blue-900/95 to-cyan-900/80 border-2 border-blue-500/30 backdrop-blur-sm shadow-xl"
                  : "bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 backdrop-blur-sm shadow-xl"
              }`}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Our Vision
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To create a professional, skilled, and technologically
                    empowered FM workforce across India and the GCC.
                  </p>
                </div>
              </div>
            </ScrollStackItem>

            {/* Mission Card */}
            <ScrollStackItem
              itemClassName={`${
                theme === "dark"
                  ? "bg-gradient-to-br from-cyan-900/95 to-blue-900/80 border-2 border-cyan-500/30 backdrop-blur-sm shadow-xl"
                  : "bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-300 backdrop-blur-sm shadow-xl"
              }`}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Our Mission
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To deliver practical, real-world training and consultancy
                    through hands-on projects, expert collaboration, and
                    innovative solutions.
                  </p>
                </div>
              </div>
            </ScrollStackItem>

            {/* Approach Card */}
            <ScrollStackItem
              itemClassName={`${
                theme === "dark"
                  ? "bg-gradient-to-br from-indigo-900/95 to-blue-900/80 border-2 border-indigo-500/30 backdrop-blur-sm shadow-xl"
                  : "bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-300 backdrop-blur-sm shadow-xl"
              }`}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Our Approach
                  </h3>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 mt-2 mr-3 flex-shrink-0" />
                      <span>
                        Focus on real problems and practical solutions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 mt-2 mr-3 flex-shrink-0" />
                      <span>
                        Hands-on learning through site visits, live projects,
                        and interactive webinars
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 mt-2 mr-3 flex-shrink-0" />
                      <span>
                        Technology-driven insights using CAFM, BIM, and
                        sustainability tools
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
