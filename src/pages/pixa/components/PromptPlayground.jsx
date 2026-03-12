import { useState, useRef, useEffect } from "react";
import Dropdown from "./Dropdown";
import Typed from "typed.js";

const MAX_PROMPTS = 3;

const PromptPlayground = () => {
  const [prompts, setPrompts] = useState([]);
  const [selectedModel, setSelectedModel] = useState("GPT 4o");
  const [inputValue, setInputValue] = useState("");
  const promptWindowRef = useRef(null);
  const typedRef = useRef(null);

  const aiModels = [
    {
      value: "GPT 4o",
      label: "GPT 4o",
      icon: "/pixa-assets/images/brand-logos/openai.svg",
    },
    {
      value: "Gemini",
      label: "Gemini",
      icon: "/pixa-assets/images/brand-logos/googlegemini.svg",
    },
    {
      value: "Llama 3",
      label: "Llama 3",
      icon: "/pixa-assets/images/brand-logos/meta.svg",
    },
    {
      value: "Claude",
      label: "Claude",
      icon: "/pixa-assets/images/brand-logos/claude.svg",
    },
  ];

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed("#prompts-sample", {
      strings: [
        "How to solve a rubik's cube? Step by step guide",
        "What's Pixa playground?",
        "How to build an AI SaaS App?",
        "How to integrate Pixa API?",
      ],
      typeSpeed: 80,
      smartBackspace: true,
      loop: true,
      backDelay: 2000,
    });

    typedRef.current = typed;

    return () => {
      typed.destroy();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompts.length >= MAX_PROMPTS || !inputValue.trim()) return;

    const newPrompt = {
      id: Date.now(),
      text: inputValue,
      model: selectedModel,
    };

    setPrompts([...prompts, newPrompt]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        "GPT 4o": "Hello from Gpt 4o, add 3 prompts",
        Gemini: "Hello from Gemini, add 3 prompts",
        "Llama 3": "Hello from Meta Llama 3, add 3 prompts",
        Claude: "Hello from Claude, add 3 prompts",
      };

      const response = {
        id: Date.now() + 1,
        text: responses[selectedModel] || "Response",
        isAI: true,
      };

      setPrompts((prev) => [...prev, response]);
    }, 100);

    // Scroll to bottom
    setTimeout(() => {
      if (promptWindowRef.current) {
        promptWindowRef.current.scrollTop = promptWindowRef.current.scrollHeight;
      }
    }, 150);
  };

  return (
    <div
      className="tw-relative tw-max-w-[80%] tw-bg-white dark:tw-bg-black tw-border-[1px] dark:tw-border-[#36393c] lg:tw-w-[1024px] lg:tw-h-[650px] tw-flex tw-shadow-xl max-lg:tw-h-[450px] max-lg:tw-w-full tw-overflow-hidden tw-min-w-[320px] md:tw-w-full tw-min-h-[450px] tw-rounded-xl tw-bg-transparent max-md:tw-max-w-full"
      id="dashboard"
    >
      <div className="purple-bg-grad tw-max-w-[80%] reveal-up tw-absolute tw-left-1/2 tw--translate-x-1/2 tw-top-[0%] lg:tw-max-w-[1000px] tw-h-full tw-w-full"></div>
      <div className="animated-border tw-w-full tw-h-full tw-p-[2px]">
        <div className="tw-w-full tw-h-full tw-rounded-xl tw-overflow-hidden tw-flex">
          <div className="tw-min-w-[250px] max-lg:tw-hidden tw-p-2 tw-gap-2 tw-flex tw-flex-col tw-bg-gray-100 dark:tw-bg-[#080808] tw-h-full">
            <div className="tw-h-[30px] tw-w-fit tw-max-w-[100px]">
              <img
                src="/pixa-assets/logo/logo.png"
                alt="logo"
                className="tw-object-contain tw-opacity-80 tw-h-full tw-w-full dark:tw-invert"
              />
            </div>

            <div className="tw-flex tw-mt-2 tw-gap-2 tw-flex-col">
              <a
                href="#link-to-img-gen"
                className="tw-flex tw-rounded-sm tw-gap-2 tw-p-2 dark:hover:tw-bg-[#2d2d2ddb] hover:tw-bg-gray-200"
              >
                <i className="bi bi-image"></i>
                <span>Image generator</span>
              </a>
              <a
                href="#link-to-pdf-gen"
                className="tw-flex tw-rounded-sm tw-gap-2 tw-p-2 dark:hover:tw-bg-[#2d2d2ddb] hover:tw-bg-gray-200"
              >
                <i className="bi bi-file-pdf"></i>
                <span>Pdf generator</span>
              </a>
              <a
                href="#link-to-code-gen"
                className="tw-flex tw-rounded-sm tw-gap-2 tw-p-2 dark:hover:tw-bg-[#2d2d2ddb] hover:tw-bg-gray-200"
              >
                <i className="bi bi-code-square"></i>
                <span>Code generator</span>
              </a>
              <a
                href="#"
                className="tw-flex tw-rounded-sm tw-group tw-gap-2 tw-p-2 dark:hover:tw-bg-[#2d2d2ddb] hover:tw-bg-gray-200"
              >
                <span>Show all</span>
                <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover:tw-translate-x-1"></i>
              </a>
            </div>

            <div className="tw-mt-auto tw-w-full tw-flex tw-px-6 tw-place-content-center">
              <a
                href="#sign-up"
                className="btn !tw-w-full !tw-bg-transparent tw-duration-[0.3s] hover:!tw-bg-[#19300e] hover:!tw-text-white dark:hover:!tw-bg-[#c1fc75] dark:hover:!tw-text-black !tw-border-[1px] !tw-border-[#19300e] !tw-text-[#19300e] dark:!tw-border-[#c1fc75] dark:!tw-text-[#c1fc75]"
              >
                Signup
              </a>
            </div>
          </div>

          <div
            className="tw-flex tw-w-full tw-p-4 tw-bg-white dark:tw-bg-black tw-h-full tw-flex-col"
            id="pixa-playground"
          >
            <div className="tw-relative tw-w-full tw-flex tw-place-content-center tw-h-full">
              <div className="tw-absolute tw-top-[20%] max-lg:tw-top-[30%] tw-left-1/2 tw--translate-x-1/2 tw-w-[150px] tw-h-[150px]">
                <img
                  src="/pixa-assets/logo/logo.png"
                  className="tw-w-full tw-h-full dark:tw-invert tw-object-contain tw-opacity-20"
                  alt="Pixa logo"
                />
              </div>
              <div
                ref={promptWindowRef}
                className="prompt-container tw-overflow-y-auto tw-px-[5%] max-lg:tw-px-2 scrollbar max-lg:tw-max-h-[80%] tw-max-h-[550px] max-lg:tw-mt-12 tw-w-full tw-h-full tw-z-10 tw-flex tw-flex-col"
                id="prompt-container"
              >
                {prompts.length === 0 ? (
                  <div className="tw-w-full tw-flex tw-text-center tw-flex-col tw-place-content-center">
                    <h2 className="tw-text-4xl max-md:tw-text-2xl max-md:tw-mt-3 tw-opacity-80 dark:tw-opacity-100 tw-text-[#19300e] dark:tw-text-[#c1fc75]">
                      Try Prompts
                    </h2>
                    <div className="tw-inline tw-mt-6 max-md:tw-mt-3">
                      <span id="prompts-sample"></span>
                    </div>
                  </div>
                ) : (
                  <div className="tw-w-full tw-flex tw-flex-col tw-gap-2">
                    {prompts.map((prompt) => (
                      <div
                        key={prompt.id}
                        className={`tw-w-full tw-flex tw-p-2 ${
                          prompt.isAI ? "tw-justify-start" : "tw-justify-end"
                        }`}
                      >
                        <div
                          className={`tw-w-fit tw-p-2 tw-rounded-xl ${
                            prompt.isAI
                              ? "tw-mr-auto tw-bg-transparent"
                              : "tw-ml-auto tw-bg-gray-100 dark:tw-bg-[#171717]"
                          }`}
                        >
                          {prompt.text}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="tw-place-content-center tw-mt-auto tw-h-[50px] tw-p-1 tw-place-items-center tw-justify-around tw-flex tw-gap-1 tw-bottom-2 tw-w-full tw-rounded-md tw-bg-[#f3f4f6] dark:tw-bg-[#080808]"
              id="prompt-form"
            >
              <div className="tw-min-w-[140px] tw-min-h-[80px] max-lg:tw-absolute tw-z-10 tw-top-1 tw-left-1/2 max-lg:tw--translate-x-1/2 tw-flex tw-flex-col tw-text-sm tw-gap-1 tw-place-content-center">
                <Dropdown
                  options={aiModels}
                  selectedValue={selectedModel}
                  onChange={setSelectedModel}
                  className="tw-p-2 tw-rounded-md tw-bg-[#f3f4f6] dark:tw-bg-[#080808]"
                />
              </div>
              <input
                placeholder="How to develop a saas app?"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={prompts.length >= MAX_PROMPTS}
                className="tw-p-2 !tw-outline-none tw-bg-transparent tw-border-none tw-w-full tw-placehoder-gray-500 dark:tw-placeholder-opacity-60 dark:tw-placeholder-gray-300 tw-max-w-[80%] tw-h-full"
                name="prompt"
              />
              <button
                type="submit"
                disabled={prompts.length >= MAX_PROMPTS || !inputValue.trim()}
                className="btn !tw-bg-[#6366f1] !tw-p-2 !tw-px-3 !tw-text-white"
                title="submit"
              >
                <i className="bi bi-arrow-up"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptPlayground;

