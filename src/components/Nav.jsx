import { useState } from "react";
import { RiCheckLine, RiMailLine } from "react-icons/ri";
import { div } from "three/tsl";
import Silk from "@/components/Silk";

const Nav = () => {
  const items = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
    },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "/contact-us" },
  ];
  return (
    <div className="h-screen relative overflow-hidden">
      <nav className="w-full h-26 bg-transparent flex justify-between items-center px-2 md:px-2 rounded-b-3xl shadow-xl/30 shadow-slate-100">
        <a href="https://ourownfm.com/">
          <img
            src="../logo1 white (2).png"
            alt="site logo"
            className="md:h-36 h-30 w-auto "
          />
        </a>
        <ul className="md:flex font-semibold hidden">
          <li className="mx-[30px] cursor-pointer text-white">Home</li>
          <li className="mx-[30px] cursor-pointer text-white">Services</li>
          <li className="mx-[30px] cursor-pointer text-white">About Us</li>
          <li className="mx-[30px] cursor-pointer text-white">Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
