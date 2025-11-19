"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const staticText = "Turning ideas into ";
  const animatedText =
    "functional, scalable, and elegant digital solutions.";

  useLayoutEffect(() => {
    if (!titleRef.current) return;

    const chars = titleRef.current.querySelectorAll(".char");

    gsap.from(chars, {
      opacity: 0,
      y: 20,
      stagger: 0.03,
      duration: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,   // déclencheur = le h1
        start: "top 80%",            // quand le haut du h1 arrive à 80% de la hauteur de l'écran
        toggleActions: "play none none none", // joue une fois
      },
    });
  }, []);

  return (
    <h1
      ref={titleRef}
      className="max-w-[800px] italic text-[35px] lg:text-[50px] font-poppins font-[600]"
    >
      <span className="text-gray-700">{staticText}</span>
      {animatedText.split("").map((char, index) => (
        <span key={index} className="char inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default Title;