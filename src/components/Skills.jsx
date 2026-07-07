import React from 'react'
import { useReveal } from '../hooks/useReveal'

const categories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', level: 8 },
      { name: 'Next.js', level: 6 },
      { name: 'Tailwind CSS', level: 8 },
      { name: 'JavaScript (ES6+)', level: 8 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js / Express', level: 8 },
      { name: 'REST API Design', level: 8 },
      { name: 'JWT Auth', level: 7 },
      { name: 'C# / .NET Basics', level: 6 },
    ],
  },
  {
    title: 'Data & Cloud',
    items: [
      { name: 'MongoDB', level: 7 },
      { name: 'MySQL', level: 6 },
      { name: 'Cloud Fundamentals', level: 6 },
    ],
  },
  {
    title: 'Tooling',
    items: [
      { name: 'Git / GitHub', level: 9 },
      { name: 'Postman', level: 8 },
      { name: 'Vercel', level: 7 },
      { name: 'Docker (basics)', level: 5 },
    ],
  },
]

const TickGauge = ({ level, active }) => (
  <div className="flex gap-[3px]">
    {Array.from({ length: 10 }).map((_, i) => (
      <span
        key={i}
        className="w-[3px] h-3 transition-colors duration-700"
        style={{
          backgroundColor: active && i < level ? '#FF6A2B' : 'rgba(134,149,168,0.25)',
          transitionDelay: `${i * 30}ms`,
        }}
      />
    ))}
  </div>
)

const Skills = () => {
  const [ref, visible] = useReveal({ threshold: 0.1 })

  return (
    <section id="skills" className="relative px-6 md:px-10 py-28 md:py-36 bg-ink-raised/40">
      <div className="max-w-6xl mx-auto">
        <p className="sheet-label mb-6">Sheet 03 — Stack</p>
        <h2 className="font-sans text-2xl md:text-3xl text-line mb-16 max-w-xl">
          Tools measured, not just listed.
        </h2>

        <div ref={ref} className="space-y-14">
          {categories.map((cat) => (
            <div key={cat.title} className="grid md:grid-cols-12 gap-4 md:gap-10 hairline pt-8 first:border-t-0 first:pt-0">
              <h3 className="md:col-span-3 font-mono text-xs tracking-[0.2em] uppercase text-line-faint">
                {cat.title}
              </h3>
              <div className="md:col-span-9 grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {cat.items.map((s) => (
                  <div key={s.name} className="flex items-center justify-between gap-4">
                    <span className="text-sm text-line">{s.name}</span>
                    <TickGauge level={s.level} active={visible} />
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
