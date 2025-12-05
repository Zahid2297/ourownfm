const AboutUsSection = () => {
  const offerings = [
    {
      title: "Industry-Aligned FM Training",
      description: "Covering core FM operations, technical services, soft services, HSE, audits, asset management, and energy efficiency.",
      icon: "bi-book",
    },
    {
      title: "Digital FM Skills",
      description: "Hands-on training on BIM, Revit, IoT, CAFM, CMMS, energy analytics, predictive maintenance, and digital-twin workflows.",
      icon: "bi-laptop",
    },
    {
      title: "Mentorship & Career Support",
      description: "Guidance from experienced FM professionals, placement support, profile building, and career roadmap planning.",
      icon: "bi-person-check",
    },
    {
      title: "Real-World Learning",
      description: "Case studies, site-level scenarios, problem-solving, and operational simulations — not just theory.",
      icon: "bi-building",
    },
  ];

  const whyChooseUs = [
    "Training designed by FM industry experts",
    "Focus on practical and digital-first FM skills",
    "Mentorship that continues beyond the classroom",
    "Strong alignment with GCC market requirements",
    "Career-oriented approach, not just certification",
    "Supported by a growing community of professionals and alumni",
  ];

  return (
    <section
      id="about"
      className="tw-relative tw-flex tw-w-full tw-min-h-[100vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-py-20 tw-px-8"
    >
      <div className="tw-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[1200px] tw-gap-16 tw-px-4">
        <div className="purple-bg-grad reveal-up tw-absolute tw-right-[20%] tw-top-[20%] tw-h-[200px] tw-w-[200px]"></div>
        
        {/* Main Heading */}
        <div className="reveal-up tw-text-center tw-mb-12">
          <h2 className="tw-text-6xl max-lg:tw-text-4xl tw-leading-normal tw-uppercase tw-font-semibold tw-mb-8">
            About Us
          </h2>
          <div className="tw-max-w-[900px] tw-mx-auto tw-text-lg tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed tw-space-y-5 tw-px-4">
            <p>
              Our Own FM Academy is a future-focused training and development platform dedicated to building skilled, digitally-ready, and industry-relevant professionals for the Facilities Management (FM) sector across India and the Gulf region.
            </p>
            <p>
              We bridge the gap between traditional engineering education and the modern demands of FM, where technical depth, digital tools, and operational excellence matter more than ever.
            </p>
            <p>
              Built by industry practitioners, our academy provides learners with practical training, real mentorship, and career guidance, helping them grow into professionals who can lead FM operations, digital transformation, and smart-building initiatives.
            </p>
          </div>
        </div>

        {/* Our Purpose - Highlighted Box */}
        <div className="reveal-up tw-w-full tw-max-w-[1000px] tw-mt-4">
          <div className="tw-p-12 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-3xl tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]">
            <h3 className="tw-text-3xl tw-font-semibold tw-text-center tw-mb-6">Our Purpose</h3>
            <p className="tw-text-center tw-text-lg tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed tw-mb-4">
              To make high-quality FM education accessible to everyone — from fresh graduates to working professionals — especially those who lack networks, resources, or exposure.
            </p>
            <p className="tw-text-center tw-text-lg tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed">
              We believe talent can come from anywhere, and our mission is to give learners the skills, confidence, and opportunities needed to succeed.
            </p>
          </div>
        </div>

        {/* What We Offer - Grid Cards */}
        <div className="reveal-up tw-w-full tw-mt-8">
          <h3 className="tw-text-4xl tw-font-semibold tw-text-center tw-mb-10">What We Offer</h3>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-px-2">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="tw-p-8 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-2xl tw-transition-all tw-duration-300 hover:tw-scale-[1.02] tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]"
              >
                <div className="tw-text-5xl tw-mb-4 tw-text-gray-800 dark:tw-text-gray-200">
                  <i className={`bi ${offering.icon}`}></i>
                </div>
                <h4 className="tw-text-2xl tw-font-semibold tw-mb-3">{offering.title}</h4>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - Two Column Layout */}
        <div className="reveal-up tw-w-full tw-max-w-[1000px] tw-mt-12">
          <h3 className="tw-text-4xl tw-font-semibold tw-text-center tw-mb-10">Why Choose Us</h3>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-px-2">
            {whyChooseUs.map((point, index) => (
              <div
                key={index}
                className="tw-flex tw-items-start tw-gap-4 tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-xl"
              >
                <div className="tw-text-2xl tw-text-gray-800 dark:tw-text-gray-200 tw-flex-shrink-0">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <p className="tw-text-gray-800 dark:tw-text-gray-200 tw-text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Commitment - Side by Side */}
        <div className="reveal-up tw-w-full tw-max-w-[1000px] tw-mt-12 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-px-2">
          <div className="tw-p-8 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-2xl tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]">
            <h3 className="tw-text-3xl tw-font-semibold tw-mb-4">Our Vision</h3>
            <p className="tw-text-gray-800 dark:tw-text-gray-200 tw-leading-relaxed">
              To become the most trusted FM learning ecosystem in India and the GCC — empowering 10,000+ professionals with future-ready technical, operational, and digital FM capabilities by 2030.
            </p>
          </div>
          <div className="tw-p-8 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-2xl tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123]">
            <h3 className="tw-text-3xl tw-font-semibold tw-mb-4">Our Commitment</h3>
            <p className="tw-text-gray-800 dark:tw-text-gray-200 tw-mb-4 tw-leading-relaxed">
              We stand for access, mentorship, integrity, and real growth.
            </p>
            <p className="tw-text-xl tw-font-semibold tw-text-gray-900 dark:tw-text-white">
              Unlock potential. Build skills. Transform careers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

