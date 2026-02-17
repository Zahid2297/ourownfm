import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./PixaLandingPage.css";

const AboutUsPage = () => {
  useEffect(() => {
    // Force dark mode always - dark mode is the only mode
    document.documentElement.classList.add("tw-dark");
    localStorage.setItem("color-mode", "dark");

    // Scroll to top on mount
    window.scrollTo(0, 0);
    // Also try scrolling after a small delay to ensure it works
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <div className="pixa-landing-page tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-[#fcfcfc] tw-text-[#19300e] dark:tw-bg-black dark:tw-text-[#c1fc75]">
      <Header />

      {/* Who We Are Section */}
      <section className="tw-w-full tw-pt-[180px] max-md:tw-pt-[150px] tw-py-16 tw-px-[5%] dark:tw-bg-black">
        <div className="tw-max-w-[1400px] tw-mx-auto">
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-8 tw-text-center">
            Who We Are
          </h2>
          <div className="tw-max-w-[900px] tw-mx-auto tw-space-y-6 tw-text-lg tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed">
            <p>
              Our Own FM Academy is a professional capability-building platform
              created to strengthen the Facilities Management industry through
              structured training, practical exposure, and real-world project
              guidance.
            </p>
            <p>
              The Academy is founded and led by{" "}
              <strong className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                Syed Moonis Raza
              </strong>
              , a facilities Management professional with over 30 years of
              hands-on industry experience across complex assets, live
              operational environments, and large-scale projects in India and
              the GCC.
            </p>
            <p>
              Built on real operational realities—not theory alone—Our Own FM
              Academy addresses the capability gaps that commonly impact safety,
              performance, handovers, and long-term asset outcomes.
            </p>
            <p className="tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mt-8">
              Buildings are strong when their pillars are strong. We aim to make
              every Facilities Management professional a pillar.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="tw-w-full tw-py-16 tw-px-[5%] dark:tw-bg-[#080808]">
        <div className="tw-max-w-[1400px] tw-mx-auto">
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-12 tw-text-center">
            Our Foundation: The Four Pillars of FM Professionalism
          </h2>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-max-w-[1200px] tw-mx-auto">
            <div className="reveal-up tw-flex tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-8 tw-shadow-xl">
              <h3 className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-2">
                1. Technical Competence
              </h3>
              <p className="tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed">
                Strong understanding of systems, assets, and operations,
                enabling confident, independent decision-making and reduced
                reliance on vendors.
              </p>
            </div>

            <div className="reveal-up tw-flex tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-8 tw-shadow-xl">
              <h3 className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-2">
                2. Sustainability & ESG
              </h3>
              <p className="tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed">
                Responsible FM practices aligned with energy efficiency,
                statutory compliance, ESG requirements, and long-term asset
                value.
              </p>
            </div>

            <div className="reveal-up tw-flex tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-8 tw-shadow-xl">
              <h3 className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-2">
                3. Leadership
              </h3>
              <p className="tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed">
                Development of people management, communication, procurement,
                and commercial awareness—beyond day-to-day operations.
              </p>
            </div>

            <div className="reveal-up tw-flex tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-8 tw-shadow-xl">
              <h3 className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-2">
                4. Accountability
              </h3>
              <p className="tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed">
                Clear ownership of safety, performance, handover outcomes,
                emergency readiness, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="tw-w-full tw-py-16 tw-px-[5%] dark:tw-bg-black">
        <div className="tw-max-w-[1400px] tw-mx-auto">
          <h2 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-12 tw-text-center">
            Message from the CEO & Founder
          </h2>
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-max-w-[1200px] tw-mx-auto tw-items-start">
            <div className="tw-space-y-6 tw-text-lg tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed">
              <p>
                Facilities Management is now a business-critical discipline,
                powered by digital FM, automation, and data-driven
                decision-making.
              </p>
              <p>
                As buildings become smarter and more complex, FM professionals
                are expected to manage advanced MEP systems, CAFM platforms, and
                sustainability and ESG requirements — often in live, high-risk
                environments.
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
                — capable of taking informed decisions, managing specialists,
                negotiating with confidence, and leading operations responsibly.
              </p>
              <p>
                Stronger FM capability results in safer operations, smoother
                handovers, effective use of technology, and consistent value for
                clients.
              </p>
              <p>
                This Academy is our contribution to building a safer, more
                competent, and future-ready{" "}
                <strong className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                  Facilities Management profession
                </strong>
                .
              </p>
              <div className="tw-mt-8 tw-pt-6 tw-border-t tw-border-gray-300 dark:tw-border-gray-700">
                <p className="tw-text-xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                  Syed Moonis Raza
                </p>
                <p className="tw-text-lg tw-text-gray-700 dark:tw-text-gray-300">
                  CEO & Founder
                </p>
                <p className="tw-text-lg tw-text-gray-700 dark:tw-text-gray-300">
                  Our Own FM Academy
                </p>
              </div>
              <p className="tw-mt-6 tw-text-lg tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-italic">
                Training builds people. Consultancy strengthens live operations.
                Project Guidance protects future performance.
              </p>
            </div>
            <div className="tw-w-full tw-h-[600px] tw-rounded-lg tw-overflow-hidden tw-shadow-2xl">
              <img
                src="/founder.jpeg"
                alt="Syed Moonis Raza - CEO & Founder"
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="tw-w-full tw-py-16 tw-px-[5%] dark:tw-bg-[#080808]">
        <div className="tw-max-w-[1400px] tw-mx-auto">
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-max-w-[1200px] tw-mx-auto">
            <div className="reveal-up tw-flex tw-flex-col tw-gap-6 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-8 tw-shadow-xl">
              <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                Our Vision
              </h2>
              <p className="tw-text-lg tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed">
                To contribute to a safer, more capable, and more professional
                Facilities Management industry by strengthening the people
                responsible for operating and protecting built assets.
              </p>
            </div>

            <div className="reveal-up tw-flex tw-flex-col tw-gap-6 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-8 tw-shadow-xl">
              <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                Our Mission
              </h2>
              <ul className="tw-list-none tw-space-y-4 tw-text-lg tw-text-gray-800 dark:tw-text-gray-200">
                <li className="tw-flex tw-items-start tw-gap-3">
                  <span className="tw-text-[#c1fc75] tw-font-bold tw-text-xl tw-flex-shrink-0 tw-mt-1">
                    •
                  </span>
                  <span>
                    To develop FM professionals from{" "}
                    <strong className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                      basics to leadership
                    </strong>
                  </span>
                </li>
                <li className="tw-flex tw-items-start tw-gap-3">
                  <span className="tw-text-[#c1fc75] tw-font-bold tw-text-xl tw-flex-shrink-0 tw-mt-1">
                    •
                  </span>
                  <span>
                    To reduce dependency on vendors through strong in-house
                    capability
                  </span>
                </li>
                <li className="tw-flex tw-items-start tw-gap-3">
                  <span className="tw-text-[#c1fc75] tw-font-bold tw-text-xl tw-flex-shrink-0 tw-mt-1">
                    •
                  </span>
                  <span>
                    To promote zero incidents, zero accidents, and high
                    emergency readiness
                  </span>
                </li>
                <li className="tw-flex tw-items-start tw-gap-3">
                  <span className="tw-text-[#c1fc75] tw-font-bold tw-text-xl tw-flex-shrink-0 tw-mt-1">
                    •
                  </span>
                  <span>To enable smooth project handover and takeover</span>
                </li>
                <li className="tw-flex tw-items-start tw-gap-3">
                  <span className="tw-text-[#c1fc75] tw-font-bold tw-text-xl tw-flex-shrink-0 tw-mt-1">
                    •
                  </span>
                  <span>
                    To ensure clients benefit through reliable, compliant, and
                    efficient FM operations
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="tw-w-full tw-py-16 tw-px-[5%] dark:tw-bg-black">
        <div className="tw-max-w-[1400px] tw-mx-auto tw-text-center">
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-6">
            Sectors We Serve
          </h2>
          <p className="tw-text-xl tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed">
            Airports, Hospitals, Commercial, Residential, Industrial,
            Educational, and Retail Facilities.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
