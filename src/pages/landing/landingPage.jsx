import { useState } from "react";
import { RiCheckLine, RiMailLine } from "react-icons/ri";
import { div } from "three/tsl";
import Silk from "@/components/Silk";
import Hero from "@/components/Hero";

const LandingPage = () => {
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
        <ul className="md:flex font-semibold hidden">
          <li className="mx-[10px] cursor-pointer text-white">Home</li>
          <li className="mx-[10px] cursor-pointer text-white">Services</li>
          <li className="mx-[10px] cursor-pointer text-white">About Us</li>
          <li className="mx-[10px] cursor-pointer text-white">Contact Us</li>
        </ul>
        <div className="hidden md:block px-8 py-1.5 mr-4 bg-gradient-to-r from-gray-500 via-black to-gray-500 hover:from-black hover:via-gray-500 hover:to-black  text-white  rounded-2xl font-bold cursor-pointer transition duration-300">
          Login
        </div>
      </nav>
    </div>
  );
};

export default LandingPage;
