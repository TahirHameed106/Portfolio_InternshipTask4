import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Services']

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-colors duration-500 border-b ${
        scrolled ? 'bg-surface-deep backdrop-blur-md border-subtle' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <a href="#top" className="font-display italic text-2xl text-ink tracking-wide">
          Tahir Hameed
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-mono text-xs tracking-[0.15em] uppercase text-ink-dim hover:text-accent transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="font-mono text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full border border-subtle text-accent hover:bg-[var(--accent)]/10 transition-colors"
          >
            Résumé
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink w-7 h-7"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-surface-deep border-b border-subtle"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm tracking-[0.15em] uppercase text-ink-dim"
                >
                  {l}
                </a>
              ))}
              <a href="/resume.pdf" download className="font-mono text-sm text-accent">
                Résumé
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
