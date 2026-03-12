import quickFMSLogo from "../../../assets/quickFMSlogo.png";
import greenMentorLogo from "../../../assets/greenmentor.png";
import fmpmLogo from "../../../assets/fmpm.jpg";

const BrandCarousel = () => {
  const partners = [
    {
      description: "QUICK FMS",
      icon: quickFMSLogo,
      originalColors: true,
    },
    {
      description: "Green Mentor",
      icon: greenMentorLogo,
      originalColors: true,
    },
    {
      description: "FMPM Learnings",
      icon: fmpmLogo,
      originalColors: true,
    },
    {
      name: "Industry Experts",
      description: "Mentorship",
      icon: "/factory.png",
    },
  ];

  return (
    <section className="brand-carousel-section tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8">
      <h2 className="reveal-up tw-text-6xl max-md:tw-text-xl tw-text-[#19300e] dark:tw-text-[#c1fc75] font-bold">
        Our Collaborations & Partners
      </h2>

      <div className="reveal-up carousel-container">
        <div className="carousel lg:w-place-content-center tw-flex tw-w-full tw-gap-5 max-md:tw-gap-2 brand-carousel-track">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="brand-carousel-card carousel-img tw-min-h-[120px] tw-w-[200px] tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-lg"
            >
              <div className="brand-carousel-card__logo tw-h-[60px] tw-w-[60px] tw-mb-2 tw-flex tw-items-center tw-justify-center">
                <img
                  src={partner.icon}
                  alt={partner.name}
                  className={`tw-h-full tw-w-full tw-object-contain ${partner.originalColors ? "" : "dark:tw-brightness-0 dark:tw-invert"}`}
                />
              </div>
              <div className="tw-font-semibold tw-text-sm tw-text-[#19300e] dark:tw-text-white tw-text-center">
                {partner.name}
              </div>
              {partner.description && (
                <div className="tw-text-xs tw-text-gray-600 dark:tw-text-gray-300 tw-text-center tw-mt-1">
                  {partner.description}
                </div>
              )}
            </div>
          ))}
          {/* Duplicate for seamless loop (hidden on mobile) */}
          {partners.map((partner, index) => (
            <div
              key={`dup-${index}`}
              className="brand-carousel-card brand-carousel-duplicate carousel-img tw-min-h-[120px] tw-w-[200px] tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-lg"
            >
              <div className="brand-carousel-card__logo tw-h-[60px] tw-w-[60px] tw-mb-2 tw-flex tw-items-center tw-justify-center">
                <img
                  src={partner.icon}
                  alt={partner.name}
                  className={`tw-h-full tw-w-full tw-object-contain ${partner.originalColors ? "" : "dark:tw-brightness-0 dark:tw-invert"}`}
                />
              </div>
              <div className="tw-font-semibold tw-text-sm tw-text-[#19300e] dark:tw-text-white tw-text-center">
                {partner.name}
              </div>
              {partner.description && (
                <div className="tw-text-xs tw-text-gray-600 dark:tw-text-gray-300 tw-text-center tw-mt-1">
                  {partner.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
