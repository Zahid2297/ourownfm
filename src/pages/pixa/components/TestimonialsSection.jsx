const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mante",
      role: "Glu, cto",
      image: "/pixa-assets/images/people/man2.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore deleniti iusto Numquam!",
    },
    {
      name: "Trich B",
      role: "AMI, ceo",
      image: "/pixa-assets/images/people/women.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero. Lorem ipsum dolor sit amet.",
    },
    {
      name: "John B",
      role: "Benz, ceo",
      image: "/pixa-assets/images/people/man.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, expedita nihil repellendus accusamus itaque facere labore, suscipit tempore in harum repellat. Doloribus, dolor facere dolorem impedit facilis rerum beatae exercitationem aliquid porro ea architecto similique illo omnis odio consequatur modi.",
    },
    {
      name: "Ben Alfert B",
      role: "XZ tech, cto",
      image: "/pixa-assets/images/people/man2.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero.",
    },
    {
      name: "Rachel",
      role: "Gem, cto",
      image: "/pixa-assets/images/people/women.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero. Lorem, ipsum dolor.",
    },
    {
      name: "Jamie",
      role: "SnapFist.ai, ceo",
      image: "/pixa-assets/images/people/man.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, nihil vitae fuga ab reiciendis optio et corporis dolorem alias deserunt, molestias in iusto! Ratione, quisquam incidunt. Reprehenderit ipsam officiis enim.",
    },
  ];

  return (
    <section className="tw-flex tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%]">
      <h3 className="reveal-up tw-text-4xl tw-font-medium tw-text-center max-md:tw-text-2xl">
        Join the professionals using Pixa
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

