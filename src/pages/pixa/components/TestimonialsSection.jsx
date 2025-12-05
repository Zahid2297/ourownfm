const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "FM Professional",
      role: "India",
      image: "/pixa-assets/images/people/man2.jpg",
      text: "The hands-on training at Our Own FM Academy helped us optimize operations and achieve real cost savings.",
    },
    {
      name: "Facility Manager",
      role: "GCC",
      image: "/pixa-assets/images/people/women.jpg",
      text: "Collaboration with experts gave our team practical insights we couldn't get elsewhere.",
    },
    {
      name: "FM Executive",
      role: "India",
      image: "/pixa-assets/images/people/man.jpg",
      text: "The digital FM skills training transformed how we manage our facilities. The CAFM and BIM training was particularly valuable.",
    },
    {
      name: "Facility Engineer",
      role: "GCC",
      image: "/pixa-assets/images/people/man2.jpg",
      text: "The mentorship and career support helped me transition into a senior FM role. Highly recommended!",
    },
    {
      name: "FM Coordinator",
      role: "India",
      image: "/pixa-assets/images/people/women.jpg",
      text: "Real-world learning through site visits and case studies made all the difference. Not just theory!",
    },
    {
      name: "Sustainability Officer",
      role: "GCC",
      image: "/pixa-assets/images/people/man.jpg",
      text: "The sustainability and ESG training gave me the expertise needed to lead green building initiatives in our organization.",
    },
  ];

  return (
    <section className="tw-flex tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%]">
      <h3 className="reveal-up tw-text-4xl tw-font-medium tw-text-center max-md:tw-text-2xl">
        Success Stories from Our Community
      </h3>
      <div className="tw-mt-20 tw-gap-10 tw-space-y-8 max-md:tw-columns-1 lg:tw-columns-2 xl:tw-columns-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-bg-[#f2f3f4] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
          >
            <div className="tw-flex tw-place-items-center tw-gap-3">
              <div className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full">
                <img
                  src={testimonial.image}
                  className="tw-h-full tw-w-full tw-object-cover"
                  alt={testimonial.name}
                />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <div className="tw-font-semibold">{testimonial.name}</div>
                <div className="tw-text-gray-700 dark:tw-text-gray-300">{testimonial.role}</div>
              </div>
            </div>
            <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

