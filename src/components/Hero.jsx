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
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Text column */}
          <div className="md:col-span-7 lg:col-span-8 order-2 md:order-1">
            {/* Title block */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-x-10 gap-y-2 mb-10 font-mono text-[11px] tracking-[0.2em] uppercase text-line-dim"
            >
              <span>Project — Tahir Hameed</span>
              <span>Sheet — 01 / 08</span>
              <span className="text-stamp">Status — Open for Internship</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-sans font-bold leading-[0.92] tracking-tight text-line text-[15vw] sm:text-[11vw] md:text-[6.2vw] lg:text-[6.2rem]"
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

          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="md:col-span-5 lg:col-span-4 order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
              {/* rotating dashed ring, schematic style */}
              <svg
                className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] animate-[spin_18s_linear_infinite]"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle
                  cx="50" cy="50" r="47"
                  stroke="#FF6A2B" strokeOpacity="0.55" strokeWidth="0.6" strokeDasharray="3 5"
                />
              </svg>
              {/* outer ring */}
              <svg className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)]" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="49" stroke="#4A5A70" strokeWidth="0.5" />
              </svg>

              <div className="absolute inset-0 rounded-full overflow-hidden ring-1 ring-line-faint/30 shadow-[0_0_40px_rgba(255,106,43,0.12)]">
                <img
                  src="/images/profile.png"
                  alt="Portrait of Tahir Hameed"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full mt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-line-faint whitespace-nowrap">
                Fig. 01 — Subject
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
