const PreBuiltToolsSection = () => {
  const offerings = [
    {
      icon: "bi-book",
      title: "Industry-Aligned FM Training",
      description:
        "Covering core FM operations, technical services, soft services, HSE, audits, asset management, and energy efficiency.",
    },
    {
      icon: "bi-laptop",
      title: "Digital FM Skills",
      description:
        "Hands-on training on the tools shaping the future of the industry: BIM, Revit, IoT, CAFM, CMMS, energy analytics, predictive maintenance, and digital-twin workflows.",
    },
    {
      icon: "bi-person-badge",
      title: "Mentorship & Career Support",
      description:
        "Guidance from experienced FM professionals, placement support, profile building, and career roadmap planning.",
    },
    {
      icon: "bi-building",
      title: "Real-World Learning",
      description:
        "Case studies, site-level scenarios, problem-solving, and operational simulations — not just theory.",
    },
    {
      icon: "bi-heart",
      title: "Accessible & Inclusive Education",
      description:
        "Training designed to support learners from all backgrounds, including small towns, new graduates, and those switching careers.",
    },
  ];

  return (
    <section id="training" className="tw-relative tw-mt-10 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-items-center lg:tw-p-6">
      <div className="reveal-up tw-mt-[5%] tw-flex tw-h-full tw-w-full tw-place-content-center tw-gap-2 tw-p-4 max-lg:tw-max-w-full max-lg:tw-flex-col">
        <div className="tw-relative tw-flex tw-max-w-[30%] max-lg:tw-max-w-full tw-flex-col tw-place-items-start tw-gap-4 tw-p-2 max-lg:tw-place-items-center max-lg:tw-place-content-center max-lg:tw-w-full">
          <div className="tw-top-40 tw-flex tw-flex-col lg:tw-sticky tw-place-items-center tw-max-h-fit tw-max-w-[850px] max-lg:tw-max-h-fit max-lg:tw-max-w-[320px] tw-overflow-hidden">
            <h2 className="tw-text-5xl tw-font-serif tw-text-center tw-font-medium max-md:tw-text-3xl">
              What We Offer
            </h2>
            <a
              href="#contact"
              className="btn !tw-mt-8 !tw-bg-transparent !tw-text-black !tw-border-[1px] !tw-border-black dark:!tw-border-white dark:!tw-text-white"
            >
              Connect
            </a>
          </div>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-10 tw-h-full tw-max-w-1/2 max-lg:tw-max-w-full tw-px-[10%] max-lg:tw-px-4 max-lg:tw-gap-3 max-lg:tw-w-full lg:tw-top-[20%] tw-place-items-center">
          {offerings.map((offering, index) => (
            <div key={index} className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <div className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg dark:tw-shadow-[#080808] tw-duration-300 tw-transition-all tw-p-8 tw-group/card tw-bg-[#f2f3f4] dark:tw-bg-[#080808]">
                <div className="tw-text-4xl max-md:tw-text-2xl tw-text-gray-800 dark:tw-text-gray-200">
                  <i className={offering.icon}></i>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">{offering.title}</h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                    {offering.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreBuiltToolsSection;

