const Footer = () => {
  return (
    <footer className="tw-mt-auto tw-flex tw-flex-col tw-w-full tw-gap-4 tw-text-sm tw-pt-[5%] tw-pb-10 tw-px-[10%] tw-text-[#19300e] dark:tw-text-[#c1fc75] max-md:tw-flex-col">
      <div className="tw-flex max-md:tw-flex-col max-md:tw-gap-6 tw-gap-4 tw-w-full tw-justify-between">
        <div className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-place-items-center tw-gap-6 max-md:tw-w-full">
          <a
            href="#"
            className="tw-w-full tw-place-items-center tw-flex tw-flex-col tw-gap-6"
          >
            <img
              src="/logo1 dark.png"
              alt="Our Own FM Academy"
              className="tw-max-w-[200px]"
            />
          </a>
          <div className="tw-flex tw-gap-4 tw-text-lg tw-text-[#19300e] dark:tw-text-white">
            <a
              href="#"
              aria-label="LinkedIn"
              className="tw-text-[#19300e] dark:tw-text-white"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="tw-text-[#19300e] dark:tw-text-white"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="tw-text-[#19300e] dark:tw-text-white"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>

          <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
          <h2 className="tw-text-xl tw-text-[#19300e] dark:tw-text-[#c1fc75]">
            Programs
          </h2>
            <div className="tw-flex tw-flex-col tw-gap-3">
              <a href="#courses" className="footer-link">
                Courses
              </a>
              <a href="#certifications" className="footer-link">
                Certifications
              </a>
              <a href="#consultancy" className="footer-link">
                Consultancy Services
              </a>
              <a href="#project-guidance" className="footer-link">
                Project Guidance
              </a>
              <a href="#sustainability" className="footer-link">
                Sustainability Solutions
              </a>
              <a href="#placements" className="footer-link">
                Placement Assistance
              </a>
            </div>
          </div>

          <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
          <h2 className="tw-text-xl tw-text-[#19300e] dark:tw-text-[#c1fc75]">
            Company
          </h2>
            <div className="tw-flex tw-flex-col tw-gap-3">
              <a href="#about" className="footer-link">
                About Us
              </a>
              <a href="#collaborations" className="footer-link">
                Collaborations
              </a>
            <a
              href="https://wa.me/916364807896"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              WhatsApp
            </a>
            <a href="tel:+916364807896" className="footer-link">
              Contact: +91 6364 807 896
              </a>
              <a href="mailto:info@ourownfm.com" className="footer-link">
                Email: info@ourownfm.com
              </a>
            <div className="footer-link tw-text-[#19300e] dark:tw-text-white">
              Address: 1st Floor, Rehmat Nagar, Near P & T Quarters, Kalaburagi,
              Karnataka, India
            </div>
            </div>
          </div>

          <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
          <h2 className="tw-text-xl tw-text-[#19300e] dark:tw-text-[#c1fc75]">
            Resources
          </h2>
            <div className="tw-flex tw-flex-col tw-gap-3">
              <a href="#faq" className="footer-link">
                FAQ
              </a>
              <a href="#" className="footer-link">
                Terms of service
              </a>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
          </div>
        </div>
      </div>

      <hr className="tw-mt-8" />
      <div className="tw-mt-2 tw-flex tw-gap-2 tw-flex-col tw-text-gray-700 dark:tw-text-gray-300 tw-place-items-center tw-text-[12px] tw-w-full tw-text-center tw-place-content-around">
        <span>
          Copyright &#169; 2024-2025 Our Own FM Academy. All rights reserved.
        </span>
        <span>
          Building a Skilled, Future-Ready Facilities Management Workforce
        </span>
      </div>
    </footer>
  );
};

export default Footer;
