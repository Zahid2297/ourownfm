const AdditionalFeaturesSection = () => {
  const whyChooseUs = [
    {
      icon: "bi-graph-up-arrow",
      title: "High-Demand Industry",
      description:
        "FM is one of the fastest-growing sectors across India and the GCC, offering strong job stability and continuous opportunities for skilled professionals.",
    },
    {
      icon: "bi-cpu",
      title: "Digital Transformation in FM",
      description:
        "Smart buildings, IoT systems, and CAFM platforms are reshaping FM creating high-value career paths for digitally capable professionals.",
    },
    {
      icon: "bi-signpost-split",
      title: "Diverse Career Pathways",
      description:
        "FM spans operations, maintenance, health & safety, sustainability, energy management, soft services, and more providing multiple avenues for career growth.",
    },
    {
      icon: "bi-globe",
      title: "Global & GCC Career Mobility",
      description:
        "FM professionals are in high demand across GCC countries, opening doors for international career opportunities and competitive compensation.",
    },
    {
      icon: "bi-graph-up",
      title: "Career Growth & Leadership Roles",
      description:
        "FM offers structured progression from technician to supervisor, engineer, manager, and director making it ideal for long-term career development.",
    },
    {
      icon: "bi-tree",
      title: "Contribution to Smart Cities & Sustainability",
      description:
        "FM plays a critical role in energy efficiency, green buildings, and sustainable operations making it a career with purpose and future relevance.",
    },
  ];

  return (
    <section className="tw-relative tw-flex tw-w-full tw-min-h-[110vh] max-md:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">
      <div className="tw-w-full max-lg:tw-max-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">
        <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal tw-text-[#19300e] dark:tw-text-[#c1fc75]">
          Why FM is a career opportunity
        </h3>

        <div className="tw-mt-8 tw-relative tw-gap-10 tw-p-4 tw-grid tw-place-items-center tw-grid-cols-3 max-lg:tw-flex max-lg:tw-flex-col">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="reveal-up tw-w-full tw-border-[1px] tw-min-h-[400px] tw-rounded-md tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3"
            >
              <div className="tw-w-full tw-h-[150px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center tw-items-center">
                <i
                  className={`bi ${item.icon} tw-text-6xl tw-text-gray-800 dark:tw-text-gray-200`}
                ></i>
              </div>
              <h3 className="tw-text-2xl tw-text-center tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                {item.title}
              </h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeaturesSection;
