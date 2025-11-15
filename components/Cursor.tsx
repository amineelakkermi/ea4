"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMove);

    // Masquer quand la souris quitte la fenêtre
    const onLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
    };
    const onEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
  <div
    ref={cursorRef}
    className="pointer-events-none fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-[9999] hidden md:block"
    aria-hidden="true"
  >
    <div className="w-6 h-6 rounded-full border border-[#7fff44] bg-[#7fff44]/70 backdrop-blur-sm" />
  </div>
);
};

export default Cursor;
