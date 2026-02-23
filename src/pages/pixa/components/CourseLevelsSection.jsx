import level1Img from "../../../assets/level1.jpeg";
import level2Img from "../../../assets/level2.png";
import level3Img from "../../../assets/level3.webp";
import level4Img from "../../../assets/level4.png";
import level5Img from "../../../assets/level5.jpeg";
import level6Img from "../../../assets/level6.avif";
import level7Img from "../../../assets/level7.webp";

const levelImages = [
  level1Img,
  level2Img,
  level3Img,
  level4Img,
  level5Img,
  level6Img,
  level7Img,
];

const courseLevels = [
  {
    level: 1,
    title: "FM Operational Foundations",
    focus: "Introduction to structured FM operations and system awareness.",
    eligibility: [
      "Entry-level FM professionals",
      "Technicians / Supervisors",
      "0-3 years experience",
    ],
    outcomeLabel: "Understanding of:",
    outcomeItems: [
      "Asset systems",
      "Work order processes",
      "Preventive maintenance",
    ],
    fee: "AED 500",
    progression: "Eligible for Level 2",
  },
  {
    level: 2,
    title: "FM Service Delivery Coordination",
    focus: "Coordination between technical teams, vendors, and helpdesk.",
    eligibility: ["FM Executives", "Site Coordinators", "2-5 years experience"],
    outcomeLabel: "Ability to:",
    outcomeItems: [
      "Support SLA delivery",
      "Coordinate service requests",
      "Track vendor interventions",
    ],
    fee: "AED 800",
    progression: "Eligible for Level 3",
  },
  {
    level: 3,
    title: "Asset Performance Monitoring",
    focus: "Preventive planning and operational data interpretation.",
    eligibility: ["Supervisors", "Planning Engineers", "3-6 years experience"],
    outcomeLabel: "Capability to:",
    outcomeItems: [
      "Monitor utilities",
      "Analyse breakdown trends",
      "Support CAFM workflows",
    ],
    fee: "AED 1,200",
    progression: "Eligible for Level 4",
  },
  {
    level: 4,
    title: "Mobilisation & Transition Readiness",
    focus: "FM involvement during project handover and GO-LIVE.",
    eligibility: ["Engineers", "Team Leads", "5-8 years experience"],
    outcomeLabel: "Support:",
    outcomeItems: [
      "Asset takeover",
      "Documentation alignment",
      "Transition governance",
    ],
    fee: "AED 1,800",
    progression: "Eligible for Level 5",
  },
  {
    level: 5,
    title: "Infrastructure & Utilities Management",
    focus: "External systems and underground network awareness.",
    eligibility: ["FM Managers", "Operations Leads", "6-10 years experience"],
    outcomeLabel: "Manage:",
    outcomeItems: [
      "Fire water",
      "Drainage",
      "Irrigation",
      "Electrical infrastructure",
    ],
    fee: "AED 2,500",
    progression: "Eligible for Level 6",
  },
  {
    level: 6,
    title: "FM Risk & Performance Governance",
    focus: "Contractual accountability and SLA/KPI readiness.",
    eligibility: [
      "Senior Engineers",
      "Assistant FM Managers",
      "8-12 years experience",
    ],
    outcomeLabel: "Align:",
    outcomeItems: [
      "Performance targets",
      "Compliance frameworks",
      "Operational risk controls",
    ],
    fee: "AED 3,500",
    progression: "Eligible for Level 7",
  },
  {
    level: 7,
    title: "FM Leadership Foundations",
    focus: "Operational decision-making and service accountability.",
    eligibility: ["FM Managers", "Site Heads", "10+ years experience"],
    outcomeLabel: "Lead:",
    outcomeItems: [
      "Mobilisation planning",
      "Performance governance",
      "Team accountability",
    ],
    fee: "AED 5,000",
    certification:
      "Participants completing each level will receive Our Own FM Academy Certification.",
  },
];

