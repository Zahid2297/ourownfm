import Nav from "@/components/Nav";
import { useState } from "react";
import { RiCheckLine, RiMailLine } from "react-icons/ri";
import Silk from "@/components/Silk";

const ServicePage = () => {
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

      <div>
        <Nav />
      </div>
    </div>
  );
};

export default ServicePage;
