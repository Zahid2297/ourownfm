const FeaturesSection = () => {
  const features = [
    {
      title: "Unified interface",
      description:
        "Our's is the only unified AI Interface tool brings together all your favorite chat models into one seamless platform. No more juggling between different AI systems—easily manage and interact with multiple chatbots from a single interface.",
      image: "/pixa-assets/images/home/interface.png",
    },
    {
      title: "API Access",
      description:
        "Pixa's LLM API offers advanced summarization, text generation, and question-answering. Easily integrate with support for JSON, HTML, Markdown, and plain text, enhancing your applications with powerful language tools.",
      image: "/pixa-assets/images/home/api.png",
    },
    {
      title: "Pre-built Tools",
      description:
        "Pixa offers pre-built AI integrations for diverse creative tasks including image, video, music, and PDF generation, simplifying advanced feature integration into your apps.",
      image: "/pixa-assets/images/home/integrations1.png",
    },
  ];

  return (
    <section className="tw-relative tw-flex tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">
      <div className="tw-mt-8 tw-flex tw-flex-col tw-w-full tw-h-full tw-place-items-center tw-gap-5">
        <div className="reveal-up tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center">
          <h2 className="tw-text-6xl tw-font-medium max-md:tw-text-3xl tw-p-2">
            Experience all the benefits of AI
          </h2>
        </div>
        <div className="tw-mt-6 tw-flex tw-flex-col tw-max-w-[1150px] max-lg:tw-max-w-full tw-h-full tw-p-4 max-lg:tw-place-content-center tw-gap-8">
          <div className="max-xl:tw-flex max-xl:tw-flex-col tw-place-items-center tw-grid tw-grid-cols-3 tw-gap-8 tw-place-content-center tw-auto-rows-auto">
            {features.map((feature, index) => (
              <div key={index} className="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
                <a
                  href="#"
                  className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex tw-flex-col tw-w-full tw-h-full tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-3xl hover:tw-scale-[1.02]"
                >
                  <div className="tw-w-full tw-flex tw-place-contet-center tw-min-h-[180px] tw-h-[180px] tw-rounded-xl tw-overflow-hidden">
                    <img
                      src={feature.image}
                      className="tw-w-full tw-h-auto tw-object-contain"
                      alt={feature.title}
                    />
                  </div>
                  <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">
                    {feature.title}
                  </h2>
                  <p className="tw-text-base tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                    {feature.description}
                  </p>
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="reveal-up tw-w-full md:tw-h-[350px] max-md:tw-min-h-[350px] tw-flex">
            <a
              href="#"
              className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex max-md:tw-flex-col tw-w-full tw-h-full tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-rounded-3xl hover:tw-scale-[1.02]"
            >
              <div className="tw-text-6xl tw-overflow-hidden tw-rounded-xl tw-w-full tw-h-full max-md:tw-h-[180px]">
                <img
                  src="/pixa-assets/images/home/ai-models.png"
                  className="tw-w-full tw-object-contain tw-h-full"
                  alt="AI models"
                />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-4">
                <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">
                  Multiple AI models
                </h2>
                <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                  Pixa supports various AI models, including ChatGPT, Gemini, Claude, Mistral and
                  more, providing a range of advanced capabilities for various language and
                  creative tasks.
                </p>
                <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                  <span>Learn more</span>
                  <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

