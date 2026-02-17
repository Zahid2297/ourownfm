const ProjectGuidanceSection = () => {
  const scopePoints = [
    "Early FM involvement during design stages",
    "Review of MEP design for operability and maintainability",
    "Identification of operational and safety risks before handover",
    "Asset tagging, documentation, and data readiness",
    "Structured handover and takeover planning",
    "Systems familiarisation and technical readiness",
    "Emergency preparedness and response planning",
  ];

  const criticalPoints = [
    "Poor understanding of installed systems",
    "Incomplete or unusable documentation",
    "Design decisions taken without FM input",
    "Lack of operational and emergency readiness",
  ];

  return (
    <section
      id="project-guidance"
      className="tw-relative tw-flex tw-w-full tw-min-h-[100vh] max-md:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8"
    >
      <div className="tw-w-full max-lg:tw-max-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[1200px] tw-gap-6 tw-p-4">
        <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal tw-text-[#19300e] dark:tw-text-[#c1fc75]">
          Project Guidance
        </h3>

        <div className="reveal-up tw-mt-4 tw-max-w-[900px] tw-text-center tw-space-y-4">
          <p className="tw-text-lg tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed">
            Project Guidance is a preventive FM service, delivered during
            design, construction and pre-handover stages where most long-term FM
            problems originate. Our role is to ensure assets are designed,
            installed, documented and handed over in a way that supports safe,
            efficient, and sustainable operations from Day One.
          </p>
        </div>

        <div className="project-guidance-cards">
          {/* Scope of Project Guidance Card */}
          <div className="reveal-up tw-flex tw-flex-1 tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-6 tw-shadow-xl">
            <h4 className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]">
              Scope of Project Guidance
            </h4>
            <ul className="tw-list-none tw-space-y-3 tw-mt-2">
              {scopePoints.map((point, index) => (
                <li key={index} className="tw-flex tw-items-start tw-gap-3">
                  <span className="project-bullet tw-text-[#c1fc75] tw-font-bold tw-text-lg tw-flex-shrink-0 tw-mt-0.5">
                    •
                  </span>
                  <span className="tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Project Guidance Is Critical Card */}
          <div className="reveal-up tw-flex tw-flex-1 tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-6 tw-shadow-xl">
            <h4 className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]">
              Why Project Guidance Is Critical
            </h4>
            <p className="tw-text-gray-800 dark:tw-text-gray-200 tw-mb-2 tw-font-medium">
              Many post-handover failures occur due to:
            </p>
            <ul className="tw-list-none tw-space-y-3 tw-mt-2">
              {criticalPoints.map((point, index) => (
                <li key={index} className="tw-flex tw-items-start tw-gap-3">
                  <span className="project-bullet tw-text-[#c1fc75] tw-font-bold tw-text-lg tw-flex-shrink-0 tw-mt-0.5">
                    •
                  </span>
                  <span className="tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <div className="tw-mt-4 tw-pt-4 tw-border-t tw-border-gray-200 dark:tw-border-gray-700">
              <p className="tw-text-gray-800 dark:tw-text-gray-200 tw-font-semibold">
                Project Guidance eliminates these risks before operations begin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGuidanceSection;
