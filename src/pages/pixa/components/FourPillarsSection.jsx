const FourPillarsSection = () => {
  const pillars = [
    {
      title: "Technicality",
      description: "Provide industry-relevant technical skills, practical site learning, and digital FM integration.",
      icon: "bi-tools",
    },
    {
      title: "Sustainability",
      description: "Embed energy efficiency, ESG compliance, green building standards, and resource optimisation into every FM function.",
      icon: "bi-leaf",
    },
    {
      title: "Leadership",
      description: "Develop FM leaders who can manage people, systems, and operations with confidence, empathy, and strategic clarity.",
      icon: "bi-people",
    },
    {
      title: "Accountability",
      description: "Promote responsible, transparent, and measurable FM practices driven by data and performance KPIs.",
      icon: "bi-graph-up",
    },
  ];

  return (
    <section className="tw-relative tw-flex tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-py-20 tw-px-8">
      <div className="tw-w-full tw-max-w-[1200px] tw-flex tw-flex-col tw-place-items-center tw-gap-16 tw-px-4">
        <div className="reveal-up tw-flex tw-flex-col tw-gap-6 tw-text-center tw-mb-8">
          <h2 className="tw-text-6xl tw-font-semibold max-md:tw-text-4xl tw-uppercase tw-mb-4">
            Our Four Pillars
          </h2>
          <p className="tw-text-lg tw-text-gray-700 dark:tw-text-gray-300 tw-max-w-[700px] tw-mx-auto tw-px-4">
            The foundation of our training, consultancy, and project guidance
          </p>
        </div>
        <div className="tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8 tw-place-content-center tw-px-2">
          {pillars.map((pillar, index) => (
            <div key={index} className="reveal-up tw-flex">
              <div className="tw-relative tw-p-8 tw-transition-all tw-duration-300 tw-group/card tw-gap-6 tw-flex tw-flex-col tw-w-full tw-min-h-[350px] tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-3xl hover:tw-scale-[1.02] tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]">
                <div className="tw-text-6xl tw-text-gray-800 dark:tw-text-gray-200">
                  <i className={`bi ${pillar.icon}`}></i>
                </div>
                <h3 className="tw-text-2xl tw-font-semibold">
                  {pillar.title}
                </h3>
                <p className="tw-text-base tw-leading-relaxed tw-text-gray-700 dark:tw-text-gray-300 tw-mt-auto">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillarsSection;

