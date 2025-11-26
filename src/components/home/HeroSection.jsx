import Plasma from "../../components/Plasma";
import { useTheme } from "@/contexts/ThemeContext";
import TextType from "@/components/TextType";
import { motion } from "framer-motion";

const HeroSection = ({ scrollToSection }) => {
  const { theme } = useTheme();

  // Theme-aware colors
  const plasmaColor = theme === "dark" ? "#3b82f6" : "#60a5fa";
  const bgColor = theme === "dark" ? "#0a0a0a" : "#f0f9ff";
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subTextColor = theme === "dark" ? "text-gray-200" : "text-gray-700";
  const gradientFrom = theme === "dark" ? "from-blue-400" : "from-blue-600";
  const gradientTo = theme === "dark" ? "to-cyan-400" : "to-cyan-600";

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: bgColor }}
    >
      {/* Plasma Background */}
      <div className="absolute inset-0 w-full h-full">
        <Plasma
          color={plasmaColor}
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={theme === "dark" ? 0.9 : 0.7}
          mouseInteractive={true}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${textColor} drop-shadow-2xl leading-tight`}
        >
          Shaping Tomorrow’s 
          <br />
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
          >
            Facilities Management
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`text-xl md:text-3xl mb-4 ${subTextColor} drop-shadow-lg font-medium min-h-[2em]`}
        >
          <TextType
            text={[
              "Training",
              "Consultancy",
              "Project Guidance",
              "Sustainability",
            ]}
            typingSpeed={80}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`text-lg md:text-xl mb-10 ${subTextColor} drop-shadow-lg`}
        >
          Empowering India & GCC
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <button
            className={`
              group relative overflow-hidden
              px-10 py-4 md:px-12 md:py-5
              text-lg md:text-xl font-semibold
              text-white
              rounded-full
              transition-all duration-300
              transform hover:scale-105 active:scale-95
              shadow-2xl hover:shadow-blue-500/50
              ${
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400"
                  : "bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 hover:from-blue-600 hover:via-blue-500 hover:to-cyan-500"
              }
            `}
            onClick={() => scrollToSection("contact")}
          >
            <span className="relative z-10">Connect With Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </motion.div>
      </div>

      {/* Gradient Overlay for Better Readability */}
      <div
        className={`absolute inset-0 pointer-events-none z-[5] ${
          theme === "dark"
            ? "bg-gradient-to-b from-black/30 via-transparent to-black/50"
            : "bg-gradient-to-b from-white/20 via-transparent to-white/30"
        }`}
      />
    </section>
  );
};

export default HeroSection;
