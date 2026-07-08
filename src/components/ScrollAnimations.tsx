// src/components/ScrollAnimations.tsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollAnimations = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 87%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".exp-strip").forEach((strip, i) => {
        gsap.to(strip, {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: i * 0.08,
          scrollTrigger: { trigger: strip, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".work-strip").forEach((strip) => {
        gsap.to(strip, {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.1,
          ease: "power4.inOut",
          scrollTrigger: { trigger: strip, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".sk").forEach((sk, i) => {
        gsap.fromTo(
          sk,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            delay: (i % 7) * 0.045,
            scrollTrigger: { trigger: sk, start: "top 90%", once: true },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".contact-headline").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.15,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".contact-links, .contact-form").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".section-title").forEach((t) => {
        gsap.fromTo(
          t,
          { y: 30 },
          {
            y: -15,
            ease: "none",
            scrollTrigger: {
              trigger: t,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default ScrollAnimations;
