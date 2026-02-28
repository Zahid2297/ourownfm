const CertificationsSection = () => {
  const certifications = [
    {
      title: "CFM - Certified Facility Manager (IFMA)",
      price: "AED 1600",
      features: [
        "20 hrs live online training",
        "Full CFM competency coverage",
        "800+ PPT slides & practice questions",
      ],
    },
    {
      title: "FMP - Facility Management Professional (IFMA)",
      price: "AED 800",
      features: [
        "8 hrs live online training",
        "Complete FMP module coverage",
        "PDF study material & exam strategy",
      ],
    },
    {
      title: "LEED Green Associate (USGBC)",
      price: "AED 1000",
      features: [
        "10 hours live online training",
        "Exam-focused LEED preparation",
        "Study material & guidance",
      ],
    },
  ];

  return (
    <section
      className="tw-mt-5 tw-flex tw-w-full tw-flex-col tw-gap-6 tw-place-items-center tw-p-[2%]"
      id="certifications"
    >
      <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal tw-text-[#19300e] dark:tw-text-[#c1fc75]">
        IFMA Certification (exam preparation)
      </h3>
      <div className="tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-8 max-lg:tw-flex-col">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href="#contact"
            className="certification-card tw-flex tw-w-[350px] tw-flex-col tw-place-items-start tw-gap-3 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-8 tw-shadow-xl max-lg:tw-w-[320px] tw-cursor-pointer tw-no-underline"
          >
            <div className="reveal-up tw-flex tw-flex-col tw-gap-3 tw-w-full">
            <h3 className="tw-text-xl tw-font-semibold tw-text-left tw-mb-1 tw-text-[#19300e] dark:tw-text-[#c1fc75]">
              {cert.title}
            </h3>
            <p className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-white tw-mb-3">
              {cert.price}
            </p>
            <ul className="tw-list-none tw-space-y-2 tw-text-sm tw-text-gray-700 dark:tw-text-gray-300">
              {cert.features.map((feature, idx) => (
                <li key={idx} className="tw-flex tw-items-start tw-gap-2">
                  <span className="tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-flex-shrink-0">
                    •
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
