import whyWeAreDiffImg1 from "../../../assets/whywearediffimg1.png";
import whyWeAreDiffImg2 from "../../../assets/whywearediffimg2.png";

const AdditionalFeaturesSection = () => {
  const card1 = {
    title: "Our Hybrid Capability Model",
    content: (
      <>
        <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-text-base lg:tw-text-lg tw-leading-relaxed tw-mb-4 md:pl-10">
          We integrate FM expertise with specialist partners to deliver real
          system-level understanding.
        </p>
        <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-text-base lg:tw-text-lg tw-leading-relaxed tw-mb-4 md:pl-10">
          Our hybrid approach ensures learners understand how systems are
          designed, built, operated, and sustained not just maintained.
        </p>
        <p className="tw-font-semibold tw-text-gray-800 dark:tw-text-gray-200 tw-text-base lg:tw-text-lg tw-mt-4 tw-mb-2 md:pl-10">
          This enables participants to:
        </p>
        <ul className="tw-list-none tw-space-y-2 tw-text-gray-700 dark:tw-text-gray-300 tw-text-base lg:tw-text-lg tw-leading-relaxed md:pl-10">
          <li className="tw-flex tw-items-start tw-gap-2 md:pl-10">
            <span className="tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-flex-shrink-0">
              •
            </span>
            <span>
              Understand the full asset lifecycle beyond routine maintenance
            </span>
          </li>
          <li className="tw-flex tw-items-start tw-gap-2 md:pl-10">
            <span className="tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-flex-shrink-0">
              •
            </span>
            <span>Align operations with original design intent</span>
          </li>
          <li className="tw-flex tw-items-start tw-gap-2 md:pl-10">
            <span className="tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-flex-shrink-0">
              •
            </span>
            <span>Support mobilisation and transition readiness</span>
          </li>
          <li className="tw-flex tw-items-start tw-gap-2 md:pl-10">
            <span className="tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-flex-shrink-0">
              •
            </span>
            <span>Monitor utilities and performance trends effectively</span>
          </li>
          <li className="tw-flex tw-items-start tw-gap-2 md:pl-10">
            <span className="tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-flex-shrink-0">
              •
            </span>
            <span>
              Contribute to operational decision-making before GO-LIVE
            </span>
          </li>
        </ul>
      </>
    ),
  };

  const card2 = {
    title: "Our Ecosystem Includes",
    bullets: [
      "CAFM Systems: QuickFMS",
      "Design & Construction Understanding: BIM, MEP basics, handover readiness",
      "Sustainability & ESG: Delivered with Green Mentor",
      "International Certifications: IFMA (FMP / CFM) via AMPM Learnings",
      "OEM & Specialist Inputs: Equipment, systems, and safety specialists",
    ],
  };

  return (
    <section className="tw-relative tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-py-12 max-md:tw-py-8">
      <div className="tw-w-full max-lg:tw-max-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[90%] xl:tw-max-w-[1200px] tw-gap-4 tw-p-4">
        <h3 className="reveal-up pt-20 tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal tw-text-[#19300e] dark:tw-text-[#c1fc75]">
          Why We Are Different (Hybrid Model)
        </h3>

        {/* Card 1: Image left, Content right — 50/50 */}
        <div className="why-diff-card reveal-up tw-mt-2 tw-w-full tw-rounded-lg tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-overflow-hidden tw-bg-[#f2f3f4] dark:tw-bg-black">
          <div className="why-diff-card__image ">
            <img src={whyWeAreDiffImg1} alt="Why We Are Different" />
          </div>
          <div className="why-diff-card__content">
            <h4 className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-10 md:pl-10">
              {card1.title}
            </h4>
            <div className="tw-text-gray-700 dark:tw-text-gray-300 tw-pt-1">
              {card1.content}
            </div>
          </div>
        </div>

        {/* Card 2: Content left, Image right — on mobile: image then content (same as card 1) */}
        <div className="why-diff-card why-diff-card--mobile-image-first reveal-up tw-mt-0 tw-w-full tw-rounded-lg tw-border tw-border-gray-200 dark:tw-border-[#1f2123] tw-overflow-hidden tw-bg-[#f2f3f4] dark:tw-bg-black">
          <div className="why-diff-card__content">
            <h4 className="tw-text-2xl tw-font-semibold tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-mb-4">
              {card2.title}
            </h4>
            <ul className="tw-list-none tw-space-y-2 tw-text-gray-700 dark:tw-text-gray-300 tw-text-base tw-leading-relaxed">
              {card2.bullets.map((bullet, idx) => (
                <li key={idx} className="tw-flex tw-items-start tw-gap-2">
                  <span className="tw-text-[#19300e] dark:tw-text-[#c1fc75] tw-flex-shrink-0">
                    •
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="why-diff-card__image">
            <img src={whyWeAreDiffImg2} alt="Our Ecosystem" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeaturesSection;
