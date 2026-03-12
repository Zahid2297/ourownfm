import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BrandCarousel from "./components/BrandCarousel";
import PreBuiltToolsSection from "./components/PreBuiltToolsSection";
import AdditionalFeaturesSection from "./components/AdditionalFeaturesSection";
import CoursesSection from "./components/CoursesSection";
import CertificationsSection from "./components/CertificationsSection";
import SubscriptionSection from "./components/SubscriptionSection";
import ProjectGuidanceSection from "./components/ProjectGuidanceSection";
import ArticlesSection from "./components/ArticlesSection";
import DomeGallerySection from "./components/DomeGallerySection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import "./PixaLandingPage.css";

const PixaLandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Force dark mode always - dark mode is the only mode
    document.documentElement.classList.add("tw-dark");
    localStorage.setItem("color-mode", "dark");
  }, []);

  useEffect(() => {
    const hash = location.hash?.replace("#", "") || "";
    if (!hash || !["contact", "certifications", "consultancy", "project-guidance", "gallery"].includes(hash)) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="pixa-landing-page tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-[#fcfcfc] tw-text-[#19300e] dark:tw-bg-black dark:tw-text-[#c1fc75]">
      <Header />
      <HeroSection />
      <BrandCarousel />
      <PreBuiltToolsSection />
      <AdditionalFeaturesSection />
      <CoursesSection />
      <CertificationsSection />
      <SubscriptionSection />
      <ProjectGuidanceSection />
      <ArticlesSection />
      <DomeGallerySection />
      <FAQSection />
      <CTASection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default PixaLandingPage;
