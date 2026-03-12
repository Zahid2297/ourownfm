import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const SERVICES = [
  { label: "Training", to: "/courses" },
  { label: "Consultancy", to: "/#consultancy" },
  { label: "Project Guidance", to: "/#project-guidance" },
];

const Header = () => {
  const location = useLocation();
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(true);

  const scrollToTop = (e) => {
    if (location.pathname === "/" || location.pathname === "/pixa") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const collapseHeaderItemsRef = useRef(null);
  const RESPONSIVE_WIDTH = 1024;

  useEffect(() => {
    // Force dark mode always - dark mode is the only mode
    document.documentElement.classList.add("tw-dark");
    localStorage.setItem("color-mode", "dark");

    // Update favicon to dark mode
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/favicon.png";
    }

    // Handle responsive
    const handleResize = () => {
      if (window.innerWidth > RESPONSIVE_WIDTH) {
        if (collapseHeaderItemsRef.current) {
          collapseHeaderItemsRef.current.style.height = "";
        }
        if (!isHeaderCollapsed) {
          setIsHeaderCollapsed(true);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // On route change (mobile): close nav overlay and remove modal-open so page works
  useEffect(() => {
    setIsHeaderCollapsed(true);
    document.body.classList.remove("modal-open");
    if (collapseHeaderItemsRef.current) {
      collapseHeaderItemsRef.current.style.height = "";
    }
  }, [location.pathname]);

  const toggleHeader = () => {
    setIsHeaderCollapsed(!isHeaderCollapsed);
    if (!isHeaderCollapsed) {
      document.body.classList.remove("modal-open");
    } else {
      document.body.classList.add("modal-open");
    }
  };

  const closeMobileMenu = () => {
    setIsHeaderCollapsed(true);
    document.body.classList.remove("modal-open");
    if (collapseHeaderItemsRef.current) {
      collapseHeaderItemsRef.current.style.height = "";
    }
  };

  return (
    <header className="lg:tw-px-4 tw-max-w-[100vw] max-lg:tw-mr-auto max-lg:tw-top-0 tw-fixed tw-top-0 lg:tw-left-1/2 lg:tw--translate-x-1/2 tw-z-20 tw-flex tw-items-center tw-min-h-[65px] tw-h-[65px] tw-w-full tw-text-gray-700 tw-bg-[#f2f3f4] dark:tw-text-gray-200 dark:tw-bg-[#080808] tw-px-[3%] tw-py-2 tw-rounded-md lg:tw-max-w-6xl tw-shadow-md dark:tw-shadow-gray-700 lg:tw-justify-around lg:!tw-backdrop-blur-lg lg:tw-opacity-[0.99]">
      <Link
        className="tw-flex tw-py-2 tw-px-2 tw-gap-0 tw-place-items-center"
        to="/"
        onClick={scrollToTop}
      >
        <div className="header-logo-container">
          <img
            src="/logo1 dark.png"
            alt="Our Own FM Academy"
            className="tw-object-contain tw-h-full tw-w-full"
          />
        </div>
      </Link>
      <div
        ref={collapseHeaderItemsRef}
        className={`collapsible-header animated-collapse max-lg:tw-absolute max-lg:tw-left-0 max-lg:tw-top-full max-lg:tw-z-40 max-lg:tw-w-full max-lg:tw-bg-[#080808] max-lg:tw-shadow-md ${
          isHeaderCollapsed
            ? "max-lg:tw-opacity-0 max-lg:tw-h-0"
            : "max-lg:!tw-opacity-100 max-lg:tw-min-h-[90vh]"
        }`}
        style={{
          height: isHeaderCollapsed
            ? window.innerWidth < RESPONSIVE_WIDTH
              ? "0vh"
              : ""
            : window.innerWidth < RESPONSIVE_WIDTH
              ? "90vh"
              : "",
        }}
      >
        <nav className="tw-relative tw-flex tw-h-full max-lg:tw-h-max tw-w-max tw-gap-5 tw-text-base max-lg:tw-mt-[30px] max-lg:tw-w-full max-lg:tw-flex-col max-lg:tw-gap-4 max-lg:tw-px-6 lg:tw-mx-auto tw-place-items-center">
          <Link
            className="header-links mobile-nav-link"
            to="/"
            onClick={(e) => {
              scrollToTop(e);
              closeMobileMenu();
            }}
          >
            Home
          </Link>
          <Link className="header-links mobile-nav-link" to="/about" onClick={closeMobileMenu}>
            About
          </Link>
          {/* Desktop: Our Services hover dropdown */}
          <div
            className="header-services-menu tw-relative max-lg:tw-hidden lg:tw-flex lg:tw-items-center lg:tw-self-stretch"
          >
            <button
              type="button"
              className="header-links header-services-trigger tw-flex tw-h-full tw-items-center tw-gap-1 tw-border-0 tw-bg-transparent tw-text-inherit tw-font-inherit tw-leading-none"
              aria-haspopup="true"
            >
              Our Services
              <i className="bi bi-chevron-down header-services-chevron tw-text-xs tw-transition-transform tw-duration-200" />
            </button>
            {/* Standard desktop dropdown menu */}
            <div
              className="header-services-dropdown tw-absolute tw-left-1/2 tw-top-[calc(100%+14px)] tw-z-50 tw-flex tw-min-w-[250px] tw--translate-x-1/2 tw-flex-col tw-gap-2 tw-overflow-hidden tw-rounded-2xl tw-border tw-border-white/10 tw-bg-black tw-p-4 tw-shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
            >
              {SERVICES.map(({ label, to }) => (
                <Link
                  key={to}
                  className="tw-flex tw-w-full tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-xl tw-px-6 tw-py-4 tw-text-center tw-text-[15px] tw-font-medium tw-leading-none tw-text-[#d7dfdf] tw-transition-colors tw-duration-150 hover:tw-bg-white/8 hover:tw-text-[#c1fc75]"
                  to={to}
                  onClick={closeMobileMenu}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile only: show all services as separate links (hidden on desktop lg+) */}
          <div className="lg:tw-hidden max-lg:tw-flex max-lg:tw-w-full max-lg:tw-flex-col max-lg:tw-gap-4">
            {SERVICES.map(({ label, to }) => (
              <Link
                key={`mobile-${to}`}
                className="header-links mobile-nav-link"
                to={to}
                onClick={closeMobileMenu}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link className="header-links mobile-nav-link" to="/#certifications" onClick={closeMobileMenu}>
            Certifications
          </Link>
          <a
            className="header-links mobile-nav-link nav-hover-item tw-relative"
            href="https://wa.me/916364807896"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            <span className="nav-default">Contact</span>
            <span className="nav-hover">WhatsApp</span>
          </a>
        </nav>
        <div className="lg:tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full max-md:tw-flex-col max-md:tw-place-content-center">
          <Link
            to="/#contact"
            aria-label="Connect with us"
            className="btn tw-flex tw-gap-3 tw-px-3 tw-py-2 tw-transition-transform tw-duration-[0.3s] hover:tw-translate-x-2"
            onClick={closeMobileMenu}
          >
            <span>Get Started</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
      <button
        className={`${
          isHeaderCollapsed ? "bi bi-list" : "bi bi-x"
        } tw-absolute tw-right-3 tw-top-3 tw-z-50 tw-text-3xl tw-text-gray-500 lg:tw-hidden`}
        onClick={toggleHeader}
        aria-label="menu"
        id="collapse-btn"
      ></button>
    </header>
  );
};

export default Header;
