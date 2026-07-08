// src/components/sections/Hero.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import useMagnetic from "@/hooks/useMagnetic";

function splitChars(el: HTMLElement, text: string) {
  el.innerHTML = "";
  return [...text].map((ch) => {
    const s = document.createElement("span");
    s.className = "char";
    s.textContent = ch === " " ? " " : ch;
    el.appendChild(s);
    return s;
  });
}

const Hero = () => {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const ctaRef = useMagnetic<HTMLAnchorElement>();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!line1Ref.current || !line2Ref.current) return;

    const c1 = splitChars(line1Ref.current, "JONATHAN");
    const c2 = splitChars(line2Ref.current, "BARTHOLOMEW");

    if (reduceMotion) {
      c1.concat(c2).forEach((c) => (c.style.transform = "none"));
      if (eyebrowRef.current) eyebrowRef.current.style.opacity = "1";
      if (bottomRef.current) bottomRef.current.style.opacity = "1";
      return;
    }

    const tl = gsap.timeline({ delay: 0.15 });
    tl.to(c1, { y: 0, duration: 1.05, ease: "power4.out", stagger: 0.032 })
      .to(c2, { y: 0, duration: 1, ease: "power4.out", stagger: 0.025 }, "-=0.75")
      .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }, "-=0.5")
      .to(bottomRef.current, { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" }, "-=0.45");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="hero">
      <p className="hero-eyebrow" ref={eyebrowRef}>
        Senior Full Stack Developer &nbsp;&middot;&nbsp; Shenandoah Valley, VA
      </p>
      <h1 className="hero-name" aria-label="Jonathan Bartholomew">
        <span className="line line-1" ref={line1Ref}></span>
        <span className="line line-2" ref={line2Ref}></span>
      </h1>
      <div className="hero-bottom" ref={bottomRef}>
        <p className="hero-title">
          <strong>Building healthcare systems, AI tooling,</strong>
          <br />
          and the things that matter.
        </p>
        <a href="#work" className="hero-cta" ref={ctaRef}>
          See my work <span className="arrow">&rarr;</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
