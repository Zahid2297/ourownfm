import React from "react";

const Hero = () => {
  return (
    <section className="relative md:pt-44 pt-28 text-white">
      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10">
        {/* LEFT SIDE */}
        <div
          className="md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="flex gap-2 items-center">
            <span className="w-3 h-3 rounded-full bg-success"></span>
          </div>

          <h1 className="text-midnight_text font-bold dark:text-white text-4xl md:text-5xl md:leading-[1.15]">
            OUR-OWN FM ACADEMY
          </h1>

          <p className="text-grey dark:text-white/70 text-xl font-semibold">
            Let's build the strong FM team culture by ourselves
          </p>

          <a
            href="#learn-more"
            className="py-3 bg-transperent text-white rounded-md hover:bg-grey-700 transition duration-300 px-8"
          >
            Get Started
          </a>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:col-span-6 col-span-12 relative ">
          <img
            src="./src/assets/img1.jpg"
            alt="hero-banner"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
