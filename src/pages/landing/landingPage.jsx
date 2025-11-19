import { useState, useRef } from "react";
import { RiCheckLine, RiMailLine } from "react-icons/ri";
import { div } from "three/tsl";
import Silk from "@/components/Silk";
import Hero from "@/components/Hero";
import { BsSun } from "react-icons/bs";
import StaggeredMenu from "@/components/StaggeredMenu";

const LandingPage = () => {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },

    { label: "About", ariaLabel: "Learn about us", link: "/about" },

    { label: "Services", ariaLabel: "View our services", link: "/services" },

    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },

    { label: "GitHub", link: "https://github.com" },

    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  const menuRef = useRef();

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={10}
          scale={1}
          color="#1C1C1C"
          noiseIntensity={0}
          rotation={2}
        />
      </div>

      {/* <div>
        <Hero />
      </div> */}

      <StaggeredMenu
        className="relative z-[999]"
        position="right"
        isFixed={false}
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#fff"
        openMenuButtonColor="black"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        logoUrl="/path-to-your-logo.svg"
        accentColor="#ff6b6b"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
    </div>
  );
};

export default LandingPage;
