import React, { useEffect, useState } from 'react'

const sections = [
  { id: 'top', label: 'SHEET 01' },
  { id: 'about', label: 'SHEET 02' },
  { id: 'skills', label: 'SHEET 03' },
  { id: 'services', label: 'SHEET 04' },
  { id: 'projects', label: 'SHEET 05' },
  { id: 'education', label: 'SHEET 06' },
  { id: 'testimonials', label: 'SHEET 07' },
]

const ScrollTrace = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === entry.target.id)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { threshold: 0.5 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Mobile / tablet: thin top progress trace */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 h-[2px] bg-line-faint/20">
        <div
          className="h-full bg-signal transition-all duration-500 ease-out"
          style={{ width: `${((active + 1) / sections.length) * 100}%` }}
        />
      </div>

      {/* Desktop: vertical trace with numbered sheet nodes */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40">
        <div className="relative w-px h-80 bg-line-faint/20">
          <div
            className="absolute top-0 left-0 w-px bg-signal transition-all duration-700 ease-out"
            style={{ height: `${(active / (sections.length - 1)) * 100}%` }}
          />
          {sections.map((s, i) => (
            <div
              key={s.id}
              className="absolute -left-[5px] flex items-center gap-3 group"
              style={{ top: `${(i / (sections.length - 1)) * 100}%` }}
            >
              <span
                className={`block w-[11px] h-[11px] rounded-full border transition-colors duration-500 ${
                  i <= active ? 'bg-signal border-signal' : 'bg-ink border-line-faint/50'
                }`}
              />
              <span
                className={`font-mono text-[10px] tracking-[0.2em] whitespace-nowrap transition-opacity duration-300 ${
                  i === active ? 'opacity-100 text-signal' : 'opacity-0'
                }`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ScrollTrace
