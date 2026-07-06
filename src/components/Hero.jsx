import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import DuskWindow from './DuskWindow'

const roles = ['MERN Stack Developer', 'Backend-Leaning Engineer', 'Software Engineering Student']

const useTypewriter = (words) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    const speed = deleting ? 35 : 65
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), 1400)
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setIndex((i) => i + 1)
        }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, index, words])

  return text
}

const Hero = () => {
  const typed = useTypewriter(roles)

  return (
    <section id="top" className="relative min-h-screen pt-28 pb-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Journal entry card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="field-note px-8 py-10 md:px-10 md:py-12 order-2 md:order-1"
        >
          <p className="eyebrow mb-4">Field Note — Entry 01, Dusk</p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.05] mb-4">
            Hi, I'm <span className="italic text-rust">Tahir Hameed.</span>
          </h1>
          <div className="h-8 mb-6">
            <span className="font-mono text-sm md:text-base text-moss-dim">
              {typed}
              <span className="inline-block w-[2px] h-4 bg-rust ml-1 align-middle animate-pulse" />
            </span>
          </div>
          <p className="text-pine-deep/80 leading-relaxed mb-8 max-w-md">
            Software Engineering student at Bahria University Karachi Campus, building
            full-stack applications end to end — from REST APIs and databases to interfaces
            people actually enjoy using. Currently looking for an internship where I can learn fast.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="px-6 py-3 rounded-full bg-rust text-parchment font-mono text-xs tracking-[0.12em] uppercase hover:bg-rust/90 transition-colors"
            >
              What I Do
            </a>
            <a
              href="#skills"
              className="px-6 py-3 rounded-full border border-pine-deep/25 text-pine-deep font-mono text-xs tracking-[0.12em] uppercase hover:border-pine-deep/60 transition-colors"
            >
              My Toolkit
            </a>
          </div>
        </motion.div>

        {/* The lit window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="order-1 md:order-2 h-[360px] md:h-[480px] shadow-lantern rounded-lg"
        >
          <DuskWindow />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.2em] uppercase text-parchment-faint"
      >
        scroll ↓
      </motion.div>
    </section>
  )
}

export default Hero
