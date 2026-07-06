import React, { useRef, useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'

const waypoints = [
  { x: 60, y: 340, year: '2023', note: 'Began BS Software Engineering at Bahria University Karachi Campus', side: 'below' },
  { x: 260, y: 200, year: '2024', note: 'Went deep on the MERN stack — Node, Express, MongoDB, React', side: 'above' },
  { x: 480, y: 260, year: '2025', note: 'Shipped 5+ full-stack projects, started studying cloud architecture', side: 'below' },
  { x: 700, y: 100, year: '2026', note: 'Sixth semester, hunting for an internship worth learning from', side: 'above' },
]

const PATH_D = 'M60,340 C140,300 180,220 260,200 C340,180 420,300 480,260 C560,220 620,140 700,100'

const JourneyMap = () => {
  const sectionRef = useRef(null)
  const pathRef = useRef(null)
  const [ember, setEmber] = useState({ x: 60, y: 340 })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.85', 'end 0.35'] })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const path = pathRef.current
    if (!path) return
    const total = path.getTotalLength()
    const progress = Math.min(Math.max(latest, 0), 1)
    const point = path.getPointAtLength(progress * total)
    setEmber({ x: point.x, y: point.y })
  })

  return (
    <div ref={sectionRef} className="relative w-full" style={{ paddingBottom: '52%' }}>
      <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Hand-drawn dotted trail */}
        <path
          ref={pathRef}
          d={PATH_D}
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 14"
          style={{ stroke: 'var(--border)' }}
        />
        {/* Waypoint pins */}
        {waypoints.map((w, i) => (
          <circle key={i} cx={w.x} cy={w.y} r="7" strokeWidth="2.5" style={{ fill: 'var(--bg)', stroke: 'var(--accent)' }} />
        ))}
        {/* Traveling ember — position driven by scroll progress through this section */}
        <circle cx={ember.x} cy={ember.y} r="14" opacity="0.25" style={{ fill: 'var(--accent)' }} />
        <circle cx={ember.x} cy={ember.y} r="5.5" style={{ fill: 'var(--accent)' }} />
      </svg>

      {waypoints.map((w, i) => (
        <div
          key={i}
          className="absolute w-[42%] sm:w-[38%]"
          style={{
            left: `${(w.x / 800) * 100}%`,
            top: `${(w.y / 400) * 100}%`,
            transform: `translate(-50%, ${w.side === 'above' ? '-125%' : '32%'})`,
          }}
        >
          <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent mb-1">{w.year}</p>
          <p className="text-ink text-sm leading-snug">{w.note}</p>
        </div>
      ))}
    </div>
  )
}

export default JourneyMap
