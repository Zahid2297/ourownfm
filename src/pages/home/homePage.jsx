import { useState, useEffect } from "react";
import Navigation from "@/components/home/Navigation";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import PillarsSection from "@/components/home/PillarsSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import CollaborationsSection from "@/components/home/CollaborationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/home/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const HomePage = () => {
  const [hideNavbar, setHideNavbar] = useState(false);

  // Smooth scroll to section helper function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detect when About section is in view
  useEffect(() => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hide navbar when About section is more than 10% visible
          setHideNavbar(entry.isIntersecting && entry.intersectionRatio > 0.1);
        });
      },
      {
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    observer.observe(aboutSection);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-foreground relative">
      <Navigation scrollToSection={scrollToSection} hideNavbar={hideNavbar} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection scrollToSection={scrollToSection} />
      <PillarsSection />
      <ProgramsSection />
      <WhyChooseUsSection />
      <CollaborationsSection />
      <TestimonialsSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default HomePage;
