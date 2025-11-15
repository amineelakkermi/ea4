'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '@/styles/style';

interface TitleProps {
  title: string;
  className?: string;
}

export default function Title({ title, className = '' }: TitleProps) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    if (!titleRef.current) return;

    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,       // 🔥 vient du haut
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <h1 ref={titleRef} className={`${styles.title} ${className}`}>
      {title}
    </h1>
  );
}
