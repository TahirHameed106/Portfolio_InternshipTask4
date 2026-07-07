import React from 'react'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    n: '01',
    title: 'Full-Stack Web Applications',
    desc: 'End-to-end builds on the MERN stack — schema design through a shipped, working UI.',
  },
  {
    n: '02',
    title: 'API Design & Integration',
    desc: 'REST APIs built around clear contracts, validated in Postman before frontend work starts.',
  },
  {
    n: '03',
    title: 'Interface Implementation',
    desc: 'Turning designs or rough ideas into responsive, accessible React interfaces.',
  },
  {
    n: '04',
    title: 'Database Design',
    desc: 'Normalized schemas and sane relationships in MongoDB or MySQL that hold up under real use.',
  },
  {
    n: '05',
    title: 'Cloud Deployment',
    desc: 'Getting projects off localhost — deployment, environment config, cloud fundamentals.',
  },
  {
    n: '06',
    title: 'Debugging & Code Review',
    desc: 'Patient, methodical bug-hunting — understanding root cause instead of patching symptoms.',
  },
]

const Services = () => {
  const [ref, visible] = useReveal({ threshold: 0.1 })

  return (
    <section id="services" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <p className="sheet-label mb-6">Sheet 04 — Services</p>
        <h2 className="font-sans text-2xl md:text-3xl text-line mb-16 max-w-xl">
          What I take on.
        </h2>

        <div ref={ref}>
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`grid md:grid-cols-12 gap-3 md:gap-8 items-baseline py-6 hairline first:border-t-0 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="md:col-span-1 font-mono text-xs text-line-faint">{s.n}</span>
              <h3 className="md:col-span-4 font-sans text-lg text-line">{s.title}</h3>
              <p className="md:col-span-7 text-sm text-line-dim leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
