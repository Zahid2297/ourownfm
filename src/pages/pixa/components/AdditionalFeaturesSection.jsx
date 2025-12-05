const AdditionalFeaturesSection = () => {
  const features = [
    {
      image: "/pixa-assets/images/home/prompts2.png",
      title: "Prompt Library",
      description:
        "Forget about writing your own prompt, use the prompt templates and supercharge your workflow.",
    },
    {
      image: "/pixa-assets/images/home/search.png",
      title: "Real-time web search",
      description:
        "Our Real-time web search AI Bot provides instant, live search results directly within the AI chat playground.",
    },
    {
      image: "/pixa-assets/images/home/image.png",
      title: "Image Generation",
      description:
        "Generate Image instantly from multiple models, create visuals from text descriptions or templates.",
    },
    {
      image: "/pixa-assets/images/home/history.png",
      title: "History",
      description:
        "All of the models can recall previous topic, so you can continue your conversation at any point of time.",
    },
    {
      image: "/pixa-assets/images/home/import.png",
      title: "Import content",
      description:
        "Effortlessly import PDFs, images, and documents. Use AI to ask questions, extract information, and summarize documents.",
    },
    {
      image: "/pixa-assets/images/home/multilingual.png",
      title: "Multilingual support",
      description:
        "ChatGPT, and Gemini can understand and respond in over 100 languages.",
    },
  ];

  return (
    <section className="tw-relative tw-flex tw-w-full tw-min-h-[110vh] max-md:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">
      <div className="tw-w-full max-lg:tw-max-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">
        <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal">
          Additional Features
        </h3>

        <div className="tw-mt-8 tw-relative tw-gap-10 tw-p-4 tw-grid tw-place-items-center tw-grid-cols-3 max-lg:tw-flex max-lg:tw-flex-col">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal-up tw-w-full tw-border-[1px] tw-h-[350px] tw-rounded-md tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3"
            >
              <div className="tw-w-full tw-h-[150px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="tw-w-auto tw-h-full tw-object-contain"
                />
              </div>
              <h3 className="tw-text-2xl">{feature.title}</h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeaturesSection;

