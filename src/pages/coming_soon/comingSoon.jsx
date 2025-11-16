import { useState } from "react";
import { RiCheckLine, RiMailLine } from "react-icons/ri";
import DarkVeil from "@/components/DarkVeil";

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");

  const handleNotify = (e) => {
    e.preventDefault();
    const subject = "Notify me about launch";
    const body = `Please notify me at ${
      email || "(your email here)"
    } when the site launches.`;
    const mailto = `mailto:info@ourownfm.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen min-w-screen relative">
      <DarkVeil speed={3} />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
        <div className="pointer-events-auto w-full max-w-xl rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Coming soon
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/80">
            We’re building modern facilities management solutions for better
            operations and outcomes.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <li className="flex items-start gap-2 text-white/80">
              <RiCheckLine className="mt-0.5 shrink-0" />
              SOPs and commissioning
            </li>
            <li className="flex items-start gap-2 text-white/80">
              <RiCheckLine className="mt-0.5 shrink-0" />
              Performance & cost optimization
            </li>
            <li className="flex items-start gap-2 text-white/80">
              <RiCheckLine className="mt-0.5 shrink-0" />
              Training & talent enablement
            </li>
          </ul>

          <form
            onSubmit={handleNotify}
            className="mt-6 flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="relative w-full">
              <RiMailLine className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-white/20 bg-white/10 text-white placeholder:text-white/60 pl-10 pr-4 py-3 outline-none focus:border-white/40"
                aria-label="Your email"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto rounded-full bg-white text-black px-6 py-3 font-semibold hover:opacity-90 transition"
            >
              Notify me
            </button>
          </form>

          <p className="mt-4 text-xs sm:text-sm text-white/70">
            Or email us directly at{" "}
            <a
              href="mailto:info@ourownfm.com"
              className="underline hover:no-underline"
            >
              info@ourownfm.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
