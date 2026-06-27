import Link from 'next/link'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'
import ExperienceCard from '@/components/ExperienceCard'
import { getFeaturedProjects, getProjects, getSkills, getWorkExperience } from '@/lib/cosmic'

export default async function HomePage() {
  const [featuredProjects, allProjects, skills, experiences] = await Promise.all([
    getFeaturedProjects(),
    getProjects(),
    getSkills(),
    getWorkExperience(),
  ])

  const projectsToShow = featuredProjects.length > 0 ? featuredProjects : allProjects.slice(0, 3)
  const skillsToShow = skills.slice(0, 6)
  const experiencesToShow = experiences.slice(0, 3)

  return (
    <div>
      <Hero />

      {/* Featured Projects */}
      <section className="container-px py-16 sm:py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {featuredProjects.length > 0 ? 'Featured Projects' : 'Recent Projects'}
            </h2>
            <p className="mt-2 text-gray-600">A selection of my recent work.</p>
          </div>
          <Link
            href="/projects"
            className="hidden text-sm font-semibold text-brand-600 hover:text-brand-700 sm:block"
          >
            View all →
          </Link>
        </div>

        {projectsToShow.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectsToShow.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No projects available yet.</p>
        )}
      </section>

      {/* Skills */}
      {skillsToShow.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container-px">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
                <p className="mt-2 text-gray-600">Technologies and tools I work with.</p>
              </div>
              <Link
                href="/skills"
                className="hidden text-sm font-semibold text-brand-600 hover:text-brand-700 sm:block"
              >
                View all →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillsToShow.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience */}
      {experiencesToShow.length > 0 && (
        <section className="container-px py-16 sm:py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
              <p className="mt-2 text-gray-600">My professional journey.</p>
            </div>
            <Link
              href="/experience"
              className="hidden text-sm font-semibold text-brand-600 hover:text-brand-700 sm:block"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-6 border-l border-gray-200">
            {experiencesToShow.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}