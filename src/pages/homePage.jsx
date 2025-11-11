import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomePage = () => {
  const circle = useRef();

  const { contextSafe } = useGSAP(() => {});

  const onClick = contextSafe(() => {
    console.log("clickewd");
    gsap.to(circle.current, { x: 400, duration: 2, borderRadius: "50%" });
  });
  return (
    <div>
      <div ref={circle} className="w-100 h-100 bg-blue-700"></div>
      <button onClick={onClick}>cli8ck me</button>
    </div>
  );
};

export default HomePage;
