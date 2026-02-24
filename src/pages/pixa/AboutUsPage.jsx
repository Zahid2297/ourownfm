import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./PixaLandingPage.css";

const AboutUsPage = () => {
  useEffect(() => {
    document.documentElement.classList.add("tw-dark");
    localStorage.setItem("color-mode", "dark");
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 100);
  }, []);

  return (
    <div className="pixa-landing-page tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-[#fcfcfc] tw-text-[#19300e] dark:tw-bg-black dark:tw-text-[#c1fc75]">
      <Header />

      <main className="tw-flex-1 tw-w-full" style={{ paddingTop: "200px" }}>
        <div className="tw-max-w-[1200px] tw-mx-auto tw-px-[5%] tw-py-16">
          <section className="tw-w-full tw-py-16 tw-px-[5%] dark:tw-bg-black">
            <div className="tw-max-w-[1400px] tw-mx-auto">
              <h2 className="about-ceo-title tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-12 tw-text-center tw-tracking-tight">
                Message from the CEO & Founder
              </h2>
              <div className="about-ceo-card tw-relative tw-mt-10 tw-w-full tw-rounded-2xl tw-overflow-hidden tw-border tw-border-gray-200 tw-p-8 sm:tw-p-10 lg:tw-p-12">
                <div className="tw-flex tw-flex-row tw-gap-6 sm:tw-gap-10 tw-items-stretch">
                  <div className="tw-w-1/2 tw-min-w-0 tw-space-y-5 tw-text-base sm:tw-text-lg tw-text-gray-800 tw-leading-[1.7] about-ceo-card__text tw-pr-2 sm:tw-pr-6">
                    <p>
                      Facilities Management is now a business-critical discipline,
                      powered by digital FM, automation, and data-driven
                      decision-making.
                    </p>
                    <p>
                      As buildings become smarter and more complex, FM
                      professionals are expected to manage advanced MEP systems,
                      CAFM platforms, and sustainability and ESG requirements —
                      often in live, high-risk environments.
                    </p>
                    <p>
                      Yet many challenges persist: unclear handovers, inadequate
                      technical training, heavy vendor dependency, and avoidable
                      incidents. These are not failures of effort, but{" "}
                      <strong className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                        gaps in capability
                      </strong>
                      .
                    </p>
                    <p className="tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                      Our Own FM Academy exists to close those gaps.
                    </p>
                    <p>
                      We develop FM professionals who are{" "}
                      <strong className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                        technically strong, safety-driven, digitally aware, and
                        operationally independent
                      </strong>{" "}
                      — capable of taking informed decisions, managing
                      specialists, negotiating with confidence, and leading
                      operations responsibly.
                    </p>
                    <p>
                      Stronger FM capability results in safer operations, smoother
                      handovers, effective use of technology, and consistent value
                      for clients.
                    </p>
                    <p>
                      This Academy is our contribution to building a safer, more
                      competent, and future-ready{" "}
                      <strong className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                        Facilities Management profession
                      </strong>
                      .
                    </p>
                    <div className="about-ceo-signature tw-mt-8 tw-pt-6 tw-border-t tw-border-gray-200 dark:tw-border-gray-600">
                      <p className="tw-text-xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-tracking-tight">
                        Syed Moonis Raza
                      </p>
                      <p className="tw-text-base sm:tw-text-lg tw-text-gray-600 dark:tw-text-gray-400 tw-mt-1">
                        CEO & Founder
                      </p>
                      <p className="tw-text-base sm:tw-text-lg tw-text-gray-600 dark:tw-text-gray-400">
                        Our Own FM Academy
                      </p>
                    </div>
                    <p className="tw-mt-6 tw-text-base sm:tw-text-lg tw-font-medium tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-italic tw-opacity-95">
                      Training builds people. Consultancy strengthens live
                      operations. Project Guidance protects future performance.
                    </p>
                  </div>
                  <div className="tw-w-1/2 tw-min-w-0 tw-flex tw-items-center tw-justify-end tw-pl-2 sm:tw-pl-6">
                    <div className="about-ceo-image-wrap tw-w-full tw-max-w-[340px] tw-rounded-xl tw-overflow-hidden tw-flex tw-justify-end">
                      <img
                        src="/founder.png"
                        alt="Syed Moonis Raza, CEO & Founder"
                        className="about-ceo-image tw-w-full tw-h-full tw-max-h-[400px] tw-object-cover tw-object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
