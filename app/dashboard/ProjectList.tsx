// app/dashboard/ProjectList.tsx
'use client'

import React, { useEffect, useState } from 'react'
import PortfolioCard from "@/components/PortfolioCard"

// 🧩 Type aligné avec ton modèle Mongoose (portfolio.model.ts)
interface Project {
  _id: string
  title: string
  slug: string
  image: string
  tags: string[]
  href?: string
  createdAt?: string
  updatedAt?: string
}

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/portfolio', {
          cache: 'no-store', // 👈 يضمن جلب البيانات دائماً من السيرفر وليس من الكاش
        })

        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        setProjects(data.projects || []) // 👈 تأكد أن الـ API يرجع { projects: [...] }
      } catch (err) {
        console.error('Erreur de chargement des projets:', err)
        setError('Impossible de charger les projets.')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) return <p>Chargement...</p>
  if (error) return <p className="text-red-600">{error}</p>

  return (
    <div className="w-full max-w-7xl mx-auto">
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <PortfolioCard
              key={project._id}
              title={project.title}
              slug={project.slug}
              image={project.image}
              tags={project.tags}
              href={`/dashboard/edit/${project._id}`}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500">Aucun projet disponible pour le moment.</p>
        </div>
      )}
    </div>
  )
}

export default ProjectList
