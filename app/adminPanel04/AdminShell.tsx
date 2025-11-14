'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Session = { user?: { role?: string } } | null

interface AdminShellProps {
  children: React.ReactNode
}

export default function AdminShell({ children }: AdminShellProps) {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    async function fetchSession() {
      try {
        const res = await fetch('/api/session')
        const data = await res.json()
        setSession(data.session)
      } catch (_) {
        setSession(null)
      } finally {
        setLoading(false)
      }
    }
    fetchSession()
  }, [])

  if (loading) return <p>Chargement...</p>

  if (!session) {
    if (typeof window !== 'undefined') window.location.href = '/login'
    return null
  }

  if (session.user?.role !== 'admin') {
    if (typeof window !== 'undefined') window.location.href = '/'
    return null
  }

  return (
    <div className="relative min-h-screen grid grid-cols-[220px_1fr] bg-white z-[9999]">
      <aside className="relative z-30 border-r bg-yellow-400 p-4 mr-8 pointer-events-auto overflow-y-auto">
        <nav className="space-y-2 text-sm">
          <Link
            href="/adminPanel04"
            aria-current={pathname === '/adminPanel04' ? 'page' : undefined}
            className={`block px-3 py-2 rounded hover:bg-gray-100 ${
              pathname === '/adminPanel04' ? 'bg-gray-100 font-semibold' : ''
            }`}
          >
            Ajouter un projet
          </Link>
          <Link
            href="/adminPanel04/list"
            aria-current={pathname?.startsWith('/adminPanel04/list') ? 'page' : undefined}
            className={`block px-3 py-2 rounded hover:bg-gray-100 ${
              pathname?.startsWith('/adminPanel04/list') ? 'bg-gray-100 font-semibold' : ''
            }`}
          >
            Liste des projets
          </Link>
        </nav>
      </aside>
      <main className="relative z-10 p-4">
        {children}
      </main>
    </div>
  )
}
