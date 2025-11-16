import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";

const NotFound = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
      <header className="fixed w-full top-0 left-0 z-10 bg-transparent">
        <nav className="h-14 sm:h-16 mx-auto max-w-7xl px-6 flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight">
            OurOwnFM
          </Link>
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="text-xl"
            >
              <RiMenu2Line />
            </button>
          </div>
          <ul className="hidden md:flex items-center gap-10">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <a href="mailto:info@ourownfm.com" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={`md:hidden fixed left-0 w-full bg-neutral-100 dark:bg-neutral-900 rounded-b-2xl shadow transition-transform duration-300 ${
            open ? "top-0" : "-top-full"
          }`}
        >
          <div className="relative pt-14 pb-8">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-4 text-2xl"
            >
              <RiCloseLine />
            </button>
            <ul className="flex flex-col items-center gap-6">
              <li>
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@ourownfm.com"
                  onClick={() => setOpen(false)}
                  className="font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main role="main" className="flex-1 grid">
        <section className="grid content-center pt-24 sm:pt-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="text-center md:text-left">
                <span className="inline-block opacity-80">Error 404</span>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-3">
                  Hey Buddy
                </h1>
                <p className="mt-3">
                  We can&apos;t seem to find the page <br /> you are looking
                  for.
                </p>
                <div className="mt-8">
                  <Link
                    to="/"
                    className="inline-block rounded-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 font-semibold hover:shadow-md transition"
                  >
                    Go Home
                  </Link>
                </div>
              </div>
              <div className="justify-self-center">
                <img
                  src="/ghost-img.png"
                  alt="Ghost illustration"
                  className="w-[230px] md:w-[400px] animate-[floaty_1.8s_infinite_alternate]"
                />
                <div className="w-[130px] h-6 md:w-[250px] md:h-10 bg-black/10 dark:bg-white/10 mx-auto rounded-full blur animate-[shadowPulse_1.8s_infinite_alternate]" />
              </div>
            </div>
          </div>
          <footer className="flex justify-center items-center gap-2 text-xs sm:text-sm mt-10 pb-6">
            <span>+91 63648 07896</span>
            <span>|</span>
            <a href="mailto:info@ourownfm.com" className="hover:underline">
              info@ourownfm.com
            </a>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default NotFound;
