import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mainImg from "../../../assets/mainimgOFM.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    // Reveal up animations
    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => {
      const revealUptimeline = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: sec,
          start: "10% 80%",
          end: "20% 90%",
        },
      });

      revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
        opacity: 1,
        duration: 0.8,
        y: "0%",
        stagger: 0.2,
      });
    });

    // Initial reveal-up state
    gsap.set(".reveal-up", {
      opacity: 0,
      y: "100%",
    });
  }, []);

  return (
    <section
      className="hero-section tw-relative tw-mt-20 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-overflow-hidden max-lg:tw-mt-[100px]"
      id="hero-section"
    >
      {/* Background image: single image covering whole hero (no tiling) */}
      <div
        className="tw-absolute tw-inset-0 tw-z-0"
        style={{
          backgroundImage: `url(${mainImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      {/* Black layer at 50% transparency over the image */}
      <div
        className="tw-absolute tw-inset-0 tw-z-[1] tw-bg-black"
        style={{ opacity: 0.5 }}
        aria-hidden="true"
      />
      <div className="hero-bg-gradient tw-relative tw-z-10 tw-flex tw-h-full tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-gap-6 tw-p-[5%] max-xl:tw-place-items-start max-lg:tw-p-4">
        <div className="purple-bg-grad reveal-up tw-absolute tw-left-1/2 tw--translate-1/2 tw-top-[10%] tw-h-[120px] tw-w-[120px]"></div>

        <div className="tw-flex tw-flex-col tw-min-h-[60vh] tw-place-content-center tw-items-start tw-w-full max-lg:tw-items-center">
          <h2 className="reveal-up tw-text-left tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[90px] max-lg:tw-text-4xl max-md:tw-leading-snug max-lg:tw-text-center">
            <span>Building Leadership Capability</span>
            <br />
            <span className="tw-font-thin tw-font-serif">
              in Facilities Management
            </span>
          </h2>
          <div className="reveal-up tw-mt-8 tw-max-w-[450px] tw-text-lg max-lg:tw-text-base tw-p-2 tw-text-left tw-text-gray-800 dark:tw-text-white max-lg:tw-max-w-full max-lg:tw-text-center">
            Training | Consultancy | Project Guidance
          </div>

          <div className="reveal-up tw-mt-10 max-md:tw-flex-col tw-flex tw-place-items-start tw-gap-4 max-lg:tw-place-items-center">
            <a
              href="#contact"
              className="btn tw-group !tw-w-[170px] max-lg:!tw-w-[160px] tw-flex tw-gap-2 tw-shadow-lg !tw-rounded-xl !tw-py-4 max-lg:!tw-py-2 tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.03]"
            >
              <span>Get Started</span>
              <i className="bi bi-arrow-right group-hover:tw-translate-x-1 tw-duration-300"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
