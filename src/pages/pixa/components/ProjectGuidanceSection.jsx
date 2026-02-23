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
      className="project-guidance-section tw-relative tw-flex tw-w-full tw-min-h-[100vh] max-md:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8"
    >
      <div className="tw-w-full max-lg:tw-max-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[1200px] tw-gap-6 tw-p-4">
        <h3 className="tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal tw-text-[#19300e] dark:tw-text-[#c1fc75]">
          Project Guidance
        </h3>

        <div className="tw-mt-4 tw-max-w-[900px] tw-text-center tw-space-y-4">
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
          <div className="project-guidance-card tw-flex tw-flex-1 tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-6 tw-shadow-xl">
            <div className="tw-flex tw-flex-col tw-gap-4 tw-w-full">
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
          </div>

          {/* Why Project Guidance Is Critical Card */}
          <div className="project-guidance-card tw-flex tw-flex-1 tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-6 tw-shadow-xl">
            <div className="tw-flex tw-flex-col tw-gap-4 tw-w-full">
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
                  Project Guidance eliminates these risks before operations
                  begin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fee Structure – wide card */}
        <div className="project-guidance-card project-guidance-fee-card fee-structure-card tw-mt-8 tw-w-full tw-max-w-[1000px] tw-mx-auto">
          <div className="tw-w-full">
            <div className="fee-structure-card__header">
              <h4 className="fee-structure-heading fee-structure-main-heading tw-text-3xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-0 tw-text-center">
                Fee Structure
              </h4>
            </div>
            <div className="fee-structure-grid tw-w-full">
              {/* 1. Design Review Support */}
              <div className="fee-structure-column tw-flex tw-flex-col tw-gap-2">
                <p className="fee-structure-heading tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-text-lg">
                  1. Design Review Support
                </p>
                <p className="fee-structure-label tw-text-gray-800 dark:tw-text-white tw-mb-1">
                  Review of:
                </p>
                <ul className="fee-structure-list tw-list-none tw-space-y-1 tw-mb-3">
                  {[
                    "MEP systems",
                    "Maintainability considerations",
                    "Access for maintenance",
                    "Safety and operability",
                  ].map((item, i) => (
                    <li key={i} className="tw-flex tw-items-start tw-gap-2">
                      <span className="project-bullet tw-text-[#c1fc75] tw-flex-shrink-0">
                        •
                      </span>
                      <span className="tw-text-gray-800 dark:tw-text-gray-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="fee-structure-fee-block tw-font-medium tw-text-gray-800 dark:tw-text-gray-200">
                  Fee:{" "}
                  <span className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                    AED 5,000 – AED 12,000{" "}
                  </span>
                  <span className="tw-block tw-text-sm tw-mt-0.5">
                    (per review phase)
                  </span>
                </p>
              </div>

              {/* 2. Construction & Pre-Handover Support */}
              <div className="fee-structure-column tw-flex tw-flex-col tw-gap-2">
                <p className="fee-structure-heading tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-text-lg">
                  2. Construction & Pre-Handover Support
                </p>
                <p className="fee-structure-label tw-text-gray-800 dark:tw-text-white tw-mb-1">
                  Includes:
                </p>
                <ul className="fee-structure-list tw-list-none tw-space-y-1 tw-mb-3">
                  {[
                    "Asset documentation alignment",
                    "Snag tracking input",
                    "Temporary utilities risk review",
                    "System readiness assessment",
                  ].map((item, i) => (
                    <li key={i} className="tw-flex tw-items-start tw-gap-2">
                      <span className="project-bullet tw-text-[#c1fc75] tw-flex-shrink-0">
                        •
                      </span>
                      <span className="tw-text-gray-800 dark:tw-text-gray-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="fee-structure-fee-block tw-font-medium tw-text-gray-800 dark:tw-text-gray-200">
                  Fee:{" "}
                  <span className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                    AED 10,000 – AED 25,000{" "}
                  </span>
                  <span className="tw-block tw-text-sm tw-mt-0.5">
                    (project-specific)
                  </span>
                </p>
              </div>

              {/* 3. Mobilisation & GO-LIVE Planning */}
              <div className="fee-structure-column tw-flex tw-flex-col tw-gap-2">
                <p className="fee-structure-heading tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-text-lg">
                  3. Mobilisation & GO-LIVE Planning
                </p>
                <p className="fee-structure-label tw-text-gray-800 dark:tw-text-white tw-mb-1">
                  Includes:
                </p>
                <ul className="fee-structure-list tw-list-none tw-space-y-1 tw-mb-3">
                  {[
                    "Asset takeover planning",
                    "Team readiness",
                    "SLA alignment",
                    "Operational risk mitigation",
                  ].map((item, i) => (
                    <li key={i} className="tw-flex tw-items-start tw-gap-2">
                      <span className="project-bullet tw-text-[#c1fc75] tw-flex-shrink-0">
                        •
                      </span>
                      <span className="tw-text-gray-800 dark:tw-text-gray-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="fee-structure-fee-block tw-font-medium tw-text-gray-800 dark:tw-text-gray-200">
                  Fee: Starting from{" "}
                  <span className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                    AED 25,000 per engagement
                  </span>
                </p>
              </div>

              {/* 4. End-to-End Project Guidance */}
              <div className="fee-structure-column tw-flex tw-flex-col tw-gap-2">
                <p className="fee-structure-heading tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-text-lg">
                  4. End-to-End Project Guidance
                </p>
                <p className="fee-structure-label tw-text-gray-800 dark:tw-text-white tw-mb-1">
                  Design to GO-LIVE support:
                </p>
                <ul className="fee-structure-list tw-list-none tw-space-y-1 tw-mb-3">
                  {[
                    "Design review",
                    "Documentation readiness",
                    "Handover planning",
                    "Operational setup",
                  ].map((item, i) => (
                    <li key={i} className="tw-flex tw-items-start tw-gap-2">
                      <span className="project-bullet tw-text-[#c1fc75] tw-flex-shrink-0">
                        •
                      </span>
                      <span className="tw-text-gray-800 dark:tw-text-gray-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="fee-structure-fee-block tw-font-medium tw-text-gray-800 dark:tw-text-gray-200">
                  Fee: Starting from{" "}
                  <span className="tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                    AED 50,000 per project
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGuidanceSection;
