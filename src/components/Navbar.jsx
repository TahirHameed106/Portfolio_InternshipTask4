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
      className={`fixed top-0 inset-x-0 z-30 transition-colors duration-500 ${
        scrolled ? 'bg-pine-deep/85 backdrop-blur-md border-b border-moss-dim/40' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <a href="#top" className="font-display italic text-2xl text-parchment tracking-wide">
          Tahir Hameed
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-mono text-xs tracking-[0.15em] uppercase text-parchment-dim hover:text-ember-bright transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="font-mono text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full border border-ember/50 text-ember-bright hover:bg-ember/10 transition-colors"
          >
            Résumé
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-parchment text-2xl"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-pine-deep/95 border-b border-moss-dim/40"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm tracking-[0.15em] uppercase text-parchment-dim"
                >
                  {l}
                </a>
              ))}
              <a href="/resume.pdf" download className="font-mono text-sm text-ember-bright">
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
