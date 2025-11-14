'use client'

import React from 'react'
import ProjectList from '../ProjectList'

export default function DashboardListPage() {
  return (
    <section className="relative isolate min-h-screen flex flex-col items-center justify-center bg-white px-4 md:px-10">
      <div className="z-10 w-full max-w-5xl p-6 rounded-2xl shadow-lg bg-white/90 backdrop-blur-md">
        <h2 className="text-2xl font-bold mb-6">Liste des projets</h2>
        <ProjectList />
      </div>
    </section>
  )
}
