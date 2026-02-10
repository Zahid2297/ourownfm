import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(true);
  const collapseHeaderItemsRef = useRef(null);
  const RESPONSIVE_WIDTH = 1024;

  useEffect(() => {
    // Force dark mode always - dark mode is the only mode
    document.documentElement.classList.add("tw-dark");
    localStorage.setItem("color-mode", "dark");
    
    // Update favicon to dark mode
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/pixa-assets/logo/logo-dark.png";
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

  const toggleHeader = () => {
    setIsHeaderCollapsed(!isHeaderCollapsed);
    if (!isHeaderCollapsed) {
      document.body.classList.remove("modal-open");
    } else {
      document.body.classList.add("modal-open");
    }
  };

  return (
    <header className="lg:tw-px-4 tw-max-w-[100vw] max-lg:tw-mr-auto max-lg:tw-top-0 tw-fixed tw-top-0 lg:tw-left-1/2 lg:tw--translate-x-1/2 tw-z-20 tw-flex tw-items-center tw-min-h-[65px] tw-h-[65px] tw-w-full tw-text-gray-700 tw-bg-[#f2f3f4] dark:tw-text-gray-200 dark:tw-bg-[#080808] tw-px-[3%] tw-py-2 tw-rounded-md lg:tw-max-w-6xl tw-shadow-md dark:tw-shadow-gray-700 lg:tw-justify-around lg:!tw-backdrop-blur-lg lg:tw-opacity-[0.99]">
      <Link
        className="tw-flex tw-py-2 tw-px-2 tw-gap-0 tw-place-items-center"
        to="/pixa"
      >
        <div className="header-logo-container">
          <img
            src="/logo1 dark.png"
            alt="Our Own FM Academy"
            className="tw-object-contain tw-h-full tw-w-full"
          />
        </div>
        {/* <span
          className="tw-uppercase tw-font-medium tw-leading-none"
          style={{ fontSize: "11px", marginLeft: "-22px" }}
        >
          OUROWN FM ACADEMY
        </span> */}
      </Link>
      <div
        ref={collapseHeaderItemsRef}
        className={`collapsible-header animated-collapse max-lg:tw-shadow-md ${
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
        <nav className="tw-relative tw-flex tw-h-full max-lg:tw-h-max tw-w-max tw-gap-5 tw-text-base max-lg:tw-mt-[30px] max-lg:tw-flex-col max-lg:tw-gap-5 lg:tw-mx-auto tw-place-items-center">
          <Link className="header-links" to="/pixa">
            Home
          </Link>
          <Link className="header-links" to="/about">
            About
          </Link>
          <a className="header-links" href="#courses">
            Courses
          </a>
          <a className="header-links" href="#certifications">
            Certifications
          </a>
          <a
            className="header-links nav-hover-item tw-relative"
            href="https://wa.me/916364807896"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="nav-default">Contact</span>
            <span className="nav-hover">WhatsApp</span>
          </a>
          <a className="header-links" href="#consultancy">
            Consultancy
          </a>
        </nav>
        <div className="lg:tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full max-md:tw-flex-col max-md:tw-place-content-center">
          <a
            href="#contact"
            aria-label="Connect with us"
            className="btn tw-flex tw-gap-3 tw-px-3 tw-py-2 tw-transition-transform tw-duration-[0.3s] hover:tw-translate-x-2"
          >
            <span>Get Started</span>
            <i className="bi bi-arrow-right"></i>
          </a>
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
