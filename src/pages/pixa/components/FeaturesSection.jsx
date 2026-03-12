const FeaturesSection = () => {
  const pillars = [
    {
      title: "Technicality",
      description:
        "Deliver technically sound, site-ready FM solutions built on real operational understanding.",
      icon: "bi-tools",
    },
    {
      title: "Sustainability",
      description:
        "Embed energy-efficient, compliant, and future-ready practices into FM operations and projects.",
      icon: "bi-tree",
    },
    {
      title: "Leadership",
      description:
        "Enable confident FM leadership for effective decision-making, coordination, and control.",
      icon: "bi-people",
    },
    {
      title: "Accountability",
      description:
        "Ensure clear ownership, transparent processes, and measurable performance outcomes.",
      icon: "bi-clipboard-check",
    },
  ];

  return (
    <section className="tw-relative tw-flex tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">
      <div className="tw-mt-8 tw-flex tw-flex-col tw-w-full tw-h-full tw-place-items-center tw-gap-5">
        <div className="reveal-up tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center">
          <h2 className="tw-text-6xl tw-font-medium max-md:tw-text-3xl tw-p-2 tw-text-[#19300e] dark:tw-text-[#c1fc75]">
            Our Four Pillars
          </h2>
          <p className="tw-text-lg tw-text-gray-700 dark:tw-text-gray-300 tw-mt-2">
            The foundation of our training and consultancy approach
          </p>
        </div>
        <div className="tw-mt-6 tw-flex tw-flex-col tw-max-w-[1150px] max-lg:tw-max-w-full tw-h-full tw-p-4 max-lg:tw-place-content-center tw-gap-8">
          <div className="max-xl:tw-flex max-xl:tw-flex-col tw-place-items-center tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8 tw-place-content-center tw-auto-rows-auto">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="reveal-up tw-w-full tw-min-h-[300px] tw-flex"
              >
                <div className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex tw-flex-col tw-w-full tw-h-full tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-3xl hover:tw-scale-[1.02]">
                  <div className="tw-w-full tw-flex tw-place-contet-center tw-min-h-[100px] tw-h-[100px] tw-rounded-xl tw-overflow-hidden tw-items-center tw-justify-center">
                    <i
                      className={`bi ${pillar.icon} tw-text-6xl tw-text-gray-800 dark:tw-text-gray-200`}
                    ></i>
                  </div>
                  <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                    {pillar.title}
                  </h2>
                  <p className="tw-text-base tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
