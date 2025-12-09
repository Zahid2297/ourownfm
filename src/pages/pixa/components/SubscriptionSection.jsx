const SubscriptionSection = () => {
  return (
    <section
      id="consultancy"
      className="tw-relative tw-flex tw-w-full tw-min-h-[100vh] max-md:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden"
    >
      <div className="tw-w-full max-lg:tw-max-w-full tw-place-content-center tw-place-items-center tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">
        <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal tw-text-[#19300e] dark:tw-text-[#c1fc75]">
          Consultancy Services
        </h3>
        <p className="reveal-up tw-mt-3 tw-max-w-[600px] tw-text-center tw-text-lg tw-text-[#19300e] dark:tw-text-white">
          We offer end-to-end FM consultancy designed for new setups, existing
          facilities, and organisations undergoing transformation.
        </p>

        <div className="tw-mt-8 tw-relative tw-flex tw-flex-col tw-gap-8 tw-w-full tw-max-w-[1000px]">
          <div className="reveal-up tw-flex tw-w-full tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-6 tw-shadow-xl">
            <h4 className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]">
              1. Operational Audit & Gap Assessment
            </h4>
            <ul className="tw-list-disc tw-list-inside tw-text-gray-800 dark:tw-text-gray-200 tw-space-y-2">
              <li>Hard & Soft FM audit</li>
              <li>Process mapping</li>
              <li>KPI/SLAs evaluation</li>
              <li>Cost & resource optimisation</li>
            </ul>
            <p className="tw-text-lg tw-font-medium tw-mt-4 tw-text-[#19300e] dark:tw-text-white">
              Fees: ₹50,000 – ₹2,00,000 (depending on facility size)
            </p>
          </div>

          <div className="reveal-up tw-flex tw-w-full tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-6 tw-shadow-xl">
            <h4 className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]">
              2. FM Technology Integration
            </h4>
            <ul className="tw-list-disc tw-list-inside tw-text-gray-800 dark:tw-text-gray-200 tw-space-y-2">
              <li>CAFM implementation support</li>
              <li>IoT sensors deployment</li>
              <li>BMS optimisation</li>
              <li>Digital Twin readiness</li>
            </ul>
            <p className="tw-text-lg tw-font-medium tw-mt-4 tw-text-[#19300e] dark:tw-text-white">
              Fees: ₹75,000 – ₹3,00,000
            </p>
          </div>

          <div className="reveal-up tw-flex tw-w-full tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-6 tw-shadow-xl">
            <h4 className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]">
              3. ESG & Sustainability Consulting
            </h4>
            <ul className="tw-list-disc tw-list-inside tw-text-gray-800 dark:tw-text-gray-200 tw-space-y-2">
              <li>Energy audit</li>
              <li>LEED/Green building advisory</li>
              <li>Carbon reporting</li>
              <li>Net Zero roadmap</li>
            </ul>
            <p className="tw-text-lg tw-font-medium tw-mt-4 tw-text-[#19300e] dark:tw-text-white">
              Fees: ₹60,000 – ₹2,50,000
            </p>
          </div>

          <div className="reveal-up tw-flex tw-w-full tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-6 tw-shadow-xl">
            <h4 className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]">
              4. HR & Talent Advisory for FM
            </h4>
            <ul className="tw-list-disc tw-list-inside tw-text-gray-800 dark:tw-text-gray-200 tw-space-y-2">
              <li>Org structure finalisation</li>
              <li>Job descriptions</li>
              <li>Competency mapping</li>
              <li>Performance systems</li>
            </ul>
            <p className="tw-text-lg tw-font-medium tw-mt-4 tw-text-[#19300e] dark:tw-text-white">
              Fees: ₹25,000 – ₹1,50,000
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="reveal-up tw-group tw-shadow-xl btn tw-flex tw-gap-2 tw-mt-10"
        >
          <span>Get Started</span>
          <i className="bi bi-arrow-right tw-duration-300 group-hover:tw-translate-x-1"></i>
        </a>
      </div>
    </section>
  );
};

export default SubscriptionSection;
