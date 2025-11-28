import { useEffect, useRef } from "react";

/**
 * Animated beam lights effect
 */
export function Beams({ className = "", count = 3 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const beams = [];
    const createBeam = () => {
      const beam = document.createElement("div");
      beam.className =
        "absolute w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent opacity-0";
      beam.style.height = "200%";
      beam.style.left = `${Math.random() * 100}%`;
      beam.style.animation = `beam-float ${
        3 + Math.random() * 4
      }s ease-in-out infinite`;
      beam.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(beam);
      beams.push(beam);
    };

    // Create initial beams
    for (let i = 0; i < count; i++) {
      createBeam();
    }

    return () => {
      beams.forEach((beam) => beam.remove());
    };
  }, [count]);

  return (
    <>
      <div
        ref={containerRef}
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      />
      <style>{`
        @keyframes beam-float {
          0%, 100% {
            transform: translateY(-100%) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(${
              Math.random() * 20 - 10
            }px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
