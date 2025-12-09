const CTASection = () => {
  return (
    <section className="tw-relative tw-flex tw-p-2 tw-w-full tw-min-h-[60vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">
      <div className="reveal-up tw-w-full tw-h-full tw-min-h-[350px] max-lg:tw-max-w-full tw-rounded-md lg:tw-py-[5%] tw-bg-[#f2f3f4] dark:tw-bg-[#080808] tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">
        <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal tw-text-[#19300e] dark:tw-text-[#c1fc75]">
          Ready to Transform Your FM Career?
        </h3>
        <p className="reveal-up tw-text-lg tw-text-gray-700 dark:tw-text-gray-300 tw-text-center tw-max-w-[600px] tw-mt-2">
          Join thousands of professionals building future-ready FM capabilities. Get started with practical training, real mentorship, and career support.
        </p>

        <div className="tw-mt-8 tw-relative tw-flex max-lg:tw-flex-col tw-gap-5">
          <a href="#contact" className="btn reveal-up !tw-rounded-full !tw-p-4 tw-font-medium">
            Connect With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

