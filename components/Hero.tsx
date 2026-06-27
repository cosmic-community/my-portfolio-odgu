import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-400 blur-3xl" />
      </div>
      <div className="container-px relative py-24 sm:py-32">
        <div className="max-w-3xl animate-fadeUp">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-300">
            Meus trabalhos
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Building thoughtful digital experiences
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Welcome to my portfolio. Explore my projects, skills, and professional journey —
            all crafted with care and attention to detail.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-400"
            >
              View Projects
            </Link>
            <Link
              href="/experience"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              My Experience
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}