import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { label: 'System', id: 'about' },
  { label: 'Stack', id: 'skills' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 border-b transition-colors duration-500 ${
        scrolled ? 'bg-ink-deep/90 backdrop-blur-md border-line-faint/20' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-[0.15em] text-line">
          TH<span className="text-signal">—</span>01
        </a>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-mono text-[11px] tracking-[0.15em] uppercase text-line-dim hover:text-signal transition-colors"
            >
              // {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="font-mono text-[11px] tracking-[0.15em] uppercase px-4 py-2 border border-signal/50 text-signal hover:bg-signal/10 transition-colors"
          >
            Résumé
          </a>
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="md:hidden w-6 h-6 text-line">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
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
            className="md:hidden overflow-hidden bg-ink-deep border-b border-line-faint/20"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="font-mono text-xs tracking-[0.15em] uppercase text-line-dim"
                >
                  // {l.label}
                </a>
              ))}
              <a href="/resume.pdf" download className="font-mono text-xs text-signal">
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
