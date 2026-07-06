import React from 'react'
import { useReveal } from '../hooks/useReveal'

const timeline = [
  { time: '2023', note: 'Began BS Software Engineering at Bahria University Karachi Campus' },
  { time: '2024', note: 'Went deep on the MERN stack — Node, Express, MongoDB, React' },
  { time: '2025', note: 'Shipped 5+ full-stack projects; started studying cloud architecture' },
  { time: '2026', note: 'Sixth semester, hunting for an internship worth learning from' },
]

const About = () => {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="relative px-6 md:px-8 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <p className="eyebrow mb-3">Field Note — About</p>
          <h2 className="font-display text-3xl md:text-4xl text-parchment mb-6">
            What I've been <span className="italic text-ember-bright">keeping notes on.</span>
          </h2>
          <p className="text-parchment-dim leading-relaxed">
            I like software that's built the way a good trail is built — deliberately, with
            attention to what happens under load, and without cutting corners the next person
            has to pay for. Outside of code, I'm slow-paced by choice: long walks, quiet rooms,
            things that don't need to move fast to be good.
          </p>
        </div>

        <div ref={ref} className="md:col-span-3 relative pl-8 border-l border-moss-dim/50">
          {timeline.map((item, i) => (
            <div
              key={item.time}
              className={`relative mb-10 last:mb-0 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-ember-bright shadow-[0_0_10px_2px_rgba(242,168,92,0.5)]" />
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-ember-bright/80 mb-1">
                {item.time}
              </p>
              <p className="text-parchment leading-relaxed max-w-lg">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
