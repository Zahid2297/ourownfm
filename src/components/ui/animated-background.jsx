import { useEffect, useRef } from "react";

/**
 * Animated gradient background with moving colors
 */
export function AnimatedGradient({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.005;
      const width = canvas.width;
      const height = canvas.height;

      // Create gradient
      const gradient = ctx.createLinearGradient(
        width * 0.5 + Math.cos(time) * width * 0.3,
        height * 0.5 + Math.sin(time) * height * 0.3,
        width * 0.5 + Math.cos(time + Math.PI) * width * 0.3,
        height * 0.5 + Math.sin(time + Math.PI) * height * 0.3
      );

      gradient.addColorStop(0, `hsl(${(time * 50) % 360}, 70%, 80%, 0.15)`);
      gradient.addColorStop(
        0.5,
        `hsl(${(time * 50 + 60) % 360}, 70%, 70%, 0.1)`
      );
      gradient.addColorStop(
        1,
        `hsl(${(time * 50 + 120) % 360}, 70%, 80%, 0.15)`
      );

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ mixBlendMode: "multiply" }}
    />
  );
}

/**
 * Grid pattern background
 */
export function GridBackground({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-10 ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  );
}

/**
 * Dotted background pattern
 */
export function DotPattern({ className = "", radius = 1.5, spacing = 20 }) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--muted-foreground)) ${radius}px, transparent ${radius}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity: 0.1,
      }}
    />
  );
}
