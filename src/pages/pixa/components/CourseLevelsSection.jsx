import { Link } from "react-router-dom";
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
    title: "FM Operational Foundations (Level 1)",
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
    title: "FM Service Delivery Coordination (Level 2)",
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
    title: "Asset Performance Monitoring (Level 3)",
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
    title: "Mobilisation & Transition Readiness (Level 4)",
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
    title: "Infrastructure & Utilities Management (Level 5)",
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
    title: "FM Risk & Performance Governance (Level 6)",
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
    title: "FM Leadership Foundations (Level 7)",
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
            Our Own FM Academy (Training Courses)
          </h1>
          <p className="course-levels-subtitle tw-text-lg tw-text-gray-700 tw-text-center tw-mt-1">
            Structured FM Leadership Pathway
          </p>
        </div>

        {/* Level cards – same style as Fee Structure cards */}
        <div className="course-levels-cards">
          {courseLevels.map((course) => (
            <Link
              key={course.level}
              to={{ pathname: "/", hash: "contact" }}
              className="course-level-card-link tw-block tw-no-underline tw-text-inherit tw-cursor-pointer"
            >
            <article
              className="course-level-card tw-flex tw-flex-col tw-overflow-hidden"
            >
              {/* Image with level badge */}
              <div className="course-level-card__image" aria-hidden>
                <img
                  src={levelImages[course.level - 1]}
                  alt=""
                  className="course-level-card__img"
                />
                <span className="course-level-card__badge">
                  Level {course.level}
                </span>
              </div>

              <div className="course-level-card__content tw-flex tw-flex-col tw-flex-1">
                <h2 className="course-level-card__title">{course.title}</h2>

                <div className="course-level-card__body tw-flex-1">
                  <div className="course-level-card__block">
                    <p className="course-level-card__label">Focus</p>
                    <p className="course-level-card__text">{course.focus}</p>
                  </div>

                  <div className="course-level-card__block">
                    <p className="course-level-card__label">Eligibility</p>
                    <ul className="course-level-list">
                      {course.eligibility.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="course-level-card__block">
                    <p className="course-level-card__label">Outcome</p>
                    <p className="course-level-card__sublabel">
                      {course.outcomeLabel}
                    </p>
                    <ul className="course-level-list">
                      {course.outcomeItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="course-level-card__block">
                    {course.certification ? (
                      <>
                        <p className="course-level-card__label">
                          Certification
                        </p>
                        <p className="course-level-card__text">
                          {course.certification}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="course-level-card__label">Progression</p>
                        <p className="course-level-card__text">
                          {course.progression}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="course-level-fee-block">
                  <span className="course-level-fee-block__label">Fee</span>
                  <span className="course-level-fee-amount">{course.fee}</span>
                </div>
              </div>
            </article>
            </Link>
          ))}

          {/* Full FM Leadership Pathway (All 7 Levels) card */}
          <article className="course-level-card course-level-card--full-pathway tw-flex tw-flex-col">
            <div className="course-level-card__content tw-flex tw-flex-col tw-flex-1 tw-w-full">
              <h2 className="course-level-card__title">
                Full FM Leadership Pathway (All 7 Levels)
              </h2>
              <p className="course-level-card__intro">
                Participants may choose to enrol in the complete 7-Level FM
                Leadership Pathway, covering operational foundations through to
                leadership readiness across asset lifecycle environments.
              </p>

              <div className="course-level-card__body tw-flex-1">
                <div className="course-level-card__block">
                  <p className="course-level-card__label">Includes</p>
                  <ul className="course-level-list">
                    {[
                      "All 7 Learning Levels",
                      "Structured progression",
                      "Infrastructure & mobilisation awareness",
                      "SLA / KPI governance",
                      "Leadership decision-making scenarios",
                    ].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="course-level-card__block">
                  <p className="course-level-card__label">Fees</p>
                  <div className="course-pathway-fees">
                    <p className="course-pathway-fee-row">
                      <span className="course-pathway-fee-label">
                        Total Individual Fee
                      </span>
                      <span className="course-pathway-fee-value">
                        AED 15,300
                      </span>
                    </p>
                    <p className="course-pathway-fee-row course-pathway-fee-row--highlight">
                      <span className="course-pathway-fee-label">
                        Full Pathway Package Fee
                      </span>
                      <span className="course-level-fee-amount">
                        AED 12,000
                      </span>
                    </p>
                    <span className="course-pathway-fee-note">
                      (Special bundled enrolment)
                    </span>
                  </div>
                </div>

                <div className="course-level-card__block">
                  <p className="course-level-card__label">Eligibility</p>
                  <p className="course-level-card__text">
                    Minimum 3+ years FM experience recommended.
                  </p>
                </div>

                <div className="course-level-card__block">
                  <p className="course-level-card__label">Duration</p>
                  <p className="course-level-card__text">
                    Delivered in progressive modules over scheduled cohorts.
                  </p>
                </div>

                <div className="course-level-card__block">
                  <p className="course-level-card__label">Completion</p>
                  <p className="course-level-card__text">
                    <strong>
                      FM Leadership Pathway Completion Certificate
                    </strong>
                    <span className="tw-block tw-mt-1"> from </span>
                    <strong className="course-pathway-academy">
                      Our Own FM Academy
                    </strong>
                  </p>
                </div>
              </div>

              <Link
                to={{ pathname: "/", hash: "contact" }}
                className="course-pathway-enroll-btn"
              >
                Enroll in Complete Pathway
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CourseLevelsSection;
