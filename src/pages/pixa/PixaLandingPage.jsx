import { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BrandCarousel from "./components/BrandCarousel";
import BuildAppsSection from "./components/BuildAppsSection";
import FeaturesSection from "./components/FeaturesSection";
import PreBuiltToolsSection from "./components/PreBuiltToolsSection";
import AdditionalFeaturesSection from "./components/AdditionalFeaturesSection";
import SubscriptionSection from "./components/SubscriptionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import ArticlesSection from "./components/ArticlesSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import "./PixaLandingPage.css";

const PixaLandingPage = () => {
  useEffect(() => {
    // Initialize dark mode from localStorage
    const colorMode = localStorage.getItem("color-mode");
    if (
      colorMode === "dark" ||
      (!colorMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("tw-dark");
    } else {
      document.documentElement.classList.remove("tw-dark");
    }
  }, []);

  return (
    <div className="pixa-landing-page tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-[#fcfcfc] tw-text-black dark:tw-bg-black dark:tw-text-white">
      <Header />
      <HeroSection />
      <BrandCarousel />
      <BuildAppsSection />
      <FeaturesSection />
      <PreBuiltToolsSection />
      <AdditionalFeaturesSection />
      <SubscriptionSection />
      <TestimonialsSection />
      <PricingSection />
      <ArticlesSection />
      <FAQSection />
      <CTASection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default PixaLandingPage;
