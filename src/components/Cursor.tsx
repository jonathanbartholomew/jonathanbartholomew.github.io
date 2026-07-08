// src/components/Cursor.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hoverCapable = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || reduceMotion || !hoverCapable) return;

    const handleMove = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08, ease: "none" });
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power2.out",
      });
    };
    document.addEventListener("mousemove", handleMove);

    const interactive = document.querySelectorAll(
      "a, button, .exp-strip, .work-strip"
    );
    const handleEnter = () =>
      gsap.to(ring, {
        scale: 2.2,
        borderColor: "rgba(232,67,26,0.7)",
        duration: 0.3,
      });
    const handleLeave = () =>
      gsap.to(ring, { scale: 1, borderColor: "rgba(232,67,26,0.4)", duration: 0.3 });

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMove);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
};

export default Cursor;
