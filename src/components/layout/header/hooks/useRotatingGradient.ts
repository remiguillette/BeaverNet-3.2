import { useEffect } from "react";

export const useRotatingGradient = (
  ref: React.RefObject<HTMLElement | null>,
  speed = 1,
) => {
  useEffect(() => {
    if (!ref.current) return;

    let angle = 0;
    let animationFrameId: number;

    const rotateGradient = () => {
      angle = (angle + speed) % 360;
      if (ref.current) {
        ref.current.style.setProperty("--gradient-angle", `${angle}deg`);
      }
      animationFrameId = requestAnimationFrame(rotateGradient);
    };

    rotateGradient();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [ref, speed]);
};
