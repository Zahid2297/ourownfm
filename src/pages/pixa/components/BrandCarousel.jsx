const BrandCarousel = () => {
  const partners = [
    {
      name: "Factech",
      description: "CAFM Learning",
      icon: "/pixa-assets/images/home/api.png",
    },
    {
      name: "VDEI",
      description: "BIM & Digital Twins",
      icon: "/digital-twin.png",
    },
    {
      name: "MEP Partners",
      description: "Technical Training",
      icon: "/partners.png",
    },
    {
      name: "Facility Owners",
      description: "Real Site Learning",
      icon: "/graduation.png",
    },
    {
      name: "Industry Experts",
      description: "Mentorship",
      icon: "/factory.png",
    },
  ];

  return (
    <section className="tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8">
      <h2 className="reveal-up tw-text-3xl max-md:tw-text-xl">
        Our Collaborations & Partners
      </h2>

      <div className="reveal-up carousel-container">
        <div className="carousel lg:w-place-content-center tw-mt-10 tw-flex tw-w-full tw-gap-5 max-md:tw-gap-2">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="carousel-img tw-h-[100px] tw-w-[200px] tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-lg"
            >
              <div className="tw-h-[60px] tw-w-[60px] tw-mb-2 tw-flex tw-items-center tw-justify-center">
                <img
                  src={partner.icon}
                  alt={partner.name}
                  className="tw-h-full tw-w-full tw-object-contain"
                />
              </div>
              <div className="tw-font-semibold tw-text-sm tw-text-black dark:tw-text-white tw-text-center">
                {partner.name}
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`dup-${index}`}
              className="carousel-img tw-h-[100px] tw-w-[200px] tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-lg"
            >
              <div className="tw-h-[60px] tw-w-[60px] tw-mb-2 tw-flex tw-items-center tw-justify-center">
                <img
                  src={partner.icon}
                  alt={partner.name}
                  className="tw-h-full tw-w-full tw-object-contain"
                />
              </div>
              <div className="tw-font-semibold tw-text-sm tw-text-black dark:tw-text-white tw-text-center">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
