import React, { Suspense } from 'react'
import AdminShell from './AdminShell'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<p>Chargement...</p>}>
      <AdminShell>{children}</AdminShell>
    </Suspense>
  )
}
