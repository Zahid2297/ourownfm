const Footer = () => {
  return (
    <footer className="tw-mt-auto tw-flex tw-flex-col tw-w-full tw-gap-4 tw-text-sm tw-pt-[5%] tw-pb-10 tw-px-[10%] tw-text-[#19300e] dark:tw-text-[#c1fc75] max-md:tw-flex-col">
      <div className="tw-flex max-md:tw-flex-col max-md:tw-gap-6 tw-gap-3 tw-w-full tw-place-content-around">
        <div className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-place-items-center tw-gap-6 max-md:tw-w-full">
          <a href="#" className="tw-w-full tw-place-items-center tw-flex tw-flex-col tw-gap-6">
            <img
              src="/logo1 black.png"
              alt="Our Own FM Academy"
              className="tw-max-w-[120px] dark:tw-hidden"
            />
            <img
              src="/logo1 white (2).png"
              alt="Our Own FM Academy"
              className="tw-max-w-[120px] tw-hidden dark:tw-block"
            />
            <div className="tw-max-w-[120px] tw-text-center tw-text-xl tw-h-fit tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75]">Our Own FM Academy</div>
          </a>
          <div className="tw-flex tw-gap-4 tw-text-lg">
            <a href="https://github.com/abuzar-alvi" aria-label="Github">
              <i className="bi bi-github"></i>
            </a>
            <a href="#" aria-label="Twitter-X">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#" aria-label="Linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="tw-flex max-md:tw-flex-col tw-flex-wrap tw-gap-6 tw-h-full tw-w-full tw-justify-around">
          <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
            <h2 className="tw-text-xl tw-text-[#19300e] dark:tw-text-[#c1fc75]">Programs</h2>
            <div className="tw-flex tw-flex-col tw-gap-3">
              <a href="#training" className="footer-link">
                Training Programs
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
            <h2 className="tw-text-xl tw-text-[#19300e] dark:tw-text-[#c1fc75]">Company</h2>
            <div className="tw-flex tw-flex-col tw-gap-3">
              <a href="#about" className="footer-link">
                About Us
              </a>
              <a href="#collaborations" className="footer-link">
                Collaborations
              </a>
              <a href="#contact" className="footer-link">
                Contact
              </a>
              <a href="mailto:info@ourownfm.com" className="footer-link">
                Email: info@ourownfm.com
              </a>
            </div>
          </div>

          <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
            <h2 className="tw-text-xl tw-text-[#19300e] dark:tw-text-[#c1fc75]">Resources</h2>
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
      </div>

      <hr className="tw-mt-8" />
      <div className="tw-mt-2 tw-flex tw-gap-2 tw-flex-col tw-text-gray-700 dark:tw-text-gray-300 tw-place-items-center tw-text-[12px] tw-w-full tw-text-center tw-place-content-around">
        <span>Copyright &#169; 2024-2025 Our Own FM Academy. All rights reserved.</span>
        <span>Building a Skilled, Future-Ready Facilities Management Workforce</span>
      </div>
    </footer>
  );
};

export default Footer;

