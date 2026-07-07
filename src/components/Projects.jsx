import React from 'react'
import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    n: '01',
    title: 'Broker-Free Real Estate Platform',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    brief: 'A listings marketplace that cuts out the middleman broker. Focused on a secure auth flow and a search/filter system that stays fast as listings scale.',
    outcome: 'Normalized schema handling 3NF relations between listings, agents, and inquiries.',
  },
  {
    n: '02',
    title: 'TipNinja',
    tags: ['Express', 'EJS', 'MongoDB', 'Tailwind'],
    brief: 'An Airbnb-style listings clone built to practice MVC structure end to end — routing, server-rendered views, and session-based auth.',
    outcome: 'Clean separation of concerns made adding a review system a same-day change.',
  },
  {
    n: '03',
    title: 'Inventory Management System',
    tags: ['MERN', 'SOLID', 'REST API'],
    brief: 'A stock-tracking system for small retailers — SKU management, low-stock alerts, and role-based access for staff vs. owners.',
    outcome: 'Built around SOLID principles so new item categories don\u2019t require touching core logic.',
  },
  {
    n: '04',
    title: 'Legacy Web Services Modernization',
    tags: ['.NET', 'C#', 'REST'],
    brief: 'Refactored an older service-oriented codebase toward REST conventions without breaking existing consumers.',
    outcome: 'Backward-compatible endpoint versioning let old and new clients run side by side.',
  },
  {
    n: '05',
    title: 'Algorithm Modules Library',
    tags: ['JavaScript', 'Data Structures', 'Unit Testing'],
    brief: 'A set of core data-structure and algorithm implementations, each covered by unit tests, built for coursework and interview prep.',
    outcome: 'NUnit/xUnit-style test coverage caught three edge cases before they shipped.',
  },
  {
    n: '06',
    title: 'Weather Forecast App',
    tags: ['React', 'REST API', 'Hooks'],
    brief: 'A small React app pulling live data from a public weather API — built to get comfortable with async state and error handling in hooks.',
    outcome: 'Graceful fallback UI for failed or slow API responses instead of a blank screen.',
  },
]

const Projects = () => {
  const [ref, visible] = useReveal({ threshold: 0.05 })

  return (
    <section id="projects" className="relative px-6 md:px-10 py-28 md:py-36 bg-ink-raised/40">
      <div className="max-w-6xl mx-auto">
        <p className="sheet-label mb-6">Sheet 05 — Case Studies</p>
        <h2 className="font-sans text-2xl md:text-3xl text-line mb-16 max-w-xl">
          Six builds, six lessons.
        </h2>

        <div ref={ref}>
          {projects.map((p, i) => (
            <div
              key={p.n}
              className={`grid md:grid-cols-12 gap-4 md:gap-10 py-8 hairline first:border-t-0 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="md:col-span-4">
                <span className="font-mono text-xs text-line-faint">{p.n}</span>
                <h3 className="font-sans text-xl text-line mt-2 mb-3">{p.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm text-line-dim leading-relaxed mb-3">{p.brief}</p>
                <p className="text-sm text-line leading-relaxed mb-4">
                  <span className="text-signal font-mono text-xs tracking-wide uppercase mr-2">Outcome —</span>
                  {p.outcome}
                </p>
                <div className="flex gap-6">
                  <a href="#" className="font-mono text-xs tracking-[0.1em] uppercase text-line-dim hover:text-signal transition-colors">
                    Repo →
                  </a>
                  <a href="#" className="font-mono text-xs tracking-[0.1em] uppercase text-line-dim hover:text-signal transition-colors">
                    Live →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
