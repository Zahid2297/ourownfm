import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PromptPlayground from "./PromptPlayground";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const dashboardRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const RESPONSIVE_WIDTH = 1024;

  useEffect(() => {
    // Expose video modal functions globally
    window.openVideo = () => {
      setIsVideoOpen(true);
      document.body.classList.add("modal-open");
    };
    window.closeVideo = () => {
      setIsVideoOpen(false);
      document.body.classList.remove("modal-open");
    };

    // Dashboard animation
    if (dashboardRef.current) {
      gsap.to(dashboardRef.current, {
        scale: 1,
        translateY: 0,
        rotateX: "0deg",
        scrollTrigger: {
          trigger: "#hero-section",
          start: window.innerWidth > RESPONSIVE_WIDTH ? "top 95%" : "top 70%",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }

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

    return () => {
      delete window.openVideo;
      delete window.closeVideo;
    };
  }, []);

  return (
    <section
      className="hero-section tw-relative tw-mt-20 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-overflow-hidden max-lg:tw-mt-[100px]"
      id="hero-section"
    >
      {/* Video Modal */}
      <div
        className={`tw-fixed tw-bg-[#000000af] dark:tw-bg-[#80808085] tw-top-0 tw-left-1/2 tw--translate-x-1/2 tw-z-20 tw-transition-opacity tw-duration-300 tw-p-2 tw-w-full tw-h-full tw-flex tw-place-content-center tw-place-items-center ${
          isVideoOpen ? "tw-scale-100 tw-opacity-100" : "tw-scale-0 tw-opacity-0"
        }`}
        id="video-container-bg"
        onClick={() => {
          setIsVideoOpen(false);
          document.body.classList.remove("modal-open");
        }}
      >
        <div
          className={`tw-max-w-[80vw] max-lg:tw-max-w-full max-lg:tw-w-full tw-transition-transform tw-duration-500 tw-p-6 tw-rounded-xl max-lg:tw-px-2 tw-w-full tw-gap-2 tw-shadow-md tw-h-[90vh] max-lg:tw-h-auto max-lg:tw-min-h-[400px] tw-bg-white dark:tw-bg-[#16171A] tw-max-h-full ${
            isVideoOpen ? "tw-scale-100" : "tw-scale-0"
          }`}
          id="video-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="tw-w-full tw-flex">
            <button
              type="button"
              onClick={() => {
                setIsVideoOpen(false);
                document.body.classList.remove("modal-open");
              }}
              className="tw-ml-auto tw-text-xl"
              title="close"
            >
              <i className="bi bi-x-circle-fill"></i>
            </button>
          </div>
          <div className="tw-flex tw-w-full tw-rounded-xl tw-px-[5%] max-md:tw-px-2 tw-min-h-[300px] tw-max-h-[90%] tw-h-full">
            <div className="tw-relative tw-bg-black tw-min-w-full tw-min-h-full tw-overflow-clip tw-rounded-md">
              <iframe
                className="tw-absolute tw-top-[50%] tw--translate-y-[50%] tw-left-[50%] tw--translate-x-[50%] tw-w-full tw-h-full"
                src="https://www.youtube.com/embed/kT8JyzNE-dI?si=krS8zHVJy4JzSaEJ&controls=0&rel=0&showinfo=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bg-gradient tw-relative tw-flex tw-h-full tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-gap-6 tw-p-[5%] max-xl:tw-place-items-center max-lg:tw-p-4">
        <div className="purple-bg-grad reveal-up tw-absolute tw-left-1/2 tw--translate-1/2 tw-top-[10%] tw-h-[120px] tw-w-[120px]"></div>

        <div className="tw-flex tw-flex-col tw-min-h-[60vh] tw-place-content-center tw-items-center">
          <h2 className="reveal-up tw-text-center tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[90px] max-lg:tw-text-4xl max-md:tw-leading-snug">
            <span>All your AI models</span>
            <br />
            <span className="tw-font-thin tw-font-serif">in one place</span>
          </h2>
          <div className="reveal-up tw-mt-8 tw-max-w-[450px] tw-text-lg max-lg:tw-text-base tw-p-2 tw-text-center tw-text-gray-800 dark:tw-text-white max-lg:tw-max-w-full">
            Your all in one AI companion. generate Images, videos, codes, docs, debug your web
            apps all with Pixa's interface.
          </div>

          <div className="reveal-up tw-mt-10 max-md:tw-flex-col tw-flex tw-place-items-center tw-gap-4">
            <button
              onClick={() => {
                setIsVideoOpen(true);
                document.body.classList.add("modal-open");
              }}
              className="btn !tw-w-[170px] max-lg:!tw-w-[160px] !tw-rounded-xl !tw-py-4 max-lg:!tw-py-2 tw-flex tw-gap-2 tw-group !tw-bg-transparent !tw-text-black dark:!tw-text-white tw-transition-colors tw-duration-[0.3s] tw-border-[1px] tw-border-black dark:tw-border-white"
            >
              <div className="tw-relative tw-flex tw-place-items-center tw-place-content-center tw-w-6 tw-h-6">
                <div className="tw-absolute tw-inset-0 tw-top-0 tw-left-0 tw-scale-0 tw-duration-300 group-hover:tw-scale-100 tw-border-2 tw-border-gray-600 dark:tw-border-gray-200 tw-rounded-full tw-w-full tw-h-full"></div>
                <span className="bi bi-play-circle-fill"></span>
              </div>
              <span>Watch video</span>
            </button>

            <a
              className="btn tw-group max-lg:!tw-w-[160px] tw-flex tw-gap-2 tw-shadow-lg !tw-w-[170px] !tw-rounded-xl !tw-py-4 max-lg:!tw-py-2 tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.03]"
              href="#"
            >
              <span>Get started</span>
              <i className="bi bi-arrow-right group-hover:tw-translate-x-1 tw-duration-300"></i>
            </a>
          </div>
        </div>

        <div
          className="reveal-up tw-relative tw-mt-8 tw-flex tw-w-full tw-place-content-center tw-place-items-center"
          id="dashboard-container"
        >
          <div className="purple-bg-grad reveal-up tw-absolute tw-left-1/2 tw--translate-x-1/2 tw-top-[5%] tw-h-[200px] tw-w-[200px]"></div>

          <div ref={dashboardRef} id="dashboard">
            <PromptPlayground />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

