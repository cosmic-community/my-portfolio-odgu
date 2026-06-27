import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-px flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-gray-500">
          © {year} My Portfolio. All rights reserved.
        </p>
        <nav className="flex gap-6">
          <Link href="/projects" className="text-sm text-gray-500 transition-colors hover:text-brand-600">
            Projects
          </Link>
          <Link href="/skills" className="text-sm text-gray-500 transition-colors hover:text-brand-600">
            Skills
          </Link>
          <Link href="/experience" className="text-sm text-gray-500 transition-colors hover:text-brand-600">
            Experience
          </Link>
        </nav>
      </div>
    </footer>
  )
}