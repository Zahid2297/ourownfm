import { useEffect, useRef } from "react";

const LogoLoop = ({ logos = [], speed = 30, direction = "left" }) => {
  const scrollerRef = useRef(null);
  const scrollerInnerRef = useRef(null);

  useEffect(() => {
    const scrollerInner = scrollerInnerRef.current;
    if (!scrollerInner) return;

    // Clone the logos for seamless infinite loop
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="scroller relative w-full overflow-hidden mask-gradient"
      data-direction={direction}
      data-speed={speed}
    >
      <div
        ref={scrollerInnerRef}
        className={`scroller-inner flex gap-8 w-max ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="shrink-0 flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-6"
          >
            {logo.image ? (
              <img
                src={logo.image}
                alt={logo.name}
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            ) : (
              <div className="text-center">
                <p className="text-sm md:text-base font-bold text-foreground">
                  {logo.name}
                </p>
                {logo.subtitle && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {logo.subtitle}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .mask-gradient {
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
          mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }

        .scroller-inner:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoLoop;
