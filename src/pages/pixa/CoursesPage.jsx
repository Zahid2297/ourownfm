import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseLevelsSection from "./components/CourseLevelsSection";
import "./PixaLandingPage.css";

const CoursesPage = () => {
  useEffect(() => {
    document.documentElement.classList.add("tw-dark");
    localStorage.setItem("color-mode", "dark");
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 100);
  }, []);

  return (
    <div className="pixa-landing-page tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-[#fcfcfc] tw-text-[#19300e] dark:tw-bg-black dark:tw-text-[#c1fc75]">
      <Header />
      <div
        className="tw-flex tw-flex-1 tw-flex-col"
        style={{ paddingTop: "250px" }}
      >
        <CourseLevelsSection />
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
