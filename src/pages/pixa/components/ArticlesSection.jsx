import quickFMSLogo from "../../../assets/quickFMSlogo.png";
import greenMentorLogo from "../../../assets/greenmentor.png";
import fmpmLogo from "../../../assets/fmpm.jpg";

const PARTNER_CARDS = [
  {
    image: quickFMSLogo,
    imageAlt: "QuickFMS",
    title: "CAFM / QuickFMS",
    subheading: "Powered by AI-Driven Facility Management Excellence",
    description:
      "QuickFMS is a leading cloud-based facilities management software platform that helps organisations streamline and optimise their facility operations, infrastructure, and workplace services through advanced modular tools for space management, asset tracking, maintenance scheduling, property and lease management, helpdesk operations, energy tracking, reservation systems, and contract administration all within a unified, intuitive interface. The platform empowers FM teams with real time visibility, automated workflows, and data driven insights that improve efficiency, reduce operating costs, and enhance overall productivity, while its scalable cloud architecture supports organisations of all sizes and enables secure access anywhere, anytime. As a strategic partner, QuickFMS aligns with our mission to digitalise and professionalise FM careers by offering learners practical exposure to one of the industry's most widely adopted CAFM systems, equipping them with real operational skills in asset and space management, maintenance systems, and integrated workplace operations, and effectively bridging the gap between FM theory and the modern digital tools used across the sector today.",
    partnerLabel: "Partner: CAFM / QuickFMS",
  },
  {
    image: greenMentorLogo,
    imageAlt: "Green Mentor",
    title: "Green Mentor",
    subheading: null,
    description:
      "Green Mentor is a sustainability-focused organization dedicated to advancing environmental responsibility, ESG awareness, and green building practices. Through this collaboration, learners gain exposure to sustainability principles, energy efficiency concepts, and practical approaches to integrating ESG thinking into Facilities Management and built environment operations.",
    partnerLabel: "Partner: Green Mentor",
  },
  {
    image: fmpmLogo,
    imageAlt: "FMPM Learnings",
    title: "FMPM Learnings",
    subheading: null,
    description:
      "FMPM Learnings is a professional training platform supporting Facilities Management education and preparation for internationally recognised certifications such as IFMA FMP® and CFM®.",
    partnerLabel: "Partner: FMPM Learnings",
  },
];

const ArticlesSection = () => {

  return (
    <section
      id="collaborations"
      className="tw-mt-5 tw-flex tw-min-h-[80vh] tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%] max-lg:tw-p-3"
    >
      <h3 className="reveal-up tw-text-4xl tw-font-medium max-md:tw-text-2xl tw-text-[#19300e] dark:tw-text-[#c1fc75]">
        Partners
      </h3>
      <p className="reveal-up tw-text-lg tw-text-gray-700 dark:tw-text-gray-300 tw-text-center tw-max-w-[700px] tw-mt-2">
        Powered by AI-Driven Facility Management Excellence
      </p>

      <div className="reveal-up tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-10 max-lg:tw-flex-col">
        {PARTNER_CARDS.map((card, index) => (
          <div
            key={index}
            className="quickfms-partnership-card tw-flex tw-min-h-[520px] tw-flex-col tw-gap-6 tw-overflow-hidden tw-rounded-xl tw-p-8 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-border-[1px] tw-border-gray-200 dark:tw-border-[#1f2123] tw-shadow-lg max-lg:tw-p-6"
          >
            <div className="tw-w-full tw-h-[250px] tw-min-h-[240px] tw-flex tw-items-center tw-justify-center tw-bg-transparent tw-rounded-lg tw-p-4">
              <img
                src={card.image}
                alt={card.imageAlt}
                className="tw-h-full tw-w-full tw-object-contain"
              />
            </div>
            <h3 className="tw-font-semibold tw-text-3xl tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-2">
              {card.title}
            </h3>
            {card.subheading && (
              <p className="tw-text-lg tw-text-gray-600 dark:tw-text-gray-400 tw-mb-2">
                {card.subheading}
              </p>
            )}
            <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-text-base tw-leading-relaxed tw-mb-4">
              {card.description}
            </p>
            <p className="tw-text-sm tw-font-medium tw-text-gray-600 dark:tw-text-gray-400 tw-mt-auto tw-pt-4 tw-border-t tw-border-gray-300 dark:tw-border-gray-700">
              {card.partnerLabel}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
