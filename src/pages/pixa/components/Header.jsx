import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(true);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const collapseHeaderItemsRef = useRef(null);
  const navDropdownRef = useRef(null);
  const RESPONSIVE_WIDTH = 1024;

  useEffect(() => {
    // Check initial dark mode
    const colorMode = localStorage.getItem("color-mode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = colorMode === "dark" || (!colorMode && prefersDark);
    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("tw-dark");
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

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("tw-dark");
    localStorage.setItem("color-mode", newMode ? "dark" : "light");
    updateFavicon(newMode);
  };

  const updateFavicon = (isDark) => {
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = isDark
        ? "/pixa-assets/logo/logo-dark.png"
        : "/pixa-assets/logo/logo-light.png";
    }
  };

  const toggleNavDropdown = () => {
    setIsNavDropdownOpen(!isNavDropdownOpen);
  };

  const closeNavDropdown = () => {
    setIsNavDropdownOpen(false);
  };

  return (
    <header className="lg:tw-px-4 tw-max-w-[100vw] max-lg:tw-mr-auto max-lg:tw-top-0 tw-fixed tw-top-4 lg:tw-left-1/2 lg:tw--translate-x-1/2 tw-z-20 tw-flex tw-h-[60px] tw-w-full tw-text-gray-700 tw-bg-[#f2f3f4] dark:tw-text-gray-200 dark:tw-bg-[#080808] tw-px-[3%] tw-rounded-md lg:tw-max-w-5xl tw-shadow-md dark:tw-shadow-gray-700 lg:tw-justify-around lg:!tw-backdrop-blur-lg lg:tw-opacity-[0.99]">
      <a className="tw-flex tw-p-[4px] tw-gap-0 tw-place-items-center" href="#">
        <div className="tw-h-[35px] tw-max-w-[100px]">
          {!isDarkMode ? (
            <img
              src="/logo1 black.png"
              alt="Our Own FM Academy"
              className="tw-object-contain tw-h-full tw-w-full"
            />
          ) : (
            <img
              src="/logo1 white (2).png"
              alt="Our Own FM Academy"
              className="tw-object-contain tw-h-full tw-w-full"
            />
          )}
        </div>
        <span
          className="tw-uppercase tw-font-medium tw-leading-none"
          style={{ fontSize: "11px", marginLeft: "-22px" }}
        >
          OUROWN FM ACADEMY
        </span>
      </a>
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
          <a className="header-links" href="#training">
            Training
          </a>
          <a className="header-links" href="#consultancy">
            Consultancy
          </a>
          <a className="header-links tw-relative" href="#about">
            About
            <div
              className="tw-absolute tw-left-[calc(100%+1.25rem)] tw-top-0 tw-w-[50px] tw-h-full tw-cursor-pointer tw-z-10"
              onClick={toggleNavDropdown}
            ></div>
          </a>
          {isNavDropdownOpen && (
            <nav
              ref={navDropdownRef}
              className="tw-absolute tw-left-0 tw-top-full tw-scale-0 tw-opacity-0 lg:tw-fixed tw-flex lg:tw-top-[80px] lg:tw-left-1/2 lg:tw--translate-x-1/2 tw-w-[90%] tw-rounded-lg max-lg:tw-h-0 max-lg:tw-w-0 lg:tw-h-[450px] tw-overflow-hidden tw-bg-white dark:tw-bg-[#17181B] tw-duration-300 tw-transition-opacity tw-transition-height tw-shadow-lg tw-p-4 tw-opacity-100 tw-scale-100 max-lg:tw-min-h-[450px] max-lg:!tw-h-fit tw-min-w-[320px]"
            >
              <div className="tw-grid max-xl:tw-flex max-xl:tw-flex-col tw-justify-around tw-grid-cols-2 tw-w-full">
                <a
                  className="header-links tw-items-center tw-flex tw-text-left tw-gap-4 !tw-p-4"
                  href="#training"
                >
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-book"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-font-medium">
                      Training Programs
                    </div>
                    <p>Industry-aligned FM training modules</p>
                  </div>
                </a>

                <a
                  className="header-links tw-items-center tw-flex tw-text-left tw-gap-4 !tw-p-4"
                  href="#consultancy"
                >
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-font-medium">
                      Consultancy Services
                    </div>
                    <p>Operational audit, technology integration, ESG</p>
                  </div>
                </a>

                <a
                  className="header-links tw-items-center tw-flex tw-text-left tw-gap-4 !tw-p-4"
                  href="#project-guidance"
                >
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-diagram-3"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-font-medium">
                      Project Guidance
                    </div>
                    <p>End-to-end FM project support</p>
                  </div>
                </a>

                <a
                  className="header-links tw-items-center tw-flex tw-text-left tw-gap-4 !tw-p-4"
                  href="#sustainability"
                >
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-leaf"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-font-medium">
                      Sustainability Solutions
                    </div>
                    <p>Energy optimization, green building advisory</p>
                  </div>
                </a>

                <a
                  className="header-links tw-items-center tw-flex tw-text-left tw-gap-4 !tw-p-4"
                  href="#placements"
                >
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-font-medium">
                      Placement Assistance
                    </div>
                    <p>Career support for India & GCC</p>
                  </div>
                </a>

                <a
                  className="header-links tw-items-center tw-flex tw-text-left tw-gap-4 !tw-p-4"
                  href="#collaborations"
                >
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-handshake"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-font-medium">
                      Collaborations
                    </div>
                    <p>Partners: Factech, VDEI, MEP experts</p>
                  </div>
                </a>
              </div>
            </nav>
          )}
          <a className="header-links" href="#contact">
            Contact
          </a>
        </nav>
        <div className="lg:tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full max-md:tw-flex-col max-md:tw-place-content-center">
          <button
            type="button"
            onClick={toggleMode}
            className="header-links tw-text-gray-600 dark:tw-text-gray-300"
            title="toggle-theme"
          >
            <i className={`bi ${isDarkMode ? "bi-moon" : "bi-sun"}`}></i>
          </button>
          <a
            href="#contact"
            aria-label="Connect with us"
            className="btn tw-flex tw-gap-3 tw-px-3 tw-py-2 tw-transition-transform tw-duration-[0.3s] hover:tw-translate-x-2"
          >
            <span>Connect</span>
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
