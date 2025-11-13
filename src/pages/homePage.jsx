import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomePage = () => {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-sky-100 font-sans p-6"
      role="main"
      aria-labelledby="uc-title"
    >
      <div className="max-w-2xl text-center">
        <h1
          id="uc-title"
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
        >
          Website Under Construction
        </h1>

        <p className="text-lg md:text-xl text-sky-200 mb-6">
          We're building something awesome — check back soon.
        </p>

        <div
          className="flex items-center justify-center space-x-3 mb-6"
          aria-hidden="true"
        >
          <span className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" />
          <span
            className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.12s" }}
          />
          <span
            className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.24s" }}
          />
        </div>

        <p className="text-sm text-sky-300">
          Contact:{" "}
          <a
            href="mailto:support@example.com"
            className="underline hover:text-sky-100"
          >
            info@ourownfm.com
          </a>
        </p>
      </div>
    </main>
  );
};

export default HomePage;
