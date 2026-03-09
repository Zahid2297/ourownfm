import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import aboutPageImg2 from "../../assets/aboutpageimg2.png";
import aboutPageImg1 from "../../assets/aboutpageimg1.png";
import visionImg from "../../assets/visionimg.png";
import missionImg from "../../assets/missionimg.png";
import "./PixaLandingPage.css";

const FOUR_PILLARS = [
  {
    title: "Technical Competence",
    description:
      "Strong understanding of systems, assets, and operations, enabling confident, independent decision-making and reduced reliance on vendors.",
    icon: "bi-tools",
  },
  {
    title: "Sustainability & ESG",
    description:
      "Responsible FM practices aligned with energy efficiency, statutory compliance, ESG requirements, and long-term asset value.",
    icon: "bi-tree",
  },
  {
    title: "Leadership",
    description:
      "Development of people management, communication, procurement, and commercial awareness—beyond day-to-day operations.",
    icon: "bi-people",
  },
  {
    title: "Accountability",
    description:
      "Clear ownership of safety, performance, handover outcomes, emergency readiness, and client satisfaction.",
    icon: "bi-graph-up",
  },
];

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
          {/* Who We Are */}
          <section
            className="about-who-we-are tw-w-full tw-py-12 tw-px-[5%] dark:tw-bg-black"
            aria-label="Who We Are"
          >
            <div className="tw-max-w-[1200px] tw-mx-auto">
              <h2 className="tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-2 tw-text-center tw-tracking-tight about-who-we-are__heading">
                Who We Are
              </h2>
              <div className="about-who-we-are__inner">
                <div className="about-who-we-are__card tw-w-full tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-overflow-hidden tw-shadow-lg tw-flex tw-flex-row">
                  <div className="about-who-we-are__image tw-w-[38%] tw-min-w-[140px] tw-flex-shrink-0">
                    <img
                      src={aboutPageImg2}
                      alt="FM operations and control room"
                      className="tw-w-full tw-h-full tw-object-cover"
                    />
                  </div>
                  <div className="tw-flex-1 tw-flex tw-flex-col tw-p-6 sm:tw-p-8 tw-min-w-0">
                    <div className="tw-space-y-4 tw-text-base sm:tw-text-lg tw-text-gray-800 dark:tw-text-gray-200 tw-leading-[1.7]">
                      <p>
                        Our Own FM Academy is a professional capability-building
                        platform created to strengthen the Facilities Management
                        industry through structured training, practical
                        exposure, and real-world project guidance. <br></br>
                        <br></br>
                      </p>
                      <p>
                        The Academy is founded and led by Syed Moonis Raza, a
                        Facilities Management professional with over 30 years of
                        hands-on industry experience across complex assets, live
                        operational environments, and large-scale projects in
                        India and the GCC.<br></br>
                        <br></br>
                      </p>
                      <p>
                        Built on real operational realities—not theory alone—Our
                        Own FM Academy addresses the capability gaps that
                        commonly impact safety, performance, handovers, and
                        long-term asset outcomes.<br></br>
                        <br></br>
                      </p>
                      <p className="tw-text-base sm:tw-text-lg tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                        Buildings are strong when their pillars are strong. We
                        aim to make every Facilities Management professional a
                        pillar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Vision & Our Mission */}
          <section
            className="tw-w-full tw-pt-24 tw-pb-16 tw-px-0 tw-mt-8"
            aria-label="Vision and Mission"
          >
            <div className="about-vision-mission-wrap tw-mx-auto tw-w-full tw-max-w-[800px] tw-px-[5%]">
              <div className="about-vision-mission-card tw-w-full tw-max-w-full tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-gray-700 tw-overflow-hidden tw-bg-white dark:tw-bg-[#0c0c0c] tw-p-8 sm:tw-p-10 lg:tw-p-12 tw-shadow-lg">
                <h3 className="tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-0 tw-tracking-tight">
                  Our Vision & Mission
                </h3>
                <div className="tw-mt-8 tw-flex tw-flex-col tw-gap-10 lg:tw-gap-14">
                  <div className="about-vision-mission-block">
                    <div className="about-vision-mission-block__media">
                      <img
                        src={visionImg}
                        alt=""
                        className="about-vision-mission-img"
                        width={400}
                        height={270}
                      />
                    </div>
                    <div className="about-vision-mission-block__content">
                      <h4 className="tw-text-lg tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-2">
                        Our Vision
                      </h4>
                      <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-leading-relaxed tw-mb-0">
                        To contribute to a safer, more capable, and more
                        professional Facilities Management industry <br /> by
                        strengthening the people responsible for operating and
                        protecting built assets.
                      </p>
                    </div>
                  </div>
                  <div className="about-vision-mission-block">
                    <div className="about-vision-mission-block__media">
                      <img
                        src={missionImg}
                        alt=""
                        className="about-vision-mission-img"
                        width={400}
                        height={270}
                      />
                    </div>
                    <div className="about-vision-mission-block__content">
                      <h4 className="tw-text-lg tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-3 tw-mt-0">
                        Our Mission
                      </h4>
                      <ul className="tw-space-y-2 tw-text-gray-700 dark:tw-text-gray-300 tw-leading-relaxed tw-list-disc tw-pl-5">
                        <li>
                          To develop FM professionals from{" "}
                          <strong className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                            basics to leadership
                          </strong>
                        </li>
                        <li>
                          To reduce dependency on vendors through strong
                          in-house capability
                        </li>
                        <li>
                          To promote zero incidents, zero accidents, and high
                          emergency readiness
                        </li>
                        <li>To enable smooth project handover and takeover</li>
                        <li>
                          To ensure clients benefit through reliable, compliant,
                          and efficient FM operations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Foundation: The Four Pillars of FM Professionalism – single card with image */}
          <section
            className="about-four-pillars-section tw-w-full tw-pt-20 tw-pb-12 tw-px-[5%] dark:tw-bg-black"
            aria-label="Our Foundation: The Four Pillars of FM Professionalism"
          >
            <div className="about-four-pillars-wrap tw-max-w-[960px] tw-mx-auto">
              <div className="about-four-pillars-header tw-flex tw-flex-col tw-gap-6 tw-mb-10">
                <h2 className="tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-tracking-tight tw-text-center">
                  Our Foundation: The Four Pillars of FM Professionalism
                </h2>
              </div>
              <div className="about-four-pillars-single-card tw-w-full tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-overflow-hidden tw-shadow-lg tw-flex tw-flex-col md:tw-flex-row">
                <div className="about-four-pillars-single-card__image tw-w-full md:tw-w-[42%] tw-min-h-[220px] md:tw-min-h-0 tw-flex-shrink-0">
                  <img
                    src={aboutPageImg1}
                    alt="Collaborative planning and blueprint review"
                    className="tw-w-full tw-h-full tw-object-cover"
                  />
                </div>
                <div className="tw-flex-1 tw-p-6 sm:tw-p-8 tw-min-w-0">
                  <p className="about-four-pillars-subtitle tw-text-base tw-mb-6 tw-leading-relaxed pl-12">
                    The foundation of our training, consultancy, and project
                    guidance
                  </p>
                  <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4">
                    {FOUR_PILLARS.map((pillar, index) => (
                      <div
                        key={index}
                        className="pillar-sub-card tw-flex tw-gap-4 tw-p-4 tw-rounded-xl tw-border tw-border-gray-200/80 dark:tw-border-[#1f2123] tw-bg-white/70 dark:tw-bg-[#0a0a0a] tw-shadow-sm hover:tw-shadow-md tw-transition-shadow tw-duration-200"
                      >
                        <div className="pillar-sub-card__icon tw-flex tw-shrink-0 tw-w-12 tw-h-12 tw-rounded-lg tw-items-center tw-justify-center tw-bg-[#19300e]/10 dark:tw-bg-[#c1fc75]/15 tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                          <i className={`bi ${pillar.icon} tw-text-2xl`}></i>
                        </div>
                        <div className="tw-min-w-0 tw-flex-1">
                          <h3 className="tw-text-base tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-2 tw-tracking-tight">
                            {pillar.title}
                          </h3>
                          <p className="tw-text-xs tw-leading-relaxed tw-text-gray-700 dark:tw-text-gray-300">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="tw-w-full tw-py-16 tw-px-[5%] dark:tw-bg-black">
            <div className="tw-max-w-[1400px] tw-mx-auto">
              <h2 className="about-ceo-title tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-12 tw-text-center tw-tracking-tight">
                Message from the CEO & Founder
              </h2>
              <div className="about-ceo-card tw-relative tw-mt-10 tw-w-full tw-rounded-2xl tw-overflow-hidden tw-border tw-border-gray-200 tw-p-8 sm:tw-p-10 lg:tw-p-12">
                <div className="about-ceo-card-inner tw-flex tw-flex-row tw-gap-6 sm:tw-gap-10 tw-items-stretch">
                  <div className="tw-w-1/2 tw-min-w-0 tw-space-y-5 tw-text-lg sm:tw-text-xl tw-text-gray-800 tw-leading-[1.7] about-ceo-card__text tw-pr-2 sm:tw-pr-6">
                    <p>
                      Facilities Management is now a business-critical
                      discipline, powered by digital FM, automation, and data
                      driven decision-making. <br></br>
                      <br></br>
                    </p>
                    <p>
                      As buildings become smarter and more complex, FM
                      professionals are expected to manage <br></br> advanced
                      MEP systems, CAFM platforms, and sustainability and ESG
                      requirements <br></br> often in live, high-risk
                      environments.
                      <br></br>
                      <br></br>
                    </p>
                    <p>
                      Yet many challenges persist: unclear handovers, inadequate
                      technical training, heavy vendor <br></br> dependency, and
                      avoidable incidents. These are not failures of effort, but{" "}
                      <strong className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                        gaps in capability.
                      </strong>
                      <br></br>
                      <br></br>
                    </p>
                    <p className="tw-text-xl sm:tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                      Our Own FM Academy exists to close those gaps. <br></br>
                      <br></br>
                    </p>
                    <p>
                      We develop FM professionals who are{" "}
                      <strong className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                        technically strong, safety-driven, digitally aware, and{" "}
                        <br></br>
                        operationally independent
                      </strong>{" "}
                      — capable of taking informed decisions, managing
                      specialists, negotiating <br></br> with confidence, and
                      leading operations responsibly. <br></br>
                      <br></br>
                    </p>
                    <p>
                      Stronger FM capability results in safer operations,
                      smoother handovers, effective use of technology, <br></br>{" "}
                      and consistent value for clients. <br></br>
                      <br></br>
                    </p>
                    <p>
                      This Academy is our contribution to building a safer, more
                      competent, and future-ready
                      <strong className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                        Facilities Management profession
                      </strong>
                      . Training builds people. Consultancy strengthens live
                      operations. <br></br> Project Guidance protects future
                      performance.
                    </p>

                    <div className="about-ceo-signature tw-mt-8 tw-pt-6 tw-border-t tw-border-gray-100 dark:tw-border-gray-600">
                      <p className="tw-text-xl sm:tw-text-2xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-tracking-tight">
                        Syed Moonis Raza
                      </p>
                      <p className="tw-text-lg sm:tw-text-xl tw-text-gray-600 dark:tw-text-gray-400 tw-mt-1">
                        CEO & Founder
                      </p>
                      <p className="tw-text-lg sm:tw-text-xl tw-text-gray-600 dark:tw-text-gray-400">
                        Our Own FM Academy
                      </p>
                    </div>
                  </div>
                  <div className="about-ceo-card__image-col tw-w-1/2 tw-min-w-0 tw-flex tw-items-center tw-justify-end tw-pl-2 sm:tw-pl-6">
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
