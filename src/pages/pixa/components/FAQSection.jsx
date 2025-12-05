import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What's Pixa playground?",
      answer:
        "Pixa's playground is an integrated webapp to seamlessly test different LLM models such as GPT4, Claude, Gemini, etc.",
    },
    {
      question: "What are LLM?",
      answer:
        "LLM stands for 'Large Language Model.' It's a type of artificial intelligence model trained on vast amounts of text data to understand and generate human-like text. These models, like GPT-4, can perform various tasks, such as answering questions, generating content, translating languages, and more, by leveraging patterns learned from the data they were trained on.",
    },
    {
      question: "Where can I test different AI models?",
      answer:
        "You can use Pixa's AI Playground to test different models, including GPT4, Claude, Perplexity and more.",
    },
    {
      question: "Is Pixa Free to use?",
      answer:
        "You can start using Pixa for free, and later upgrade your plan to access all its features.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="tw-relative tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%]">
      <h3 className="tw-text-4xl tw-font-medium max-md:tw-text-2xl">Faq</h3>
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

