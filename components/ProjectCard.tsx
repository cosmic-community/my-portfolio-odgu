import Link from 'next/link'
import type { Project } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const featuredImage = project.metadata?.featured_image
  const shortDescription = getMetafieldValue(project.metadata?.short_description)
  const techStack = project.metadata?.tech_stack
  const isFeatured = project.metadata?.featured === true

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        {featuredImage ? (
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={project.title}
            width={400}
            height={225}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400">
            No image
          </div>
        )}
        {isFeatured && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
            ⭐ Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-brand-600">
          {project.title}
        </h3>
        {shortDescription && (
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">{shortDescription}</p>
        )}

        {techStack && techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
              >
                {getMetafieldValue(tech)}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}