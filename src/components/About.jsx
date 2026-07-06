import React from 'react'
import JourneyMap from './JourneyMap'

const About = () => {
  return (
    <section id="about" className="relative px-6 md:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-6">
          <div className="md:col-span-2">
            <p className="eyebrow mb-3">Field Note — About</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
              What I've been <span className="italic text-accent">keeping notes on.</span>
            </h2>
            <p className="text-ink-dim leading-relaxed">
              I like software that's built the way a good trail is built — deliberately, with
              attention to what happens under load, and without cutting corners the next person
              has to pay for. Outside of code, I'm slow-paced by choice: long walks, quiet rooms,
              things that don't need to move fast to be good.
            </p>
          </div>
          <div className="md:col-span-3 flex items-end">
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-ink-faint">
              the journey so far — scroll to trace it
            </p>
          </div>
        </div>

        <JourneyMap />
      </div>
    </section>
  )
}

export default About
