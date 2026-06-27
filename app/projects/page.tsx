import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Projects | My Portfolio',
  description: 'Explore my projects with screenshots, tech stacks, and live links.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="container-px py-16 sm:py-20">
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
        <p className="mt-3 text-lg text-gray-600">
          A collection of things I've designed and built.
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No projects available yet.</p>
      )}
    </div>
  )
}