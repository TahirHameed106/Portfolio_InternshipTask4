import React from 'react'
import { useReveal } from '../hooks/useReveal'
import { IconLayers, IconPlug, IconWindow, IconCompass, IconCloud, IconMagnifier } from './icons'

const services = [
  {
    Icon: IconLayers,
    title: 'Full-Stack Web Apps',
    desc: 'End-to-end builds on the MERN stack — from schema design to a shipped, working UI.',
  },
  {
    Icon: IconPlug,
    title: 'API Design & Integration',
    desc: 'REST APIs built around clear contracts, validated in Postman before a line of frontend touches them.',
  },
  {
    Icon: IconWindow,
    title: 'Interface Implementation',
    desc: "Turning designs or rough ideas into responsive, accessible React interfaces.",
  },
  {
    Icon: IconCompass,
    title: 'Database Design',
    desc: 'Normalized schemas and sane relationships in MongoDB or MySQL that hold up under real use.',
  },
  {
    Icon: IconCloud,
    title: 'Cloud Deployment',
    desc: 'Getting projects off localhost — deployment, environment config, and basic cloud fundamentals.',
  },
  {
    Icon: IconMagnifier,
    title: 'Debugging & Code Review',
    desc: "Patient, methodical bug-hunting — understanding the root cause instead of patching the symptom.",
  },
]

const Services = () => {
  const [ref, visible] = useReveal({ threshold: 0.1 })

  return (
    <section id="services" className="relative px-6 md:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-3">Field Note — What I Do</p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-14 max-w-xl">
          Ground I'm comfortable <span className="italic text-accent">covering.</span>
        </h2>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`p-7 rounded-lg border bg-panel border-subtle hover:border-[var(--accent)] transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <s.Icon className="w-7 h-7 mb-4 text-accent" />
              <h3 className="font-display text-lg text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-ink-dim leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
