import React from 'react'
import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    quote: 'Tahir was the one teammate who\u2019d actually read the error message before asking for help. Our capstone project shipped on time because he owned the backend without needing to be chased.',
    name: 'Ayesha K.',
    role: 'Capstone Project Lead',
  },
  {
    quote: 'Clear about tradeoffs, calm under a tight deadline, and honest when something wasn\u2019t working yet instead of pretending it was. That\u2019s rarer than it should be at this stage.',
    name: 'M. Farhan',
    role: 'Course Instructor, Software Engineering',
  },
  {
    quote: 'Reviewed a pull request of his expecting to leave a dozen comments. Left two. The schema design alone saved us a painful migration later.',
    name: 'Sana R.',
    role: 'Peer Developer',
  },
]

const Testimonials = () => {
  const [ref, visible] = useReveal({ threshold: 0.15 })

  return (
    <section id="testimonials" className="relative px-6 md:px-10 py-28 md:py-36 bg-ink-raised/40">
      <div className="max-w-6xl mx-auto">
        <p className="sheet-label mb-3">Sheet 07 — Testimonials</p>
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-line-faint mb-16">
          Placeholder quotes — to be replaced with real references
        </p>

        <div ref={ref} className="grid md:grid-cols-3 gap-px bg-line-faint/15">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-ink p-7 flex flex-col justify-between transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-sm text-line-dim leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="text-sm text-line">{t.name}</p>
                <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-line-faint mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
