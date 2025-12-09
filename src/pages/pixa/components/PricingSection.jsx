const PricingSection = () => {
  const trainingModules = [
    {
      title: "FM Fundamentals & Technical Operations",
      duration: "20 hours",
      price: "₹12,000",
      certification: "FM Operations Certificate",
      description: "Hard FM, Soft FM, Asset types, Maintenance strategies",
      highlighted: false,
    },
    {
      title: "Digital FM: CAFM, IoT, BMS, BIM, Digital Twins",
      duration: "25 hours",
      price: "₹18,000",
      certification: "Digital FM Specialist",
      description: "Data-driven FM, mobile audits, dashboards",
      highlighted: false,
    },
    {
      title: "Health, Safety, Risk & Compliance",
      duration: "15 hours",
      price: "₹10,000",
      certification: "HSE Compliance Certificate",
      description: "Statutory Acts, audit templates, RCA",
      highlighted: false,
    },
    {
      title: "Leadership & People Management in FM",
      duration: "15 hours",
      price: "₹10,000",
      certification: "FM Leadership Certificate",
      description: "HR basics, soft skills, performance",
      highlighted: false,
    },
    {
      title: "Sustainability & ESG for FM",
      duration: "20 hours",
      price: "₹15,000",
      certification: "Sustainability Practitioner",
      description: "Energy audits, Net Zero, LEED",
      highlighted: false,
    },
    {
      title: "Facility Budgeting, P&L & Cost Optimization",
      duration: "15 hours",
      price: "₹12,000",
      certification: "FM Finance Essentials",
      description: "ROI models, budgeting, procurement",
      highlighted: false,
    },
  ];

  return (
    <section
      className="tw-mt-5 tw-flex tw-w-full tw-flex-col tw-gap-6 tw-place-items-center tw-p-[2%]"
      id="training"
    >
      <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-2xl tw-text-[#19300e] dark:tw-text-[#c1fc75]">
        Training Programs
      </h3>
      <p className="reveal-up tw-text-lg tw-text-gray-700 dark:tw-text-gray-300 tw-text-center tw-max-w-[700px] tw-mt-2">
        Each module includes classroom learning, case studies, site visits,
        hands-on tools, live dashboards, and project-based assignments.
      </p>
      <div className="tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-8 max-lg:tw-flex-col">
        {trainingModules.map((module, index) => (
          <div
            key={index}
            className={`reveal-up tw-flex tw-w-[350px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-8 tw-shadow-xl max-lg:tw-w-[320px] ${
              module.highlighted ? "tw-border-2 dark:tw-border-[#595858]" : ""
            }`}
          >
            <h3 className="tw-text-xl tw-font-semibold tw-text-center tw-mb-2 tw-text-[#19300e] dark:tw-text-[#c1fc75]">
              {module.title}
            </h3>
            <div className="tw-flex tw-gap-2 tw-items-center tw-mb-2">
              <span className="tw-text-3xl max-md:tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-white">
                {module.price}
              </span>
            </div>
            <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400 tw-mb-2">
              Duration: {module.duration}
            </p>
            <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400 tw-mb-4">
              Certification: {module.certification}
            </p>
            <hr className="tw-w-full" />
            <p className="tw-mt-4 tw-text-center tw-text-gray-800 dark:tw-text-gray-200 tw-text-sm">
              {module.description}
            </p>
            <a
              href="#contact"
              className={`btn tw-mt-auto !tw-w-full tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.02] ${
                module.highlighted
                  ? ""
                  : "!tw-bg-transparent !tw-border-[1px]"
              }`}
            >
              Enroll Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
