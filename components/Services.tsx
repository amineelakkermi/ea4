'use client';
import { useEffect, useRef } from 'react';
import styles from '@/styles/style';
import ServicesCard from './ServicesCard';
import { servicesCardData, type ServiceCardData } from '@/constants/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesSectionRef = useRef(null);
  const servicesContentRef = useRef(null);
  const titleRef = useRef(null);
  const desktopCardsRef = useRef<(HTMLDivElement | null)[]>([]);


  useEffect(() => {
    if (!servicesSectionRef.current || !servicesContentRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      
      // Sur mobile, pas d'animation GSAP - juste un carrousel simple
      if (isMobile) {
        return;
      }

      // Desktop uniquement: Animation GSAP
      const cards = desktopCardsRef.current.filter(Boolean) as HTMLDivElement[];
      
      console.log('Desktop - Cards found:', cards.length);
      
      if (cards.length === 0) {
        console.warn('No cards found');
        return;
      }

      // Timeline principale avec pin
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesSectionRef.current,
          start: 'top top',
          end: '+=400%',
          scrub: 1.5,
          pin: true,
          anticipatePin: 2,
        }
      });

      // Desktop: Animation progressive - toutes les cartes restent visibles
      // Phase 1: Carte 1 apparaît (0-25%)
      if (cards[0]) {
        tl.fromTo(cards[0],
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, ease: "power2.out" },
          0
        );
      }

      // Phase 2: Carte 2 apparaît (25-50%)
      if (cards[1]) {
        tl.fromTo(cards[1],
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, ease: "power2.out" },
          0.25
        );
      }

      // Phase 3: Carte 3 apparaît (50-75%)
      if (cards[2]) {
        tl.fromTo(cards[2],
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, ease: "power2.out" },
          0.5
        );
      }

      // Phase 4: Disparition de tout (75-100%)
      tl.to(titleRef.current, {
        opacity: 0,
        x: 500,
        scale: 0.8,
        ease: "power2.inOut",
      }, 0.75);

      tl.to(servicesContentRef.current, {
        opacity: 0,
        x: -100,
        scale: 0.8,
        ease: "power2.inOut",
      }, 0.75);
      
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={servicesSectionRef}
      id="services"
      className={`${styles.padding} relative min-h-[100svh] w-full flex flex-col gap-10 justify-center items-center`}
    >
      <h1 ref={titleRef} className={`${styles.title}`}>I Specialize in ⚡ Rank of Skills</h1>

      <div ref={servicesContentRef} className="flex flex-col gap-5 w-full">

        {/* Mobile: Carrousel simple - scroll horizontal */}
        <div className="lg:hidden overflow-x-scroll scrollbar-hide">
          <div className="flex gap-6 px-6 py-4 w-max">
            {servicesCardData.map((service, index) => (
              <div 
                key={`mobile-${service.id}`}
                className="w-[85vw] min-h-[400px] flex-shrink-0"
              >
                <ServicesCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid 3 colonnes */}
        <div className="hidden lg:grid grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
          {servicesCardData.map((service, index) => (
            <div 
              key={`desktop-${service.id}`}
              ref={(el) => { desktopCardsRef.current[index] = el; }}

            >
              <ServicesCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
