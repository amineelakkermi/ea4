import Image from 'next/image'
import Link from 'next/link'
import { JSX } from 'react'
import logo2 from '../public/logo2.png';

type Social = {
  id: 'facebook' | 'instagram' | 'tiktok' | 'snapchat' | 'x'
  href: string
  label: string
  icon: JSX.Element
}

const socials: Social[] = [
  {
    id: 'facebook',
    href: 'https://facebook.com/',
    label: 'Facebook',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.5l.5-4H14V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    href: 'https://instagram.com/',
    label: 'Instagram',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: 'tiktok',
    href: 'https://www.tiktok.com/',
    label: 'TikTok',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" fill="currentColor">
        <path d="M41.5 17.6c-4.3-.9-7.8-3.8-9.3-7.8V34c0 6.1-5 11-11.1 11S10 40.1 10 34s5-11 11.1-11c.7 0 1.4.1 2 .2v6.6c-.6-.2-1.3-.3-2-.3-3 0-5.4 2.4-5.4 5.4S18.1 40 21.1 40s5.4-2.4 5.4-5.4V4.5h6.6c1.2 5.1 5.4 9.2 10.7 10.3v6.8z" />
      </svg>
    ),
  },
  {
    id: 'snapchat',
    href: 'https://www.snapchat.com/',
    label: 'Snapchat',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64" fill="currentColor">
        <path d="M32 8c8.8 0 16 7.2 16 16v6.9c0 2.6 2.2 4.7 4.8 4.7.6 0 1.2.5 1.3 1.1.2.7-.2 1.4-.9 1.6-2.9.8-4.5 2.2-5.1 3.9-.7 2.2 1.1 3.6 4.3 4 .8.1 1.3.9 1.1 1.6-.2.7-.9 1.1-1.6 1-3.4-.5-6.1-1.6-8.2-3.1-3.3 4.5-8.2 7.7-12.7 7.7s-9.4-3.2-12.7-7.7c-2.1 1.5-4.8 2.6-8.2 3.1-.7.1-1.4-.3-1.6-1-.2-.7.3-1.5 1.1-1.6 3.2-.4 5-1.8 4.3-4-.6-1.7-2.2-3.1-5.1-3.9-.7-.2-1.1-.9-.9-1.6.2-.6.7-1.1 1.3-1.1 2.6 0 4.8-2.1 4.8-4.7V24C16 15.2 23.2 8 32 8z" />
      </svg>
    ),
  },
  {
    id: 'x',
    href: 'https://twitter.com/',
    label: 'X',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.98 3H18.7l-5.1 6.2L8.4 3H3.02l7.38 10.18L3.3 21h2.28l5.68-6.9 5.07 6.9h5.45l-7.76-10.56L20.98 3z" />
      </svg>
    ),
  },
]

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-7xl py-4 px-6 sm:px-10">
        <div className="h-16 sm:h-20 flex items-center justify-between">
          {/* Logo (EA4 text) */}
          <div className="logo">
            <Link href='/'>
            <Image src={logo2} width={50} height={50} alt='logo' />
            </Link>
          </div>

          {/* Socials */}
          <ul className="flex items-center gap-4 sm:gap-5">
            {socials.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full ring-1 ring-white/70 hover:bg-white/10 transition"
                >
                  {s.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}