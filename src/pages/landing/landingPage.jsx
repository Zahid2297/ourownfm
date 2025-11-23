import { useState, useRef } from "react";
import { RiCheckLine, RiMailLine } from "react-icons/ri";
import { div } from "three/tsl";
import Silk from "@/components/Silk";
import TextType from "@/components/TextType";
import { BsSun } from "react-icons/bs";
import StaggeredMenu from "@/components/StaggeredMenu";
import ModelViewer from "@/components/ModelViewer";
import AnimatedContent from "@/components/AnimatedContent";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

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
        <div
          className="
  w-full max-w-[1900px] mx-auto 
  min-h-[400px] md:min-h-[700px]
  grid grid-cols-1 md:grid-cols-12
"
        >
          {/* LEFT HERO CONTENT – ALWAYS VISIBLE */}

          <div
            className="
  relative
  flex flex-col md:justify-center font-Satoshi md:mb-40 h-auto md:pl-50 z-10 text-center 
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
              <AnimatedContent
                distance={170}
                direction="horizontal"
                reverse={true}
                duration={2.5}
                ease="power3.out"
                initialOpacity={0.1}
                animateOpacity={true}
                threshold={0.1}
                delay={0}
              >
                <h1 className="text-white  pt-23 text-2xl md:text-6xl font-bold leading-tight text-shadow-lg/20 ">
                  Building a Skilled Future Ready Facilities Management
                  Workforce
                </h1>

                <p className="text-white/80 text-xs md:text-xl mt-2 ">
                  <TextType
                    text={["Training", "Consultancy", "Project Guidance"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  />
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
              </AnimatedContent>
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

      <div className="w-full min-h-[50vh] md:min-h-[70vh] flex justify-center items-center bg-transparent relative font-bold px-4">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          crollStart={window.innerWidth < 768 ? "top 60%" : "top 90%"}
          scrollEnd={window.innerWidth < 768 ? "top 10%" : "top 20%"}
          stagger={window.innerWidth < 768 ? 0.02 : 0.05}
          textClassName="!text-white text-5xl md:text-7xl  font-bold text-center  "
        >
          React Bits
        </ScrollFloat>
      </div>
      <div className="h-[1000px]">hello</div>
      {/* <div className="w-full h-auto flex justify-center items-center bg-transparent relative  px-4 py-20">
        <ScrollStack>
          <ScrollStackItem>
            <h2>Card 1</h2>
            <p>This is the first card in the stack</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>Card 2</h2>
            <p>This is the second card in the stack</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>Card 3</h2>
            <p>This is the third card in the stack</p>
          </ScrollStackItem>
        </ScrollStack>
      </div> */}
    </div>
  );
};

export default LandingPage;
