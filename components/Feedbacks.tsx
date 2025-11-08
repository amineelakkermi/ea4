'use client'

import React, { JSX, useRef } from 'react'
import styles from '@/styles/style'
import { feedbacks, type Feedback } from '@/constants/data'

export default function Feedbacks(): JSX.Element {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCards = (dir: 'prev' | 'next') => {
    const el = trackRef.current
    if (!el) return
    const firstCard = el.querySelector<HTMLElement>('[data-card]')
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width
      : el.clientWidth
    const cs = getComputedStyle(el)
    const gap =
      parseFloat(cs.gap || cs.columnGap || cs.rowGap || '0') || 0
    const delta = cardWidth + gap
    el.scrollBy({ left: dir === 'next' ? delta : -delta, behavior: 'smooth' })
  }

  return (
    <section
      id="testimonials"
      className={`${styles.padding} w-full flex items-center flex-col gap-6 md:gap-8`}
      aria-labelledby="feedbacks-title"
    >
      {/* Header */}
      <div className="w-full max-w-7xl border-b border-black/40 py-8 flex items-center justify-between">
        <h2
          id="feedbacks-title"
          className="text-black font-kufam font-medium tracking-tight text-[28px] md:text-[34px] lg:text-[40px] uppercase"
        >
          WHAT CLIENT SAYS
        </h2>

        <div className="ml-6 hidden sm:flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => scrollByCards('prev')}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/30 hover:bg-black/[0.04] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => scrollByCards('next')}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/30 hover:bg-black/[0.04] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="w-full max-w-7xl mt-4 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 min-w-0 [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <style>{`.snap-x::-webkit-scrollbar{display:none}`}</style>

        <div className="shrink-0 w-16 sm:w-24 lg:w-28" aria-hidden />

        {feedbacks.map((fb: Feedback) => (
          <article
            key={fb.id}
            data-card
            className="shrink-0 snap-center w-[88vw] sm:w-[560px] lg:w-[640px] bg-black text-white rounded-2xl ring-1 ring-black p-6 sm:p-8 md:p-10"
          >
            <p className="text-lg md:text-xl leading-relaxed">{fb.quote}</p>
            <div className="mt-6 flex items-center gap-2 text-sm md:text-base">
              <span className="font-semibold">{fb.author}</span>
              <span className="text-white/70">, {fb.role}</span>
            </div>
          </article>
        ))}

        <div className="shrink-0 w-16 sm:w-24 lg:w-28" aria-hidden />
      </div>
    </section>
  )
}