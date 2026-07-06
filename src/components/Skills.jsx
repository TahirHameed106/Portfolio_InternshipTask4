import React from 'react'
import { useReveal } from '../hooks/useReveal'

const categories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', level: 78 },
      { name: 'Next.js', level: 60 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'JavaScript (ES6+)', level: 80 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js / Express', level: 78 },
      { name: 'REST API Design', level: 80 },
      { name: 'JWT Auth', level: 70 },
      { name: 'C# / .NET Basics', level: 60 },
    ],
  },
  {
    title: 'Data & Cloud',
    items: [
      { name: 'MongoDB', level: 72 },
      { name: 'MySQL', level: 62 },
      { name: 'Cloud Fundamentals', level: 65 },
    ],
  },
  {
    title: 'Tooling',
    items: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'Vercel', level: 75 },
      { name: 'Docker (basics)', level: 50 },
    ],
  },
]

const Skills = () => {
  const [ref, visible] = useReveal({ threshold: 0.15 })

  return (
    <section id="skills" className="relative px-6 md:px-8 py-24 bg-panel">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-3">Field Note — Toolkit</p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-14 max-w-xl">
          Tools I reach for <span className="italic text-accent">without thinking twice.</span>
        </h2>

        <div ref={ref} className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`field-note p-6 md:p-8 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${ci * 100}ms` }}
            >
              <h3 className="font-display italic text-xl text-rust mb-5">{cat.title}</h3>
              <div className="space-y-4">
                {cat.items.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs font-mono uppercase tracking-wide mb-1 text-pine-deep/70">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="h-1.5 bg-pine-deep/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-rust rounded-full transition-all duration-1000 ease-out"
                        style={{ width: visible ? `${s.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
