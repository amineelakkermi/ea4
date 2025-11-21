
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Feedbacks from '@/components/Feedbacks'
import GetInTouch from '@/components/GetInTouch'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'

const page = () => {
  return (
    <main>
      {/* Défilement automatique - Activer avec Ctrl+Shift+A */}
      
      <Navbar />
      
      <div className='bg'>
      <Hero />
      </div>
      <Experience />
      <Services />
      <Portfolio />
      <Feedbacks />
      <GetInTouch />
      <Contact />
    </main>
  )
}

export default page