import React from "react";
import ModelViewer from "./ModelViewer";
import { Fullscreen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative md:pt-34 pt-18 text-white">
      <div className="container  mx-auto  grid grid-cols-12 gap-4 relative z-10">
        {/* LEFT SIDE */}
        <div
          className="md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center"
          data-aos="fade-up"
          data-aos-delay="2000"
          data-aos-duration="2000"
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
          {/* <img
            src="/img1.jpg"
            alt="hero-banner"
            className="w-full h-auto rounded-lg object-cover"
          /> */}
          <ModelViewer
            url="/view.glb"
            width={1200}
            height={900}
            showScreenshotButton={false}
            enableHoverRotation={true}
            fadeIn={true}
            autoRotate={false}
            autoRotateSpeed={0.2}
            defaultRotationY={35}
            defaultRotationX={18}
            defaultZoom={3} // closer
            minZoomDistance={0}
            maxZoomDistance={8}
            modelXOffset={3} // left-right
            modelYOffset={-9} // up-down
            enableManualRotation={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
