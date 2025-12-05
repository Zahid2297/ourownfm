const TrainingProgramsSection = () => {
  const programs = [
    {
      module: "FM Fundamentals & Technical Operations",
      duration: "20 hours",
      contents: "Hard FM, Soft FM, Asset types, Maintenance strategies",
      certification: "FM Operations Certificate",
      fees: "₹12,000",
    },
    {
      module: "Digital FM: CAFM, IoT, BMS, BIM, Digital Twins",
      duration: "25 hours",
      contents: "Data-driven FM, mobile audits, dashboards",
      certification: "Digital FM Specialist",
      fees: "₹18,000",
    },
    {
      module: "Health, Safety, Risk & Compliance",
      duration: "15 hours",
      contents: "Statutory Acts, audit templates, RCA",
      certification: "HSE Compliance Certificate",
      fees: "₹10,000",
    },
    {
      module: "Leadership & People Management in FM",
      duration: "15 hours",
      contents: "HR basics, soft skills, performance",
      certification: "FM Leadership Certificate",
      fees: "₹10,000",
    },
    {
      module: "Sustainability & ESG for FM",
      duration: "20 hours",
      contents: "Energy audits, Net Zero, LEED",
      certification: "Sustainability Practitioner",
      fees: "₹15,000",
    },
    {
      module: "Facility Budgeting, P&L & Cost Optimization",
      duration: "15 hours",
      contents: "ROI models, budgeting, procurement",
      certification: "FM Finance Essentials",
      fees: "₹12,000",
    },
  ];

  return (
    <section
      id="training"
      className="tw-relative tw-flex tw-w-full tw-min-h-[100vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-py-20 tw-px-8"
    >
      <div className="tw-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[1200px] tw-gap-16 tw-px-4">
        <div className="reveal-up tw-text-center tw-mb-12">
          <h2 className="tw-text-6xl max-lg:tw-text-4xl tw-leading-normal tw-uppercase tw-font-semibold tw-mb-8">
            Training Programs
          </h2>
          <p className="tw-text-lg tw-text-center tw-text-gray-700 dark:tw-text-gray-300 tw-max-w-[800px] tw-mx-auto tw-px-4">
            Each module includes classroom learning, case studies, site visits,
            hands-on tools, live dashboards, and project-based assignments.
          </p>
        </div>

        <div className="reveal-up tw-w-full tw-mt-4 tw-px-2">
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="tw-p-8 tw-bg-gradient-to-br tw-from-white tw-to-gray-100 dark:tw-from-black dark:tw-to-gray-900 tw-rounded-xl tw-transition-all tw-duration-300 hover:tw-scale-[1.02] tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123] tw-flex tw-flex-col"
              >
                <h3 className="tw-text-xl tw-font-semibold tw-mb-4 tw-text-gray-900 dark:tw-text-white">
                  {program.module}
                </h3>
                <div className="tw-flex tw-flex-col tw-gap-3 tw-flex-grow">
                  <div>
                    <div className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400 tw-mb-1">
                      Duration
                    </div>
                    <div className="tw-text-gray-900 dark:tw-text-white">
                      {program.duration}
                    </div>
                  </div>
                  <div>
                    <div className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400 tw-mb-1">
                      Key Contents
                    </div>
                    <div className="tw-text-sm tw-text-gray-700 dark:tw-text-gray-300">
                      {program.contents}
                    </div>
                  </div>
                  <div>
                    <div className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400 tw-mb-1">
                      Certification
                    </div>
                    <div className="tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">
                      {program.certification}
                    </div>
                  </div>
                  <div className="tw-mt-auto tw-pt-4">
                    <div className="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white tw-mb-4">
                      {program.fees}
                    </div>
                    <button className="tw-w-full tw-py-2 tw-px-4 tw-border tw-border-white dark:tw-border-gray-700 tw-text-white tw-rounded-lg tw-transition-all tw-duration-300 hover:tw-bg-white hover:tw-text-black dark:hover:tw-bg-gray-800">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-up tw-mt-12 tw-text-center tw-p-8 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-2xl tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]">
          <p className="tw-text-xl tw-font-semibold tw-text-gray-900 dark:tw-text-white tw-mb-2">
            IFMA FMP / CFM Preparation Courses
          </p>
          <p className="tw-text-gray-600 dark:tw-text-gray-400">
            Includes study material + practice exams + guidance
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingProgramsSection;
