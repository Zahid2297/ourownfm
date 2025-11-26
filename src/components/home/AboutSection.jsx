import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

const AboutSection = ({ scrollToSection }) => {
  const { theme } = useTheme();

  return (
    <section id="about" className="relative pb-0 bg-background z-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Sticky Header - acts as folder label */}
      <div className="sticky top-0 z-[500] backdrop-blur-md py-4 pt-20 ">
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
        <div className="w-full max-w-[95%] mx-auto">
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
            <ScrollStackItem itemClassName="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/90 dark:to-cyan-900/90 backdrop-blur-md border border-blue-200 dark:border-blue-700/50 shadow-xl overflow-hidden min-h-[400px]">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 h-full">
                <div className="flex-shrink-0 w-full md:w-80 h-64 md:h-auto">
                  <img
                    src="/img1.jpg"
                    alt="Our Vision"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center py-4">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Our Vision
                  </h3>
                  <div className="space-y-4 text-xl text-muted-foreground leading-relaxed">
                    <p>
                      To create a professional, skilled, and technologically
                      empowered FM workforce across India and the GCC.
                    </p>
                    <p>
                      We aim to uplift industry standards by nurturing talent
                      that adapts to modern FM demands.
                    </p>
                    <p>
                      Our long-term vision is to inspire continuous learning and
                      innovation within the FM ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollStackItem>

            {/* Mission Card */}
            <ScrollStackItem itemClassName="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/90 dark:to-cyan-900/90 backdrop-blur-md border border-blue-200 dark:border-blue-700/50 shadow-xl overflow-hidden min-h-[400px]">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 h-full">
                <div className="flex-shrink-0 w-full md:w-80 h-64 md:h-auto">
                  <img
                    src="/handshakeimg.jpg"
                    alt="Our Mission"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center py-4">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Our Mission
                  </h3>
                  <div className="space-y-4 text-xl text-muted-foreground leading-relaxed">
                    <p>
                      To deliver practical, real-world training and consultancy
                      through hands-on projects, expert collaboration, and
                      innovative solutions.
                    </p>
                    <p>
                      We design every program to solve actual industry
                      challenges with measurable outcomes.
                    </p>
                    <p>
                      Our mission is to make high-quality FM education
                      accessible, impactful, and industry-driven.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollStackItem>

            {/* Approach Card */}
            <ScrollStackItem itemClassName="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/90 dark:to-cyan-900/90 backdrop-blur-md border border-blue-200 dark:border-blue-700/50 shadow-xl overflow-hidden min-h-[400px]">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 h-full">
                <div className="flex-shrink-0 w-full md:w-80 h-64 md:h-auto">
                  <img
                    src="/ghost-img.png"
                    alt="Our Approach"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center py-4">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Our Approach
                  </h3>
                  <div className="space-y-4 text-xl text-muted-foreground leading-relaxed">
                    <p>
                      Our approach blends practical exposure with deep industry
                      insight, ensuring every learner gains real-world FM
                      experience.
                    </p>
                    <p>
                      We integrate technology, live environments, and
                      interactive learning to create a strong foundation for
                      professionals.
                    </p>
                    <p>
                      By combining structured guidance with problem-based
                      learning, we prepare individuals to thrive in dynamic FM
                      roles.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollStackItem>

            {/* Values Card */}
            <ScrollStackItem itemClassName="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/90 dark:to-cyan-900/90 backdrop-blur-md border border-blue-200 dark:border-blue-700/50 shadow-xl overflow-hidden min-h-[400px]">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 h-full">
                <div className="flex-shrink-0 w-full md:w-80 h-64 md:h-auto">
                  <img
                    src="/img1.jpg"
                    alt="Our Values"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center py-4">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Our Values
                  </h3>
                  <div className="space-y-4 text-xl text-muted-foreground leading-relaxed">
                    <p>
                      We believe in integrity, accountability, and excellence in
                      every training and consultancy we deliver.
                    </p>
                    <p>
                      These values shape the way we teach, collaborate, and
                      support FM professionals at every stage.
                    </p>
                    <p>
                      Our commitment to ethical practices ensures trust,
                      transparency, and long-term industry relationships.
                    </p>
                  </div>
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
