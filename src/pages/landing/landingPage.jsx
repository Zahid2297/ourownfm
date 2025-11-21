import { useState, useRef } from "react";
import { RiCheckLine, RiMailLine } from "react-icons/ri";
import { div } from "three/tsl";
import Silk from "@/components/Silk";
import Hero from "@/components/Hero";
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

      <div className="relative z-10 pt-[120px]">
        <div className="w-full max-w-[1900px] mx-auto min-h-[700px] grid grid-cols-1 md:grid-cols-12">
          {/* LEFT HERO CONTENT – ALWAYS VISIBLE */}
          <div className="flex flex-col md:justify-center mt-20 md:mb-40 h-auto md:pl-50 z-10 text-center md:text-left md:col-span-2 md:-mr-190 ">
            <h1 className="text-white text-xl md:text-6xl font-bold leading-tight md:text-shadow-lg/30">
              Building a Skilled Future Ready Facilities Management Workforce
            </h1>

            <div>
              <p className="text-white/80 text-xs md:text-xl mt-4 md:text-shadow-lg/30">
                Training | Consultancy | Project Guidance | Sustainability
                <br />
                Empowering India & GCC
              </p>

              <div className="flex flex-col md:flex-row gap-4 mt-8 md:justify-start justify-center ">
                <button
                  className="cursor-pointer border px-5 py-1 rounded-2xl text-white hover:bg-gradient-to-r from-black via-gray-500 to-black "
                  onClick={() => console.log("Enroll Now Clicked")}
                >
                  Enroll Now
                </button>
                <button className="cursor-pointer border px-5 py-1 rounded-2xl text-white hover:bg-gradient-to-r from-black via-gray-500 to-black ">
                  Schedule Consultation
                </button>
                <button className="cursor-pointer border px-5 py-1 rounded-2xl text-white hover:bg-gradient-to-r from-black via-gray-500 to-black ">
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
