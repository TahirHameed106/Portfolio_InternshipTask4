import React from 'react'
import { useReveal } from '../hooks/useReveal'

const facts = [
  { k: 'Role', v: 'Full-Stack Developer (MERN)' },
  { k: 'Education', v: 'BS Software Engineering, BUKC' },
  { k: 'Semester', v: '6th, expected grad. 2027' },
  { k: 'Focus', v: 'APIs, databases, cloud fundamentals' },
  { k: 'Availability', v: 'Internship, immediate' },
]

const timeline = [
  { year: '2023', note: 'Began BS Software Engineering at Bahria University Karachi Campus.' },
  { year: '2024', note: 'Went deep on the MERN stack — Node, Express, MongoDB, React.' },
  { year: '2025', note: 'Shipped 5+ full-stack projects; started studying cloud architecture.' },
  { year: '2026', note: 'Sixth semester, hunting for an internship worth learning from.' },
]

const About = () => {
  const [ref, visible] = useReveal({ threshold: 0.15 })

  return (
    <section id="about" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <p className="sheet-label mb-6">Sheet 02 — System</p>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20">
          <p className="md:col-span-7 font-sans text-2xl md:text-3xl leading-snug text-line">
            I like software built the way a good system is built —{' '}
            <span className="text-signal">deliberately</span>, with attention to what
            happens under load, without cutting corners the next person has to pay for.
          </p>

          <dl className="md:col-span-5 md:pl-10 md:border-l border-line-faint/25 space-y-4">
            {facts.map((f) => (
              <div key={f.k} className="flex justify-between gap-4 hairline pt-3 first:pt-0 first:border-t-0">
                <dt className="font-mono text-[11px] tracking-[0.15em] uppercase text-line-faint">{f.k}</dt>
                <dd className="text-sm text-line text-right">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Timeline — clean, no map, no icons */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line-faint/15">
          {timeline.map((t, i) => (
            <div
              key={t.year}
              className={`bg-ink p-6 md:p-7 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-mono text-signal text-sm mb-3">{t.year}</p>
              <p className="text-sm text-line-dim leading-relaxed">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
