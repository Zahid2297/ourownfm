const CollaborationsSection = () => {
  const collaborations = [
    {
      title: "CAFM Partners",
      description: "Implement cloud-based CAFM, Provide hands-on digital FM dashboards",
      partner: "Factech – CAFM learning and implementation",
    },
    {
      title: "BIM & Digital Twin Partners",
      description: "BIM-based asset visualisation, As-built data integration, Model-based facility operations",
      partner: "VDEI – BIM and project-based guidance",
    },
    {
      title: "MEP Service Providers",
      description: "Technical site training, Practical troubleshooting guidance, Equipment maintenance demonstrations",
    },
    {
      title: "Facility Owners / Real Sites",
      description: "Site visits, Real audits, Practical demonstrations",
    },
    {
      title: "Industry Experts / Veterans",
      description: "Live webinars, International best practices",
    },
  ];

  return (
    <section
      id="collaborations"
      className="tw-relative tw-flex tw-w-full tw-min-h-[100vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-py-20 tw-px-8"
    >
      <div className="tw-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[1200px] tw-gap-16 tw-px-4">
        <div className="reveal-up tw-text-center tw-mb-12">
          <h2 className="tw-text-6xl max-lg:tw-text-4xl tw-leading-normal tw-uppercase tw-font-semibold tw-mb-8">
            Collaborations
          </h2>
          <p className="tw-text-lg tw-text-center tw-text-gray-700 dark:tw-text-gray-300 tw-max-w-[800px] tw-mx-auto tw-px-4">
            We collaborate with industry leaders to deliver practical, real-world learning
          </p>
        </div>

        <div className="reveal-up tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-px-2">
          {collaborations.map((collab, index) => (
            <div
              key={index}
              className="tw-p-8 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-xl tw-transition-all tw-duration-300 hover:tw-scale-[1.02] tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]"
            >
              <h3 className="tw-text-xl tw-font-semibold tw-mb-3">{collab.title}</h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-3">{collab.description}</p>
              {collab.partner && (
                <div className="tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white tw-mt-4 tw-pt-3 tw-border-t tw-border-gray-300 dark:tw-border-gray-700">
                  {collab.partner}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal-up tw-mt-12 tw-w-full tw-text-center tw-px-2">
          <h3 className="tw-text-3xl tw-font-semibold tw-mb-8">Site Visits</h3>
          <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4">
            All students receive 2–4 structured site visits:
          </p>
          <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-4 tw-mb-6">
            <span className="tw-px-6 tw-py-3 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-lg tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]">
              Commercial buildings
            </span>
            <span className="tw-px-6 tw-py-3 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-lg tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]">
              Industrial plants
            </span>
            <span className="tw-px-6 tw-py-3 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-lg tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]">
              Hospitals
            </span>
            <span className="tw-px-6 tw-py-3 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-lg tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]">
              Universities
            </span>
          </div>
          <p className="tw-text-gray-600 dark:tw-text-gray-400">
            Includes: audits, data collection, equipment study, SOP review.
          </p>
        </div>

        <div className="reveal-up tw-mt-12 tw-w-full tw-text-center tw-px-2">
          <h3 className="tw-text-3xl tw-font-semibold tw-mb-8">Placement Assistance (India & GCC)</h3>
          <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4">
            We support placements for Facility Executives, Facility Managers, Engineers, Supervisors, Coordinators, Sustainability officers, and CAFM operators.
          </p>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-max-w-[700px] tw-mx-auto">
            <div className="tw-p-6 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-xl tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]">
              <h4 className="tw-font-semibold tw-mb-2">Placement Support Includes:</h4>
              <ul className="tw-text-sm tw-text-left tw-text-gray-700 dark:tw-text-gray-300 tw-space-y-1">
                <li>• Resume development</li>
                <li>• Interview preparation</li>
                <li>• Job matching through partners</li>
                <li>• GCC recruitment coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;

