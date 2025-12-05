const AdditionalFeaturesSection = () => {
  const whyChooseUs = [
    {
      icon: "bi-award",
      title: "Industry Expert Designed",
      description:
        "Training designed by FM industry experts with real-world experience and practical insights.",
    },
    {
      icon: "bi-laptop",
      title: "Digital-First Approach",
      description:
        "Focus on practical and digital-first FM skills that are in high demand in the modern workplace.",
    },
    {
      icon: "bi-people",
      title: "Continuous Mentorship",
      description:
        "Mentorship that continues beyond the classroom, supporting your career growth long-term.",
    },
    {
      icon: "bi-globe",
      title: "GCC Market Alignment",
      description:
        "Strong alignment with GCC market requirements, preparing you for opportunities in the Gulf region.",
    },
    {
      icon: "bi-briefcase",
      title: "Career-Oriented",
      description:
        "Career-oriented approach, not just certification. We focus on building skills that get you hired.",
    },
    {
      icon: "bi-diagram-3",
      title: "Growing Community",
      description:
        "Supported by a growing community of professionals and alumni who share knowledge and opportunities.",
    },
  ];

  return (
    <section className="tw-relative tw-flex tw-w-full tw-min-h-[110vh] max-md:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">
      <div className="tw-w-full max-lg:tw-max-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">
        <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal">
          Why Choose Us
        </h3>

        <div className="tw-mt-8 tw-relative tw-gap-10 tw-p-4 tw-grid tw-place-items-center tw-grid-cols-3 max-lg:tw-flex max-lg:tw-flex-col">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="reveal-up tw-w-full tw-border-[1px] tw-h-[350px] tw-rounded-md tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3"
            >
              <div className="tw-w-full tw-h-[150px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center tw-items-center">
                <i className={`bi ${item.icon} tw-text-6xl tw-text-gray-800 dark:tw-text-gray-200`}></i>
              </div>
              <h3 className="tw-text-2xl tw-text-center">{item.title}</h3>
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

