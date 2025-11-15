'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '@/styles/style';

export default function Title({ title }: { title: string }) {
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const el = titleRef.current;
    const chars = el.querySelectorAll('.char');

    gsap.from(chars, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.04,
      ease: 'power3.out'
    });
  }, []);

  // تقسيم العنوان إلى أحرف داخل span
  const splitTitle = title.split('').map((char: string, i: number) => (
    <span key={i} className="char inline-block">
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <h1 ref={titleRef} className={`${styles.title}`}>
      {splitTitle}
    </h1>
  );
}
