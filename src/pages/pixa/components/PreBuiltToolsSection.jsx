const PreBuiltToolsSection = () => {
  const tools = [
    {
      icon: "bi-code-square",
      title: "AI code generator",
      description:
        "AI code generation tools to create code from natural language or patterns, streamlining development and improving efficiency.",
    },
    {
      icon: "bi-file-pdf-fill",
      title: "PDF generator",
      description:
        "Use AI tools to automate PDF creation and content extraction, improving document management and data processing.",
    },
    {
      icon: "bi-image-fill",
      title: "Image generation",
      description:
        "Prebuilt AI tools for image generation create visuals from text or patterns, enhancing design and creative projects.",
    },
    {
      icon: "bi-bar-chart-line-fill",
      title: "AI Analytics",
      description:
        "Our AI analytics tools analyze data patterns and trends, providing actionable insights and enhancing decision-making.",
    },
    {
      icon: "bi-music-note-beamed",
      title: "Music generator",
      description:
        "Access our AI music generation tools create original compositions from input parameters, enabling effortless music creation for various needs.",
    },
    {
      icon: "bi-camera-video-fill",
      title: "Video generator",
      description:
        "Use our AI video generation tools create videos from text or templates, streamlining content creation and production.",
    },
  ];

  return (
    <section className="tw-relative tw-mt-10 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-items-center lg:tw-p-6">
      <div className="reveal-up tw-mt-[5%] tw-flex tw-h-full tw-w-full tw-place-content-center tw-gap-2 tw-p-4 max-lg:tw-max-w-full max-lg:tw-flex-col">
        <div className="tw-relative tw-flex tw-max-w-[30%] max-lg:tw-max-w-full tw-flex-col tw-place-items-start tw-gap-4 tw-p-2 max-lg:tw-place-items-center max-lg:tw-place-content-center max-lg:tw-w-full">
          <div className="tw-top-40 tw-flex tw-flex-col lg:tw-sticky tw-place-items-center tw-max-h-fit tw-max-w-[850px] max-lg:tw-max-h-fit max-lg:tw-max-w-[320px] tw-overflow-hidden">
            <h2 className="tw-text-5xl tw-font-serif tw-text-center tw-font-medium max-md:tw-text-3xl">
              Pre-built AI Tools
            </h2>
            <a
              href="http://"
              className="btn !tw-mt-8 !tw-bg-transparent !tw-text-black !tw-border-[1px] !tw-border-black dark:!tw-border-white dark:!tw-text-white"
            >
              Start Chat
            </a>
          </div>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-10 tw-h-full tw-max-w-1/2 max-lg:tw-max-w-full tw-px-[10%] max-lg:tw-px-4 max-lg:tw-gap-3 max-lg:tw-w-full lg:tw-top-[20%] tw-place-items-center">
          {tools.map((tool, index) => (
            <div key={index} className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <a
                href="#"
                className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg dark:tw-shadow-[#080808] tw-duration-300 tw-transition-all tw-p-8 tw-group/card"
              >
                <div className="tw-text-4xl max-md:tw-text-2xl">
                  <i className={tool.icon}></i>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">{tool.title}</h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                    {tool.description}
                  </p>
                  <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1 group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreBuiltToolsSection;

