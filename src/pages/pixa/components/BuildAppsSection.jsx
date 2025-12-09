const BuildAppsSection = () => {
  return (
    <section
      id="about"
      className="tw-relative tw-flex tw-w-full tw-min-h-[100vh] max-lg:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8"
    >
      <div className="tw-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[900px] tw-gap-6 tw-p-4">
        <div className="purple-bg-grad reveal-up tw-absolute tw-right-[20%] tw-top-[20%] tw-h-[200px] tw-w-[200px]"></div>
        <h2 className="reveal-up tw-text-6xl max-lg:tw-text-4xl tw-text-center tw-leading-normal tw-uppercase tw-text-[#19300e] dark:tw-text-[#c1fc75]">
          <span className="tw-font-semibold">About Us</span>
        </h2>
        <div className="reveal-up tw-mt-4 tw-max-w-[800px] tw-text-gray-900 dark:tw-text-gray-200 tw-text-center max-md:tw-text-sm tw-text-lg">
          <p className="tw-mb-6">
            Our Own FM Academy is a future-focused training and development
            platform dedicated to building skilled, digitally-ready, and
            industry-relevant professionals for the Facilities Management (FM)
            sector across India and the Gulf region. We bridge the gap between
            traditional engineering education and the modern demands of FM,
            where technical depth, digital tools, and operational excellence
            matter more than ever. Built by industry practitioners, our academy
            provides learners with practical training, real mentorship, and
            career guidance, helping them grow into professionals who can lead
            FM operations, digital transformation, and smart-building
            initiatives.
          </p>
        </div>

        <div className="reveal-up tw-mt-12 tw-w-full tw-max-w-[1200px]">
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8 tw-p-4">
            {/* Our Purpose Card */}
            <div
              className="tw-relative tw-group tw-flex tw-flex-col tw-p-6 tw-rounded-2xl tw-bg-gradient-to-br tw-from-[#f2f3f4] tw-to-[#e8e9ea] dark:tw-from-[#080808] dark:tw-to-[#0f0f0f] tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123] tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 hover:tw-scale-[1.02] tw-overflow-hidden"
              style={{ height: "220px" }}
            >
              <div className="tw-absolute tw-top-0 tw-right-0 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-purple-200/30 tw-to-blue-200/30 dark:tw-from-purple-900/20 dark:tw-to-blue-900/20 tw-rounded-full tw-blur-2xl"></div>
              <div className="tw-relative tw-z-10 tw-flex tw-flex-col">
                <h3
                  className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]"
                  style={{ marginBottom: "18px" }}
                >
                  Our Purpose
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-text-base tw-leading-relaxed tw-mb-4">
                  To make high-quality Facilities Management (FM) education
                  accessible to everyone — from fresh graduates to seasoned
                  professionals — especially those who lack networks, resources,
                  or exposure.
                </p>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-text-base tw-leading-relaxed">
                  We believe talent can come from anywhere, and our purpose is
                  to equip every learner with the skills, confidence, and
                  opportunities needed to succeed in the FM industry.
                </p>
              </div>
            </div>

            {/* Our Vision Card */}
            <div
              className="tw-relative tw-group tw-flex tw-flex-col tw-p-6 tw-rounded-2xl tw-bg-gradient-to-br tw-from-[#f2f3f4] tw-to-[#e8e9ea] dark:tw-from-[#080808] dark:tw-to-[#0f0f0f] tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123] tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 hover:tw-scale-[1.02] tw-overflow-hidden"
              style={{ height: "220px" }}
            >
              <div className="tw-absolute tw-top-0 tw-right-0 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-blue-200/30 tw-to-cyan-200/30 dark:tw-from-blue-900/20 dark:tw-to-cyan-900/20 tw-rounded-full tw-blur-2xl"></div>
              <div className="tw-relative tw-z-10 tw-flex tw-flex-col">
                <h3
                  className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]"
                  style={{ marginBottom: "18px" }}
                >
                  Our Vision
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-text-base tw-leading-relaxed tw-mb-4">
                  To become the most trusted FM learning ecosystem across India
                  and the GCC — empowering 10,000+ professionals with
                  future-ready technical, operational, and digital FM
                  capabilities by 2030.
                </p>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-text-base tw-leading-relaxed">
                  We envision a future where FM professionals are respected,
                  skilled, and prepared for the evolving demands of the
                  industry.
                </p>
              </div>
            </div>

            {/* Our Commitment Card */}
            <div
              className="tw-relative tw-group tw-flex tw-flex-col tw-p-6 tw-rounded-2xl tw-bg-gradient-to-br tw-from-[#f2f3f4] tw-to-[#e8e9ea] dark:tw-from-[#080808] dark:tw-to-[#0f0f0f] tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123] tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 hover:tw-scale-[1.02] tw-overflow-hidden"
              style={{ height: "220px" }}
            >
              <div className="tw-absolute tw-top-0 tw-right-0 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-green-200/30 tw-to-emerald-200/30 dark:tw-from-green-900/20 dark:tw-to-emerald-900/20 tw-rounded-full tw-blur-2xl"></div>
              <div className="tw-relative tw-z-10 tw-flex tw-flex-col">
                <h3
                  className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]"
                  style={{ marginBottom: "18px" }}
                >
                  Our Commitment
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-text-base tw-leading-relaxed tw-mb-4">
                  We stand for access, mentorship, integrity, and real growth.
                </p>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-text-base tw-leading-relaxed">
                  Our commitment is to provide practical, industry-relevant
                  learning experiences that lead to meaningful career
                  advancement and long-term success.
                </p>
              </div>
            </div>

            {/* Our Promise Card */}
            <div
              className="tw-relative tw-group tw-flex tw-flex-col tw-p-6 tw-rounded-2xl tw-bg-gradient-to-br tw-from-[#f2f3f4] tw-to-[#e8e9ea] dark:tw-from-[#080808] dark:tw-to-[#0f0f0f] tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123] tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-duration-300 hover:tw-scale-[1.02] tw-overflow-hidden"
              style={{ height: "220px" }}
            >
              <div className="tw-absolute tw-top-0 tw-right-0 tw-w-32 tw-h-32 tw-bg-gradient-to-br tw-from-orange-200/30 tw-to-pink-200/30 dark:tw-from-orange-900/20 dark:tw-to-pink-900/20 tw-rounded-full tw-blur-2xl"></div>
              <div className="tw-relative tw-z-10 tw-flex tw-flex-col">
                <h3
                  className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]"
                  style={{ marginBottom: "18px" }}
                >
                  Our Promise
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-text-base tw-leading-relaxed tw-mb-4">
                  Unlock potential. Build skills. Transform careers.
                </p>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-text-base tw-leading-relaxed">
                  We promise to support every learner through structured
                  learning, community guidance, and opportunities that
                  accelerate both personal and professional growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildAppsSection;
