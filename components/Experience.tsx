"use client"

import { useEffect, useRef } from 'react'
import styles from '@/styles/style'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Title from './Title'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  // Animation de fade-out au scroll avec pin
  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      // Réinitialiser la position de départ
      gsap.set(contentRef.current, {
        opacity: 1,
        y: 0,
      })
      
      // Timeline avec ScrollTrigger et pin
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: 1.5,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        }
      })

      // Animation du contenu
      tl.to(contentRef.current, {
        opacity: 0,
        scale: 0.7,
        y: -50,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      id="experience"
      className={`w-full relative lg:px-12 px-6 pt-12 min-h-[100vh] flex items-center`}
    >
      
      <div ref={contentRef} className='max-w-6xl mx-auto'>
        <Title />
      </div>
    </div>
  )
}

export default Experience
