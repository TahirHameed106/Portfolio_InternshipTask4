import React from 'react'
import { useReveal } from '../hooks/useReveal'

const coursework = [
  'Object-Oriented Programming',
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Software Engineering',
  'Cloud Computing',
  'Operating Systems',
]

const Education = () => {
  const [ref, visible] = useReveal({ threshold: 0.15 })

  return (
    <section id="education" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <p className="sheet-label mb-6">Sheet 06 — Education & Experience</p>

        <div ref={ref} className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div
            className={`md:col-span-7 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="hairline pt-6 first:border-t-0 first:pt-0">
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-signal mb-2">2023 — Present</p>
              <h3 className="font-sans text-xl text-line mb-1">BS Software Engineering</h3>
              <p className="text-sm text-line-dim mb-4">Bahria University, Karachi Campus — 7th Semester</p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>

            <div className="hairline pt-6 mt-8">
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-line-faint mb-2">Ongoing</p>
              <h3 className="font-sans text-xl text-line mb-1">Independent & Academic Projects</h3>
              <p className="text-sm text-line-dim leading-relaxed max-w-md">
                No formal internship yet — six shipped projects (see Sheet 05) stand in for
                on-the-job experience, each one built and debugged solo end to end.
              </p>
            </div>
          </div>

          <div
            className={`md:col-span-5 md:pl-10 md:border-l border-line-faint/25 flex flex-col justify-between transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div>
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-line-faint mb-3">Full Résumé</p>
              <p className="text-sm text-line-dim leading-relaxed mb-6">
                A complete, ATS-formatted CV covering education, projects, and technical
                skills in detail.
              </p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-signal text-ink-deep font-mono text-xs tracking-[0.15em] uppercase font-semibold hover:bg-signal-dim transition-colors"
              >
                Download CV
                <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
