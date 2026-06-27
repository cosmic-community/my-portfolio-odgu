'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="container-px flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-gray-900">
          <span className="text-xl">🎨</span>
          My Portfolio
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-gray-200 bg-white md:hidden">
          <div className="container-px flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}