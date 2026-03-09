import { Link } from "react-router-dom";
import fmCareerLadderImg from "../../../assets/fm_career_ladder_clear.png";

const CoursesSection = () => {
  const courseLevels = [
    {
      level: 1,
      title: "FM Foundations",
      purpose: "Entry into the FM profession",
      description:
        "Learners gain a strong understanding of Facilities Management as a discipline, including FM roles, asset lifecycle concepts, and an overview of building services.",
      highlight: "Ideal for students, freshers, and career switchers.",
    },
    {
      level: 2,
      title: "Technical Basics (MEP Basics)",
      purpose: "Build core technical literacy",
      description:
        "Covers fundamentals of HVAC, Electrical, Plumbing, and Fire Fighting systems, with a focus on system functionality and preventive maintenance basics.",
      highlight: "Creates technical confidence for site exposure.",
    },
    {
      level: 3,
      title: "Hard & Soft FM Operations",
      purpose: "Operational readiness",
      description:
        "Focuses on day-to-day FM operations, supervision, service delivery, vendor coordination, SOP implementation, and operational reporting.",
      highlight: "Prepares learners for supervisory and site-based FM roles.",
    },
    {
      level: 4,
      title: "Advanced Systems & Digital FM",
      purpose: "Engineering & systems thinking",
      description:
        "Introduces FM engineering perspective, MEP design review from a maintainability lens, BMS, CAFM, and digital FM tools.",
      highlight: "Bridges operations with engineering and technology.",
    },
    {
      level: 5,
      title: "FM Operations, HSE, Compliance, ESG & Sustainability",
      purpose: "Risk, responsibility, and sustainability owners",
      description:
        "Covers statutory compliance, safety management, HSE systems, ESG frameworks, energy efficiency, and sustainability practices.",
      highlight: "Builds compliance-led, future-ready FM professionals.",
    },
    {
      level: 6,
      title: "FM Strategy & Commercial Management",
      purpose: "Managerial and commercial capability",
      description:
        "Focuses on contracts, budgeting, client management, M. projects, construction coordination, commissioning, and handover processes.",
      highlight: "Prepares professionals for managerial and regional roles.",
    },
    {
      level: 7,
      title: "FM Leadership & International Standards",
      purpose: "Leadership excellence and global alignment",
      description:
        "Strategic FM leadership development with CFM® (IFMA) and LEED® exam preparation, delivered in collaboration with AMPM Learning.",
      highlight:
        "Designed for senior leaders, heads of facilities, and FM directors.",
    },
  ];

  return (
    <section
      className="tw-mt-5 tw-flex tw-w-full tw-flex-col tw-gap-6 tw-place-items-center tw-p-[2%]"
      id="courses"
    >
      <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-2xl tw-text-[#19300e] dark:tw-text-[#c1fc75]">
        Courses
      </h3>
      <p className="reveal-up tw-text-lg tw-text-gray-700 dark:tw-text-gray-300 tw-text-center tw-max-w-[700px] tw-mt-2">
        Comprehensive FM learning pathways from foundations to leadership
      </p>
      <div className="tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-8 max-lg:tw-flex-col tw-w-full tw-max-w-[1400px]">
        {courseLevels.map((course, index) => (
          <div
            key={index}
            className="reveal-up tw-flex tw-w-full max-lg:tw-w-full lg:tw-w-[600px] tw-flex-col tw-place-items-start tw-gap-3 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-6 tw-shadow-xl"
          >
            <div className="tw-flex tw-items-start tw-gap-4 tw-w-full">
              <div className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-rounded-full tw-bg-[#19300e] dark:tw-bg-[#c1fc75] tw-flex tw-items-center tw-justify-center">
                <span className="tw-text-white dark:tw-text-[#19300e] tw-font-bold tw-text-xl">
                  {course.level}
                </span>
              </div>
              <div className="tw-flex-1">
                <h3 className="tw-text-2xl tw-font-semibold tw-mb-2 tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                  Level {course.level} - {course.title}
                </h3>
                <p className="tw-text-sm tw-font-medium tw-text-gray-600 dark:tw-text-gray-400 tw-mb-3">
                  Purpose: {course.purpose}
                </p>
                <p className="tw-text-base tw-text-gray-800 dark:tw-text-gray-200 tw-mb-3 tw-leading-relaxed">
                  {course.description}
                </p>
                <div className="tw-mt-2">
                  <Link
                    to="/courses"
                    className="know-more-btn tw-text-sm tw-font-medium tw-cursor-pointer tw-flex tw-items-center tw-gap-1 hover:tw-underline tw-no-underline tw-text-gray-800 dark:tw-text-gray-200"
                  >
                    Know more
                    <i className="bi bi-chevron-right tw-text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* All Levels Combined Info – box style like Fee Structure */}
        <div className="pathway-card tw-mt-6 tw-w-full tw-max-w-[1100px] tw-mx-auto">
          <div className="reveal-up tw-w-full tw-rounded-xl tw-border tw-border-[#19300e]/20 dark:tw-border-[#c1fc75]/20 tw-bg-white dark:tw-bg-black tw-p-8 tw-shadow-xl tw-relative">
            {/* Top accent line */}
            <div className="pathway-card__accent" aria-hidden="true" />

            <div className="pathway-card__header tw-text-center tw-mb-6 tw-pb-5 tw-border-b tw-border-gray-200 dark:tw-border-[#c1fc75]/20">
              <div className="tw-inline-block tw-px-4 tw-py-2 tw-bg-[#19300e] dark:tw-bg-[#c1fc75] tw-text-white dark:tw-text-[#19300e] tw-text-sm tw-font-bold tw-rounded-full tw-mb-4">
                BEST VALUE
              </div>
              <h3 className="pathway-card__title tw-text-4xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                Complete FM Learning Pathway (All 7 Levels)
              </h3>
              <p className="tw-text-xl tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed tw-max-w-3xl tw-mx-auto">
                Master all 7 levels from foundations to leadership. Get
                comprehensive training, mentorship, and certification
                preparation in one complete package.
              </p>
            </div>

            <div className="pathway-card__grid tw-mt-6 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 md:tw-gap-10 tw-items-start">
              {/* Left: levels list, value row, button (50%) */}
              <div className="tw-min-w-0 tw-order-1">
                <div className="tw-grid tw-grid-cols-1 tw-gap-4">
                  {courseLevels.map((course, idx) => (
                    <div
                      key={idx}
                      className="tw-flex tw-items-start tw-gap-3 tw-p-3 tw-rounded-lg tw-bg-white/50 dark:tw-bg-[#080808]/50 tw-backdrop-blur-sm"
                    >
                      <span className="bullet-icon tw-text-[#c1fc75] tw-font-bold tw-text-lg tw-flex-shrink-0 tw-mt-0.5">
                        •
                      </span>
                      <div className="tw-flex-1">
                        <p className="tw-text-gray-800 dark:tw-text-gray-200 tw-font-semibold tw-mb-1">
                          Level {course.level}: {course.title}
                        </p>
                        <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">
                          {course.purpose}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pathway-value-row tw-mt-8 tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-6 tw-flex-wrap">
                  <div className="tw-text-center">
                    <p className="value-heading tw-text-2xl tw-font-bold">
                      All 7 Levels
                    </p>
                    <p className="pathway-text tw-text-sm">Complete Pathway</p>
                  </div>
                  <div className="tw-h-12 tw-w-px tw-bg-gray-300 dark:tw-bg-gray-600 pathway-value-row__divider"></div>
                  <div className="tw-text-center">
                    <p className="value-heading tw-text-2xl tw-font-bold">
                      Save More
                    </p>
                    <p className="pathway-text tw-text-sm">Bundle Discount</p>
                  </div>
                  <div className="tw-h-12 tw-w-px tw-bg-gray-300 dark:tw-bg-gray-600 pathway-value-row__divider"></div>
                  <div className="tw-text-center">
                    <p className="value-heading tw-text-2xl tw-font-bold">
                      Lifetime Access
                    </p>
                    <p className="pathway-text tw-text-sm">Learn at Your Pace</p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="btn tw-mt-8 tw-w-full md:tw-w-auto tw-mx-auto tw-block tw-text-center tw-text-lg tw-px-8 tw-py-4 tw-font-bold tw-shadow-lg hover:tw-shadow-xl tw-transition-all"
                >
                  Enroll in Complete Pathway
                </a>
              </div>

              {/* Right: FM Career Ladder image – equal column (50%), smaller height, full width */}
              <div className="tw-min-w-0 tw-flex tw-justify-center tw-items-start tw-w-full tw-order-2">
                <img
                  src={fmCareerLadderImg}
                  alt="FM Career Ladder - From Foundation to Leadership"
                  className="pathway-career-ladder-img tw-w-full tw-h-auto tw-object-contain tw-max-h-[380px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
