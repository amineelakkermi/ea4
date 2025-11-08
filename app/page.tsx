import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Feedbacks from '@/components/Feedbacks'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <main>
      <Hero />
      <Experience />
      <Services />
      <Portfolio />
      <Feedbacks />
      <Contact />
    </main>
  )
}

export default page