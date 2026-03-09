import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./PixaLandingPage.css";

const TermsPage = () => {
  useEffect(() => {
    document.documentElement.classList.add("tw-dark");
    localStorage.setItem("color-mode", "dark");
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 100);
  }, []);

  return (
    <div className="pixa-landing-page tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-[#fcfcfc] tw-text-[#19300e] dark:tw-bg-black dark:tw-text-[#c1fc75]">
      <Header />

      <main className="tw-flex-1 tw-w-full" style={{ paddingTop: "200px" }}>
        <div className="tw-w-full tw-max-w-[1280px] tw-mx-auto tw-px-[5%] sm:tw-px-8 lg:tw-px-12 tw-py-16">
          {/* Page title */}
          <header className="terms-page-header tw-mb-16 tw-text-center">
            <h1 className="tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-tracking-tight tw-mb-4">
              Terms and Conditions & Policy
            </h1>
            <p className="tw-text-base sm:tw-text-lg tw-text-gray-600 dark:tw-text-gray-400 tw-max-w-2xl tw-mx-auto">
              Our Own FM Academy – Service terms and policies governing training, consultancy, and project guidance.
            </p>
          </header>

          {/* Terms and Conditions section */}
          <section className="terms-section tw-mb-20" aria-label="Terms and Conditions">
            <h2 className="terms-section-title tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-2 tw-pb-4 tw-border-b tw-border-gray-200 dark:tw-border-gray-700">
              Terms and Conditions
            </h2>
            <div className="terms-section-cards">
            <div className="tw-space-y-6 sm:tw-space-y-8">
              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  1. Nature of Services
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4 tw-leading-relaxed">
                  Our Own FM Academy provides services in the following areas:
                </p>
                <ul className="tw-list-disc tw-pl-6 tw-space-y-2 tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4">
                  <li>Facilities Management Training</li>
                  <li>Technical Consultancy</li>
                  <li>Project Guidance during design, construction, and handover stages</li>
                  <li>Operational Readiness Awareness</li>
                  <li>Lifecycle Performance Understanding</li>
                  <li>Maintenance Strategy Inputs</li>
                </ul>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-leading-relaxed">
                  All services are provided in the form of professional training, advisory, review, and guidance.
                </p>
              </article>

              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  2. Consultancy & Project Guidance Scope
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4 tw-leading-relaxed">
                  Consultancy and Project Guidance services may include:
                </p>
                <ul className="tw-list-disc tw-pl-6 tw-space-y-2 tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4">
                  <li>Review of MEP systems from an FM perspective</li>
                  <li>Maintainability and accessibility observations</li>
                  <li>Asset documentation guidance</li>
                  <li>Risk identification</li>
                  <li>Handover readiness awareness</li>
                  <li>Utility performance monitoring guidance</li>
                  <li>Lifecycle planning inputs</li>
                </ul>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-2 tw-leading-relaxed">
                  These services are advisory in nature and do not include execution, supervision, or certification.
                </p>
              </article>

              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  3. No Installation or Operational Responsibility
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4 tw-leading-relaxed">
                  Our Own FM Academy does not:
                </p>
                <ul className="tw-list-disc tw-pl-6 tw-space-y-2 tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4">
                  <li>Install systems</li>
                  <li>Commission equipment</li>
                  <li>Operate building services</li>
                  <li>Perform statutory inspections</li>
                  <li>Certify compliance</li>
                  <li>Undertake maintenance activities</li>
                </ul>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-leading-relaxed">
                  All implementation decisions remain the responsibility of the Client, Project Team, Contractor, or OEM.
                </p>
              </article>

              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  4. Outcome Responsibility
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4 tw-leading-relaxed">
                  The Academy shall not be held responsible for equipment performance, operational stability, system failures, energy performance, maintenance outcomes, installation workmanship, vendor execution, or asset lifecycle variations arising from implementation of consultancy or guidance inputs.
                </p>
              </article>

              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  5. Third-Party Execution
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4 tw-leading-relaxed">
                  Clients are advised to engage licensed consultants, OEM-authorised service providers, certified contractors, and statutory authorities for all installation, testing, commissioning, operation, maintenance, and compliance verification.
                </p>
              </article>

              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  6. Training Disclaimer
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4 tw-leading-relaxed">
                  Completion of any training programme, workshop, consultancy session, or project guidance engagement does not guarantee job placement, certification approval, system performance improvement, or compliance clearance. Training is intended for professional capability development.
                </p>
              </article>

              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  7. Estimates & Projections
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-leading-relaxed">
                  Any cost-saving estimate, lifecycle projection, performance improvement input, or maintenance optimisation guidance shared during training or consultancy are indicative only and may vary depending on site conditions and execution quality.
                </p>
              </article>

              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  8. Intellectual Property
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4 tw-leading-relaxed">
                  All training materials, consultancy frameworks, guidance formats, and assessment documents remain the intellectual property of Our Own FM Academy and may not be reproduced without written consent.
                </p>
              </article>
            </div>
            </div>
          </section>

          {/* Policy section */}
          <section className="terms-section tw-mb-20" aria-label="Policy">
            <h2 className="terms-section-title tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-2 tw-pb-4 tw-border-b tw-border-gray-200 dark:tw-border-gray-700">
              Policy
            </h2>
            <div className="terms-section-cards">
            <div className="tw-space-y-6 sm:tw-space-y-8">
              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  1. Training Policy
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4 tw-leading-relaxed">
                  Our training programmes are designed for knowledge development, technical awareness, professional capability enhancement, and operational understanding of Facilities Management systems. Training is educational in nature and does not include site execution or operational responsibility. Participants are expected to apply the knowledge gained in accordance with their organisation’s procedures and statutory requirements.
                </p>
              </article>

              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  2. Consultancy Policy
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4 tw-leading-relaxed">
                  Consultancy services are provided for system understanding, maintenance planning inputs, documentation readiness, operational risk awareness, and lifecycle performance considerations. All consultancy inputs are advisory recommendations based on experience and available information. Final implementation decisions shall be made by the Client or appointed project teams.
                </p>
              </article>

              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  3. Project Guidance Policy
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4 tw-leading-relaxed">
                  Project Guidance may include design-stage observations from FM perspective, handover readiness awareness, asset data structuring guidance, utility system performance inputs, and maintenance strategy alignment. This support is limited to review, awareness, and guidance. It does not constitute technical approval, statutory certification, commissioning authority, or installation supervision.
                </p>
              </article>

              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  4. Data & Information Policy
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-leading-relaxed">
                  Clients are responsible for accuracy of project data, availability of drawings, equipment documentation, asset registers, and utility performance records. Guidance provided by the Academy will depend on the information shared.
                </p>
              </article>

              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  5. Continuous Development Policy
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-mb-4 tw-leading-relaxed">
                  Our Own FM Academy promotes continuous learning, role-based capability development, early FM involvement awareness, lifecycle-focused maintenance understanding, and digital FM adoption awareness. All development programmes are intended to improve professional readiness within Facilities Management environments.
                </p>
              </article>

              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  6. External Engagement Policy
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-leading-relaxed">
                  Clients are encouraged to engage OEM representatives, licensed consultants, certified contractors, and statutory authorities for installation, testing, commissioning, operation, maintenance, and compliance verification.
                </p>
              </article>

              <article className="terms-card tw-rounded-2xl tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-bg-[#f2f3f4] dark:tw-bg-black tw-p-6 sm:tw-p-8 tw-shadow-sm">
                <h3 className="tw-text-lg sm:tw-text-xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
                  7. Ethical Learning Environment
                </h3>
                <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-leading-relaxed">
                  Training or consultancy engagements shall not involve live operational system manipulation, risky on-site experimentation, or unauthorised system interaction. All learning must be conducted in a controlled environment to protect operational assets.
                </p>
              </article>
            </div>
            </div>
          </section>

          {/* Footer disclaimer */}
          <aside className="terms-footer-disclaimer tw-rounded-2xl tw-border tw-border-[#19300e]/30 dark:tw-border-[#c1fc75]/30 tw-bg-[#19300e]/5 dark:tw-bg-[#c1fc75]/5 tw-p-6 sm:tw-p-8 tw-text-center">
            <p className="tw-text-sm sm:tw-text-base tw-text-gray-700 dark:tw-text-gray-300 tw-leading-relaxed tw-font-medium">
              Training, consultancy, and project guidance services are advisory in nature. Implementation and operational outcomes remain the responsibility of the Client and appointed service providers.
            </p>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
