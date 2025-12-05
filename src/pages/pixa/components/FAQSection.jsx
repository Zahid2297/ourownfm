import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Facilities Management (FM)?",
      answer:
        "Facilities Management (FM) is the practice of coordinating people, places, processes, and technology to ensure the functionality, comfort, safety, and efficiency of the built environment. It includes both hard FM (technical services like HVAC, electrical, plumbing) and soft FM (services like cleaning, security, catering).",
    },
    {
      question: "Who can enroll in your training programs?",
      answer:
        "Our training programs are designed for everyone — from fresh graduates to working professionals. We especially welcome those switching careers, professionals from small towns, and anyone looking to build a career in FM. No prior experience is required for our fundamental courses.",
    },
    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes! We offer placement support for India and GCC markets. This includes resume development, interview preparation, job matching through our partner network, and GCC recruitment coordination. We support placements for Facility Executives, Managers, Engineers, Supervisors, Coordinators, and more.",
    },
    {
      question: "What makes your training different from other FM courses?",
      answer:
        "Our training is designed by industry practitioners, focuses on practical and digital-first FM skills, includes real-world learning through site visits, and provides continuous mentorship beyond the classroom. We emphasize hands-on experience with CAFM, BIM, IoT, and other modern FM tools.",
    },
    {
      question: "Are site visits included in the training?",
      answer:
        "Yes! All students receive 2–4 structured site visits to commercial buildings, industrial plants, hospitals, and universities. These include audits, data collection, equipment study, and SOP review to provide real-world learning experience.",
    },
    {
      question: "What certifications do you offer?",
      answer:
        "We offer certifications for each training module, including FM Operations Certificate, Digital FM Specialist, HSE Compliance Certificate, FM Leadership Certificate, Sustainability Practitioner, and FM Finance Essentials. We also provide IFMA FMP/CFM preparation courses.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="tw-relative tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%]">
      <h3 className="tw-text-4xl tw-font-medium max-md:tw-text-2xl">Frequently Asked Questions</h3>
      <div className="tw-mt-5 tw-flex tw-min-h-[300px] tw-w-full tw-max-w-[850px] tw-flex-col tw-gap-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div className="faq tw-w-full">
              <h4
                className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <i
                  className={`bi bi-plus tw-text-xl tw-origin-center tw-duration-300 tw-transition-transform tw-ml-auto tw-font-semibold ${
                    openIndex === index ? "tw-rotate-45" : ""
                  }`}
                ></i>
              </h4>
              <div
                className="content max-lg:tw-text-sm"
                style={{
                  maxHeight: openIndex === index ? "240px" : "0px",
                  padding: openIndex === index ? "20px 18px" : "0px 18px",
                }}
              >
                {faq.answer}
              </div>
            </div>
            {index < faqs.length - 1 && <hr />}
          </div>
        ))}
      </div>
      <div className="purple-bg-grad max-md:tw-hidden reveal-up tw-absolute tw-bottom-14 tw-right-[20%] tw-h-[150px] tw-w-[150px] tw-rounded-full"></div>
    </section>
  );
};

export default FAQSection;