const CourseLevelsSection = () => {
  return (
    <section
      id="course-levels"
      className="course-levels-section tw-w-full tw-max-w-[1200px] tw-mx-auto tw-px-4 tw-pb-16"
    >
      {/* Fee-structure-style container */}
      <div className="course-levels-container tw-rounded-xl tw-border tw-border-gray-200 tw-bg-white tw-p-6 sm:tw-p-8">
        {/* Academy header – like Fee Structure heading */}
        <div className="course-levels-header tw-mb-8 tw-pb-5 tw-border-b tw-border-gray-200">
          <h1 className="course-levels-title tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-[#19300e] tw-mb-1 tw-flex tw-items-center tw-justify-center tw-gap-2">
            <i
              className="bi bi-mortarboard-fill tw-text-[#19300e]"
              aria-hidden
            />
            Our Own FM Academy (Courses)
          </h1>
          <p className="course-levels-subtitle tw-text-lg tw-text-gray-700 tw-text-center tw-mt-1">
            Structured FM Leadership Pathway
          </p>
        </div>

        {/* Level cards – same style as Fee Structure cards */}
        <div className="course-levels-cards">
          {courseLevels.map((course) => (
            <article
              key={course.level}
              className="course-level-card tw-rounded-xl tw-border tw-border-gray-200 tw-bg-gray-50 tw-flex tw-flex-col tw-overflow-hidden"
            >
              {/* Level image */}
              <div className="course-level-card__image" aria-hidden>
                <img
                  src={levelImages[course.level - 1]}
                  alt=""
                  className="course-level-card__img"
                />
              </div>
              <div className="course-level-card__content tw-flex tw-flex-col tw-flex-1">
              <h2 className="course-level-card__title tw-text-lg tw-font-bold tw-text-[#19300e] tw-mb-4">
                {course.level}. {course.title}
              </h2>

              <div className="course-level-card__body tw-space-y-4 tw-text-gray-800 tw-flex-1">
                <div>
                  <p className="course-level-card__label tw-font-semibold tw-text-[#19300e] tw-mb-1">
                    Focus:
                  </p>
                  <p className="tw-text-sm tw-leading-relaxed">
                    {course.focus}
                  </p>
                </div>

                <div>
                  <p className="course-level-card__label tw-font-semibold tw-text-[#19300e] tw-mb-1">
                    Eligibility:
                  </p>
                  <ul className="course-level-list tw-list-none tw-space-y-1 tw-text-sm">
                    {course.eligibility.map((item, i) => (
                      <li key={i} className="tw-flex tw-items-start tw-gap-2">
                        <span className="course-level-bullet tw-text-[#19300e] tw-flex-shrink-0">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="course-level-card__label tw-font-semibold tw-text-[#19300e] tw-mb-1">
                    Outcome:
                  </p>
                  <p className="tw-font-medium tw-mb-1 tw-text-sm">
                    {course.outcomeLabel}
                  </p>
                  <ul className="course-level-list tw-list-none tw-space-y-1 tw-text-sm">
                    {course.outcomeItems.map((item, i) => (
                      <li key={i} className="tw-flex tw-items-start tw-gap-2">
                        <span className="course-level-bullet tw-text-[#19300e] tw-flex-shrink-0">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {course.certification ? (
                  <div>
                    <p className="course-level-card__label tw-font-semibold tw-text-[#19300e] tw-mb-1">
                      Certification:
                    </p>
                    <p className="tw-text-sm tw-leading-relaxed">
                      {course.certification}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="course-level-card__label tw-font-semibold tw-text-[#19300e] tw-mb-1">
                      Progression:
                    </p>
                    <p className="tw-text-sm">{course.progression}</p>
                  </div>
                )}
              </div>

              {/* Fee block – distinct block at bottom like Fee Structure */}
              <div className="course-level-fee-block tw-mt-5 tw-rounded-lg tw-text-center tw-font-medium">
                Fee:{" "}
                <span className="course-level-fee-amount">{course.fee}</span>
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseLevelsSection;
