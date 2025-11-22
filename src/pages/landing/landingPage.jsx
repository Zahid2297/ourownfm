import { useState, useRef } from "react";
import { RiCheckLine, RiMailLine } from "react-icons/ri";
import { div } from "three/tsl";
import Silk from "@/components/Silk";

import { BsSun } from "react-icons/bs";
import StaggeredMenu from "@/components/StaggeredMenu";
import ModelViewer from "@/components/ModelViewer";

const LandingPage = () => {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },

    { label: "About", ariaLabel: "Learn about us", link: "/about" },

    { label: "Services", ariaLabel: "View our services", link: "/services" },

    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },

    { label: "Facebook", link: "https://facebook.com" },

    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  const menuRef = useRef();

  return (
    <div className="min-h-screen relative overflow-visible">
      <div className="fixed inset-0 -z-50">
        <Silk
          speed={10}
          scale={1}
          color="#1C1C1C"
          noiseIntensity={0}
          rotation={2}
        />
      </div>

      <StaggeredMenu
        className="fixed inset-0 z-[9999]"
        position="right"
        isFixed={true}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#fff"
        openMenuButtonColor="white"
        changeMenuColorOnOpen={true}
        colors={["white", "black"]}
        logoUrl="/path-to-your-logo.svg"
        accentColor="gray"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />

      <div className="relative z-10 md:pt-[120px] pt-[105px]">
        <div className="w-full max-w-[1900px] mx-auto min-h-[700px] grid grid-cols-1 md:grid-cols-12">
          {/* LEFT HERO CONTENT – ALWAYS VISIBLE */}
          <div
            className="
  relative
  flex flex-col md:justify-center md:mb-40 h-auto md:pl-50 z-10 text-center 
  md:text-left md:col-span-2 md:-mr-190 md:text-shadow-lg/30  
  bg-[url(/handshakeimg.jpg)] bg-no-repeat bg-top bg-contain md:bg-none

  before:content-['']
  before:absolute before:inset-0 before:bg-black/60
  before:h-[283px]              /* CHANGE THIS until it matches image height */
  before:pointer-events-none 
  before:z-0
  before:md:hidden
"
          >
            <div className="relative z-10">
              <h1 className="text-white  pt-23 text-2xl md:text-6xl font-bold leading-tight text-shadow-lg/20 ">
                Building a Skilled Future Ready Facilities Management Workforce
              </h1>

              <p className="text-white/80 text-xs md:text-xl mt-2 ">
                Training | Consultancy | Project Guidance
                <br />
                Empowering India & GCC
              </p>

              <div className="flex md:flex-row gap-4 mt-6 md:justify-start justify-center text-xs md:text-base">
                <button
                  className="cursor-pointer border md:px-5 md:py-1 px-2 py-1 rounded-2xl text-white font-semibold md:bg-none bg-black/35 md:hover:bg-gradient-to-r md:from-black md:via-gray-500 md:to-black "
                  onClick={() => console.log("Enroll Now Clicked")}
                >
                  Enroll Now
                </button>
                <button
                  className=" hidden md:block cursor-pointer border md:px-5 md:py-1 px-2 py-1 rounded-2xl text-white font-semibold bg-black/35 md:hover:bg-gradient-to-r md:from-black md:via-gray-500 md:to-black "
                  onClick={() => console.log("Enroll Now Clicked")}
                >
                  Schedule Consultation
                </button>
                <button
                  className=" hidden md:block cursor-pointer border md:px-5 md:py-1 px-2 py-1 rounded-2xl text-white font-semibold bg-black/35 md:hover:bg-gradient-to-r md:from-black md:via-gray-500 md:to-black "
                  onClick={() => console.log("Enroll Now Clicked")}
                >
                  Explore Programs
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT MODEL – ONLY VISIBLE ON MD+ */}
          <div className="relative z-0 hidden md:block h-[880px] md:col-span-10 opacity-75 ">
            <ModelViewer
              url="/view.glb"
              showScreenshotButton={false}
              enableHoverRotation={true}
              fadeIn={true}
              autoRotate={false}
              autoRotateSpeed={0.3}
              defaultRotationY={35}
              defaultRotationX={18}
              defaultZoom={3}
              minZoomDistance={0}
              maxZoomDistance={8}
              modelXOffset={3}
              modelYOffset={-8}
              enableManualRotation={false}
              enableManualZoom={false}
            />
          </div>
        </div>
      </div>

      <div className="relative z-40 pt-[1200px] ">
        <h1 className="text-white  text-9xl">hello</h1>
      </div>
    </div>
  );
};

export default LandingPage;
