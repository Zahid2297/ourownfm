const BrandCarousel = () => {
  const brands = [
    { name: "Google", logo: "/pixa-assets/images/brand-logos/google.svg" },
    { name: "Microsoft", logo: "/pixa-assets/images/brand-logos/microsoft.svg" },
    { name: "Adobe", logo: "/pixa-assets/images/brand-logos/adobe.svg" },
    { name: "Airbnb", logo: "/pixa-assets/images/brand-logos/airbnb.svg" },
    { name: "Stripe", logo: "/pixa-assets/images/brand-logos/stripe.svg" },
    { name: "Reddit", logo: "/pixa-assets/images/brand-logos/reddit.svg" },
  ];

  return (
    <section className="tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8">
      <h2 className="reveal-up tw-text-3xl max-md:tw-text-xl">Trusted by brands you love</h2>

      <div className="reveal-up carousel-container">
        <div className="carousel lg:w-place-content-center tw-mt-10 tw-flex tw-w-full tw-gap-5 max-md:tw-gap-2">
          {brands.map((brand, index) => (
            <div key={index} className="carousel-img tw-h-[30px] tw-w-[150px]">
              <img
                src={brand.logo}
                alt={brand.name}
                className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {brands.map((brand, index) => (
            <div key={`dup-${index}`} className="carousel-img tw-h-[30px] tw-w-[150px]">
              <img
                src={brand.logo}
                alt={brand.name}
                className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;

