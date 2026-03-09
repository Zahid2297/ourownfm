import trainingImg from "../../../assets/trainingimg.webp";
import consultancyImg from "../../../assets/consultancyimg.webp";
import projectGuidanceImg from "../../../assets/projectGimag.webp";

const PreBuiltToolsSection = () => {
  const offerings = [
    {
      image: trainingImg,
      title: "Training",
      description:
        "Build strong Facilities Management (FM) capability through structured learning from foundations to leadership. Our training is designed to create technically confident, digitally aware, and operationally independent FM professionals ready for real-site challenges.",
    },
    {
      image: consultancyImg,
      title: "Consultancy",
      description:
        "Improve live FM operations with practical, on-ground consultancy that strengthens safety, compliance, performance, and control. We help organizations identify gaps, optimize processes, and implement sustainable improvements with measurable outcomes.",
    },
    {
      image: projectGuidanceImg,
      title: "Project Guidance",
      description:
        "Prevent FM issues before they start with project guidance during design, construction, and handover stages. We ensure systems are designed, installed, documented, and handed over to support smooth operations from Day One.",
    },
  ];

  return (
    <section
      id="what-we-offer"
      className="tw-relative tw-mt-10 tw-flex tw-min-h-0 tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-items-center tw-pb-16 lg:tw-p-6 tw-pt-[100px] tw-scroll-mt-[100px]"
    >
      <div className="tw-w-full tw-max-w-5xl tw-mx-auto tw-px-[5%] tw-flex tw-flex-col tw-items-center tw-gap-8">
        <div className="reveal-up tw-flex tw-flex-col tw-items-center tw-text-center tw-w-full">
          <h2 className="tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal tw-text-[#19300e] dark:tw-text-[#c1fc75]">
            What We Offer
          </h2>
        </div>

        <div className="what-we-offer-cards reveal-up tw-flex tw-flex-row tw-flex-nowrap tw-justify-center tw-items-stretch tw-gap-5 tw-w-full tw-max-w-xl max-[480px]:tw-flex-col max-[480px]:tw-gap-4">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="tw-flex-1 tw-min-w-0 tw-basis-0 max-[480px]:tw-w-full"
            >
              <div className="what-we-offer-card tw-flex tw-w-full tw-h-full tw-flex-col tw-rounded-xl tw-overflow-hidden tw-duration-300 tw-transition-all tw-group/card tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-border tw-border-gray-200 dark:tw-border-[#1f2123]">
                <div className="what-we-offer-card__image tw-w-full tw-flex-shrink-0 tw-overflow-hidden tw-bg-gray-100 dark:tw-bg-[#0c0c0c]">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="tw-w-full tw-h-full tw-object-cover"
                  />
                </div>
                <div className="tw-flex tw-flex-col tw-gap-3 tw-flex-1 tw-p-6 tw-pt-5">
                  <h3 className="tw-text-lg tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-m-0">
                    {offering.title}
                  </h3>
                  <p className="tw-text-xs tw-text-gray-800 dark:tw-text-gray-100 tw-leading-snug tw-m-0">
                    {offering.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreBuiltToolsSection;
