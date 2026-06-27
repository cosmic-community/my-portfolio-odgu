import type { Metadata } from 'next'
import SkillCard from '@/components/SkillCard'
import { getSkills, getMetafieldValue } from '@/lib/cosmic'
import type { Skill } from '@/types'

export const metadata: Metadata = {
  title: 'Skills | My Portfolio',
  description: 'Technologies and tools I work with, grouped by category.',
}

export default async function SkillsPage() {
  const skills = await getSkills()

  // Group skills by category
  const grouped: Record<string, Skill[]> = {}
  for (const skill of skills) {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    const existing = grouped[category]
    if (existing) {
      existing.push(skill)
    } else {
      grouped[category] = [skill]
    }
  }

  const categories = Object.keys(grouped).sort()

  return (
    <div className="container-px py-16 sm:py-20">
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900">Skills</h1>
        <p className="mt-3 text-lg text-gray-600">
          A breakdown of the technologies and tools I use.
        </p>
      </div>

      {skills.length === 0 && (
        <p className="text-gray-500">No skills available yet.</p>
      )}

      <div className="space-y-12">
        {categories.map((category) => {
          const categorySkills = grouped[category]
          if (!categorySkills || categorySkills.length === 0) {
            return null
          }

          return (
            <section key={category}>
              <h2 className="mb-5 text-xl font-semibold text-gray-900">{category}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}