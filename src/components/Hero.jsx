import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const roles = ['MERN Stack Developer', 'Backend-Leaning Engineer', 'Systems-Minded Student']

const useTypewriter = (words) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    const speed = deleting ? 30 : 60
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), 1300)
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

const SchematicBackdrop = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-40"
    viewBox="0 0 1000 700"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
  >
    <g stroke="#4A5A70" strokeWidth="1.2">
      <path d="M0 120 H240 V260 H520" />
      <path d="M1000 80 H760 V220 H480" />
      <path d="M0 560 H200 V420 H460" />
      <path d="M1000 620 H820 V480 H560" />
    </g>
    <g stroke="#FF6A2B" strokeWidth="1.4" strokeDasharray="6 10" className="animate-pulse-line">
      <path d="M0 120 H240 V260 H520" />
      <path d="M1000 620 H820 V480 H560" />
    </g>
    {[
      [240, 120], [520, 260], [760, 80], [480, 220],
      [200, 560], [460, 420], [820, 620], [560, 480],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="4" fill="#0A121F" stroke="#8695A8" strokeWidth="1.2" />
    ))}
  </svg>
)

const Hero = () => {
  const typed = useTypewriter(roles)

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-blueprint bg-grid">
      <SchematicBackdrop />

      <div className="relative max-w-6xl mx-auto w-full px-6 md:px-10 pt-24 pb-16">
        {/* Title block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-x-10 gap-y-2 mb-10 font-mono text-[11px] tracking-[0.2em] uppercase text-line-dim"
        >
          <span>Project — Tahir Hameed</span>
          <span>Sheet — 01 / 05</span>
          <span className="text-stamp">Status — Open for Internship</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-sans font-bold leading-[0.92] tracking-tight text-line text-[15vw] sm:text-[11vw] md:text-[7.5vw] lg:text-[6.2rem]"
        >
          Tahir
          <br />
          Hameed.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 h-7"
        >
          <span className="font-mono text-sm md:text-base text-signal">
            {typed}
            <span className="inline-block w-[2px] h-4 bg-signal ml-1 align-middle animate-blink" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 max-w-lg text-line-dim leading-relaxed"
        >
          Software Engineering student at Bahria University Karachi Campus. I build
          full-stack systems end to end — APIs, databases, and the interfaces on top of
          them — and I'm looking for an internship that will put that to real use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-6"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-signal text-ink-deep font-mono text-xs tracking-[0.15em] uppercase font-semibold hover:bg-signal-dim transition-colors"
          >
            View Case Studies
          </a>
          <a
            href="#education"
            className="font-mono text-xs tracking-[0.15em] uppercase text-line-dim hover:text-line transition-colors"
          >
            Download CV →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
