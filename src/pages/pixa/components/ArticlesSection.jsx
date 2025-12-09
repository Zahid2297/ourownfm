const ArticlesSection = () => {
  const articles = [
    {
      image: "/pixa-assets/images/home/article1.jpg",
      category: "Training",
      date: "2024",
      title: "FM Fundamentals & Technical Operations",
    },
    {
      image: "/pixa-assets/images/home/article2.jpg",
      category: "Digital FM",
      date: "2024",
      title: "CAFM, IoT, BMS, BIM Integration",
    },
    {
      image: "/pixa-assets/images/home/article3.jpg",
      category: "Sustainability",
      date: "2024",
      title: "ESG & Green Building Practices",
    },
  ];

  return (
    <section
      id="collaborations"
      className="tw-mt-5 tw-flex tw-min-h-[80vh] tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%] max-lg:tw-p-3"
    >
      <h3 className="reveal-up tw-text-4xl tw-font-medium max-md:tw-text-2xl tw-text-[#19300e] dark:tw-text-[#c1fc75]">
        Our Collaborations & Partners ✨
      </h3>
      <p className="reveal-up tw-text-lg tw-text-gray-700 dark:tw-text-gray-300 tw-text-center tw-max-w-[700px] tw-mt-2">
        We collaborate with industry leaders to deliver practical, real-world
        learning
      </p>

      <div className="reveal-up tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-10 max-lg:tw-flex-col">
        <div className="tw-flex tw-h-[400px] tw-w-[400px] tw-flex-col tw-gap-4 tw-overflow-clip tw-rounded-lg tw-p-6 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] max-lg:tw-w-[350px]">
          <div className="tw-text-5xl tw-mb-4">
            <i className="bi bi-laptop"></i>
          </div>
          <h3 className="tw-font-semibold tw-text-2xl tw-text-[#19300e] dark:tw-text-[#c1fc75]">CAFM Partners</h3>
          <p className="tw-text-gray-700 dark:tw-text-gray-300">
            Implement cloud-based CAFM. Provide hands-on digital FM dashboards.
          </p>
          <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400 tw-mt-auto">
            Partner: Factech
          </p>
        </div>

        <div className="tw-flex tw-h-[400px] tw-w-[400px] tw-flex-col tw-gap-4 tw-overflow-clip tw-rounded-lg tw-p-6 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] max-lg:tw-w-[350px]">
          <div className="tw-text-5xl tw-mb-4">
            <i className="bi bi-diagram-3"></i>
          </div>
          <h3 className="tw-font-semibold tw-text-2xl tw-text-[#19300e] dark:tw-text-[#c1fc75]">
            BIM & Digital Twin Partners
          </h3>
          <p className="tw-text-gray-700 dark:tw-text-gray-300">
            BIM-based asset visualisation. As-built data integration.
            Model-based facility operations.
          </p>
          <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400 tw-mt-auto">
            Partner: VDEI
          </p>
        </div>

        <div className="tw-flex tw-h-[400px] tw-w-[400px] tw-flex-col tw-gap-4 tw-overflow-clip tw-rounded-lg tw-p-6 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] max-lg:tw-w-[350px]">
          <div className="tw-text-5xl tw-mb-4">
            <i className="bi bi-tools"></i>
          </div>
          <h3 className="tw-font-semibold tw-text-2xl tw-text-[#19300e] dark:tw-text-[#c1fc75]">
            MEP Service Providers
          </h3>
          <p className="tw-text-gray-700 dark:tw-text-gray-300">
            Technical site training. Practical troubleshooting guidance.
            Equipment maintenance demonstrations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
