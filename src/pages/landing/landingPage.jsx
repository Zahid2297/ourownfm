import { useState } from "react";
import { RiCheckLine, RiMailLine } from "react-icons/ri";
import { div } from "three/tsl";
import Silk from "@/components/Silk";
import Hero from "@/components/Hero";
import GooeyNav from "@/components/GooeyNav";

const LandingPage = () => {
  const items = [
    { label: "Home", href: "/landing" },
    {
      label: "Services",
      href: "/services",
    },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "/contact-us" },
  ];
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

      <nav className="w-full h-26 bg-transparent flex justify-between items-center px-2 md:px-2 rounded-b-3xl shadow-xl/30 shadow-slate-100">
        <a href="https://ourownfm.com/">
          <img
            src="../logo1 white (2).png"
            alt="site logo"
            className="md:h-36 h-30 w-auto "
          />
        </a>
        {/* <ul className="md:flex font-semibold hidden">
          <li className="mx-[30px] cursor-pointer text-white">Home</li>
          <li className="mx-[30px] cursor-pointer text-white">Services</li>
          <li className="mx-[30px] cursor-pointer text-white">About Us</li>
          <li className="mx-[30px] cursor-pointer text-white">Contact Us</li>
        </ul> */}
        {/* relative h-14 flex items-center mt-4 hidden md:block */}
        <div className=" ">
          <GooeyNav
            items={items}
            particleCount={20}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
        <div className="hidden md:block px-5 py-1.5 mr-4 bg-gradient-to-r from-gray-500 via-transparent to-gray-500 hover:from-transparent hover:via-gray-500 hover:to-transparent text-white  rounded-xl font-bold cursor-pointer transition duration-300">
          Login
        </div>
      </nav>
    </div>
  );
};

export default LandingPage;
