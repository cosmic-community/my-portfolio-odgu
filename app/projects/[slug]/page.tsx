// app/projects/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject, getMetafieldValue } from '@/lib/cosmic'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return { title: 'Project Not Found | My Portfolio' }
  }

  return {
    title: `${project.title} | My Portfolio`,
    description: getMetafieldValue(project.metadata?.short_description) || 'Project details',
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const featuredImage = project.metadata?.featured_image
  const description = getMetafieldValue(project.metadata?.description)
  const shortDescription = getMetafieldValue(project.metadata?.short_description)
  const techStack = project.metadata?.tech_stack
  const screenshots = project.metadata?.screenshots
  const liveUrl = getMetafieldValue(project.metadata?.live_url)
  const githubUrl = getMetafieldValue(project.metadata?.github_url)

  return (
    <article className="container-px py-12 sm:py-16">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
      >
        ← Back to projects
      </Link>

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
        {shortDescription && (
          <p className="mt-4 text-lg text-gray-600">{shortDescription}</p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Visit Live Site ↗
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100"
            >
              View on GitHub ↗
            </a>
          )}
        </div>
      </header>

      {featuredImage && (
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
          <img
            src={`${featuredImage.imgix_url}?w=2000&h=1125&fit=crop&auto=format,compress`}
            alt={project.title}
            width={1000}
            height={563}
            className="w-full object-cover"
          />
        </div>
      )}

      {techStack && techStack.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-gray-900">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-md bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700"
              >
                {getMetafieldValue(tech)}
              </span>
            ))}
          </div>
        </section>
      )}

      {description && (
        <section className="mt-10 max-w-3xl">
          <h2 className="text-lg font-semibold text-gray-900">About this project</h2>
          <div className="mt-4 whitespace-pre-line text-gray-700 leading-relaxed">
            {description}
          </div>
        </section>
      )}

      {screenshots && screenshots.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-gray-900">Screenshots</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {screenshots.map((shot, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl border border-gray-200">
                <img
                  src={`${shot.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  width={800}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}