'use client'

import Link from 'next/link'
import React, { JSX, useEffect, useState } from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'

interface NavItem {
  id: string
  name: string
  href: string
}

const navItems: NavItem[] = [
  { id: 'home', name: 'Home', href: '#home' },
  { id: 'services', name: 'Services', href: '#services' },
  { id: 'portfolio', name: 'Portfolio', href: '#portfolio' },
  { id: 'contact', name: 'Contact', href: '#contact' },
]

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  

  return (
    <header className="fixed top-4 left-0 right-0 z-[999]">
      <div className="mx-auto w-[94%] sm:w-[90%] lg:w-[86%] max-w-[1100px]">
        <nav
          className={[
            'rounded-full border px-4 sm:px-6',
            'h-14 sm:h-16 flex items-center justify-between',
            'backdrop-blur-md supports-[backdrop-filter]:bg-white/40',
            'bg-white/35 border-black/10 shadow-sm',
            isScrolled ? 'bg-white/55 border-black/20 shadow-md' : '',
          ].join(' ')}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Go to homepage">
            <div className="logo">
              <Image src={logo} width={50} height={50} alt="logo" />
            </div>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.id !== 'dashboard' ? `/#${item.id}` : '/dashboard'}
                  className="text-black font-medium tracking-wide hover:opacity-80 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-black"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Menu Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-black/10 backdrop-blur-md supports-[backdrop-filter]:bg-white/40 bg-white/35 shadow-sm">
            <ul className="flex flex-col py-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-black font-medium tracking-wide hover:bg-black/[0.04]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
