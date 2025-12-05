const ServicesSection = () => {
  const services = [
    {
      title: "Operational Audit & Gap Assessment",
      features: [
        "Hard & Soft FM audit",
        "Process mapping",
        "KPI/SLAs evaluation",
        "Cost & resource optimisation",
      ],
      fees: "₹50,000 – ₹2,00,000",
      icon: "bi-clipboard-check",
    },
    {
      title: "FM Technology Integration",
      features: [
        "CAFM implementation support",
        "IoT sensors deployment",
        "BMS optimisation",
        "Digital Twin readiness",
      ],
      fees: "₹75,000 – ₹3,00,000",
      icon: "bi-cpu",
    },
    {
      title: "ESG & Sustainability Consulting",
      features: [
        "Energy audit",
        "LEED/Green building advisory",
        "Carbon reporting",
        "Net Zero roadmap",
      ],
      fees: "₹60,000 – ₹2,50,000",
      icon: "bi-leaf",
    },
    {
      title: "HR & Talent Advisory for FM",
      features: [
        "Org structure finalisation",
        "Job descriptions",
        "Competency mapping",
        "Performance systems",
      ],
      fees: "₹25,000 – ₹1,50,000",
      icon: "bi-people",
    },
  ];

  const projectGuidance = [
    {
      type: "New FM Project Setup",
      description:
        "Asset register development, O&M planning, Manpower planning, Mobilisation",
      fees: "₹1,00,000 – ₹6,00,000",
    },
    {
      type: "Streamlining Existing FM",
      description:
        "Identifying inefficiencies, Rebuilding SOPs, Vendor evaluation, KPI review",
      fees: "₹75,000 – ₹3,50,000",
    },
    {
      type: "Digital Upgrade Support",
      description: "CAFM setup, IoT integration, Smart maintenance",
      fees: "₹1,00,000 – ₹5,00,000",
    },
  ];

  return (
    <section
      id="services"
      className="tw-relative tw-flex tw-w-full tw-min-h-[100vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-py-20 tw-px-8"
    >
      <div className="tw-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[1200px] tw-gap-16 tw-px-4">
        <div className="reveal-up tw-text-center tw-mb-12">
          <h2 className="tw-text-6xl max-lg:tw-text-4xl tw-leading-normal tw-uppercase tw-font-semibold tw-mb-8">
            Consultancy Services
          </h2>
          <p className="tw-text-lg tw-text-center tw-text-gray-700 dark:tw-text-gray-300 tw-max-w-[800px] tw-mx-auto tw-px-4">
            We offer end-to-end FM consultancy designed for new setups, existing
            facilities, and organisations undergoing transformation.
          </p>
        </div>

        <div className="reveal-up tw-w-full tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-px-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="tw-p-8 tw-bg-gradient-to-br tw-from-white tw-to-gray-100 dark:tw-from-black dark:tw-to-gray-900 tw-rounded-3xl tw-transition-all tw-duration-300 hover:tw-scale-[1.02] tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]"
            >
              <div className="tw-text-5xl tw-mb-4 tw-text-gray-800 dark:tw-text-gray-200">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <h3 className="tw-text-2xl tw-font-semibold tw-mb-4">
                {service.title}
              </h3>
              <ul className="tw-list-none tw-space-y-2 tw-mb-4">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="tw-text-gray-700 dark:tw-text-gray-300"
                  >
                    • {feature}
                  </li>
                ))}
              </ul>
              <div className="tw-mt-4 tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">
                Fees: {service.fees}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-up tw-mt-12 tw-w-full">
          <h3 className="tw-text-4xl tw-font-semibold tw-text-center tw-mb-10">
            Project Guidance & Support
          </h3>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-px-2">
            {projectGuidance.map((project, index) => (
              <div
                key={index}
                className="tw-p-8 tw-bg-gradient-to-br tw-from-white tw-to-gray-100 dark:tw-from-black dark:tw-to-gray-900 tw-rounded-xl tw-transition-all tw-duration-300 hover:tw-scale-[1.02] tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]"
              >
                <h4 className="tw-text-xl tw-font-semibold tw-mb-3">
                  {project.type}
                </h4>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4 tw-text-sm">
                  {project.description}
                </p>
                <div className="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">
                  {project.fees}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
