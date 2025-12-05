const PricingSection = () => {
  const plans = [
    {
      price: "$9",
      period: "/mo",
      description: "Essential AI tools for everyday use",
      features: [
        { text: "1,000 AI powered chat messages", included: true },
        { text: "30 premium image generations", included: true },
        { text: "10 premium music generation", included: true },
        { text: "Access to all premium AI models", included: false },
        { text: "Early access to new features", included: false },
      ],
      highlighted: false,
    },
    {
      price: "$17",
      period: "/mo",
      description: "Advanced features for serious AI enthusiasts.",
      features: [
        { text: "5,000 AI powered chat messages", included: true },
        { text: "100 premium image generations", included: true },
        { text: "40 premium music generation", included: true },
        { text: "Access to all premium AI models", included: true },
        { text: "Early access to new features", included: false },
      ],
      highlighted: true,
    },
    {
      price: "$29",
      period: "/mo",
      description: "Unlimited potential for power users",
      features: [
        { text: "10,000 AI powered chat messages", included: true },
        { text: "300 premium image generations", included: true },
        { text: "100 premium music generations", included: true },
        { text: "Access to all premium AI models", included: true },
        { text: "Early access to new features", included: true },
      ],
      highlighted: false,
    },
  ];

  return (
    <section
      className="tw-mt-5 tw-flex tw-w-full tw-flex-col tw-gap-6 tw-place-items-center tw-p-[2%]"
      id="pricing"
    >
      <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-2xl">
        Choose the right plan for you
      </h3>
      <div className="tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-8 max-lg:tw-flex-col">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`reveal-up tw-flex tw-w-[350px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-8 tw-shadow-xl max-lg:tw-w-[320px] ${
              plan.highlighted ? "tw-border-2 dark:tw-border-[#595858]" : ""
            }`}
          >
            <h3>
              <span className="tw-text-5xl max-md:tw-text-3xl tw-font-semibold">{plan.price}</span>
              <span className="tw-text-2xl tw-text-gray-600 dark:tw-text-gray-300">
                {plan.period}
              </span>
            </h3>
            <p className="tw-mt-3 tw-text-center tw-text-gray-800 dark:tw-text-gray-100">
              {plan.description}
            </p>
            <hr />
            <ul className="tw-mt-4 tw-flex tw-flex-col tw-gap-4 tw-text-base tw-text-gray-800 dark:tw-text-gray-200">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="tw-flex tw-gap-2">
                  <i
                    className={`bi bi-check-circle-fill ${
                      feature.included
                        ? ""
                        : "tw-text-gray-400 dark:tw-text-gray-500"
                    }`}
                  ></i>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`btn tw-mt-auto !tw-w-full tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.02] ${
                plan.highlighted
                  ? ""
                  : "!tw-text-black !tw-bg-transparent !tw-border-[1px] tw-border-black dark:tw-border-white dark:!tw-text-white"
              }`}
            >
              Choose plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;

