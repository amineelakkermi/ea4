'use client'

import React, { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Session = { user?: { role?: string } } | null


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
    <Suspense fallback={<p>Loading ...</p>}>
      <div className="relative min-h-screen grid grid-cols-[220px_1fr] bg-white z-[9999]">
      <aside className="relative z-30 border-r bg-yellow-400 p-4 mr-8 pointer-events-auto overflow-y-auto">
        <nav className="space-y-2 text-sm">
          <Link
            href="/dashboard"
            aria-current={pathname === '/dashboard' ? 'page' : undefined}
            className={`block px-3 py-2 rounded hover:bg-gray-100 ${
              pathname === '/dashboard' ? 'bg-gray-100 font-semibold' : ''
            }`}
          >
            Ajouter un projet
          </Link>
          <Link
            href="/dashboard/list"
            aria-current={pathname?.startsWith('/dashboard/list') ? 'page' : undefined}
            className={`block px-3 py-2 rounded hover:bg-gray-100 ${
              pathname?.startsWith('/dashboard/list') ? 'bg-gray-100 font-semibold' : ''
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
    </Suspense>
  )
}
