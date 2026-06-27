import type { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  const name = getMetafieldValue(skill.metadata?.name) || skill.title
  const proficiency = getMetafieldValue(skill.metadata?.proficiency)
  const icon = skill.metadata?.icon

  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-brand-50">
        {icon ? (
          <img
            src={`${icon.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={name}
            width={48}
            height={48}
            className="h-8 w-8 object-contain"
          />
        ) : (
          <span className="text-xl">🛠️</span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold text-gray-900">{name}</h3>
        {proficiency && (
          <p className="text-sm text-gray-500">{proficiency}</p>
        )}
      </div>
    </div>
  )
}