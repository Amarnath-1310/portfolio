import React, { useState } from 'react'
import { navLinks } from '../data/navLinks'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 z-40">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
              Portfolio
            </a>
          </div>

          <div className="hidden md:flex md:space-x-6">
            {navLinks.map((l) => (
              <a
                key={l.to}
                href={l.to}
                className={`text-sm font-medium text-white/80 hover:text-primary`}
              >
                {l.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              className="p-2 rounded-md bg-white/5 hover:bg-white/10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            {navLinks.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium text-white/80`}
              >
                {l.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}