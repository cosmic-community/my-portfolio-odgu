import type { WorkExperience } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { formatDateRange } from '@/lib/utils'

interface ExperienceCardProps {
  experience: WorkExperience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const company = getMetafieldValue(experience.metadata?.company) || experience.title
  const role = getMetafieldValue(experience.metadata?.role)
  const location = getMetafieldValue(experience.metadata?.location)
  const description = getMetafieldValue(experience.metadata?.description)
  const logo = experience.metadata?.company_logo
  const dateRange = formatDateRange(
    experience.metadata?.start_date,
    experience.metadata?.end_date,
    experience.metadata?.current_job
  )
  const isCurrent = experience.metadata?.current_job === true

  return (
    <div className="relative pl-8">
      {/* Timeline dot */}
      <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
        <span className={`h-3 w-3 rounded-full ${isCurrent ? 'bg-brand-500' : 'bg-gray-300'} ring-4 ring-white`} />
      </span>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          {logo && (
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white">
              <img
                src={`${logo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                alt={company}
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-900">{role || company}</h3>
              {isCurrent && (
                <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                  Current
                </span>
              )}
            </div>
            <p className="text-sm font-medium text-brand-600">{company}</p>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              {dateRange && <span>{dateRange}</span>}
              {location && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>{location}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {description && (
          <p className="mt-4 whitespace-pre-line text-sm text-gray-600">{description}</p>
        )}
      </div>
    </div>
  )
}