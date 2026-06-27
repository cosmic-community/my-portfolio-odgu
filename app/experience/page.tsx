import type { Metadata } from 'next'
import ExperienceCard from '@/components/ExperienceCard'
import { getWorkExperience } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Experience | My Portfolio',
  description: 'My professional work experience and journey.',
}

export default async function ExperiencePage() {
  const experiences = await getWorkExperience()

  return (
    <div className="container-px py-16 sm:py-20">
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900">Experience</h1>
        <p className="mt-3 text-lg text-gray-600">
          A timeline of my professional roles and accomplishments.
        </p>
      </div>

      {experiences.length > 0 ? (
        <div className="space-y-6 border-l border-gray-200">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No work experience available yet.</p>
      )}
    </div>
  )
}