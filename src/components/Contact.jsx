import React, { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const fields = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'Ahab tahir' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'AT.Services@company.com' },
]

const channels = [
  { k: 'Email', v: 'tahirdev47@example.com', href: 'mailto:tahirdev47@example.com' },
  { k: 'Location', v: 'Karachi, Pakistan', href: null },
  { k: 'Response', v: 'Within 24 hours', href: null },
]

const Contact = () => {
  const [ref, visible] = useReveal({ threshold: 0.15 })
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // UI-only per assignment scope — no backend wired up yet.
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 3500)
    setValues({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <p className="sheet-label mb-6">Sheet 08 — Contact</p>
        <h2 className="font-sans text-2xl md:text-3xl text-line mb-16 max-w-xl">
          Let&rsquo;s talk about what you&rsquo;re building.
        </h2>

        <div ref={ref} className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`md:col-span-7 space-y-6 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {fields.map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="block font-mono text-[11px] tracking-[0.15em] uppercase text-line-faint mb-2"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required
                    value={values[f.id]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    className="w-full bg-transparent border border-line-faint/40 focus:border-signal px-4 py-3 text-sm text-line placeholder:text-line-faint/60 outline-none transition-colors"
                  />
                </div>
              ))}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-[11px] tracking-[0.15em] uppercase text-line-faint mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={values.message}
                onChange={handleChange}
                placeholder="What are you looking to build?"
                className="w-full bg-transparent border border-line-faint/40 focus:border-signal px-4 py-3 text-sm text-line placeholder:text-line-faint/60 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-signal text-ink-deep font-mono text-xs tracking-[0.15em] uppercase font-semibold hover:bg-signal-dim transition-colors"
            >
              {status === 'sent' ? 'Message Queued ✓' : 'Send Message'}
              {status !== 'sent' && <span aria-hidden>→</span>}
            </button>

            {status === 'sent' && (
              <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-stamp">
                Thanks — this is a UI demo, so nothing was actually sent.
              </p>
            )}
          </form>

          {/* Direct channels */}
          <div
            className={`md:col-span-5 md:pl-10 md:border-l border-line-faint/25 transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-line-faint mb-3">
              Direct Channels
            </p>
            <dl className="space-y-4 mb-10">
              {channels.map((c) => (
                <div key={c.k} className="flex justify-between gap-4 hairline pt-3 first:pt-0 first:border-t-0">
                  <dt className="font-mono text-[11px] tracking-[0.15em] uppercase text-line-faint">{c.k}</dt>
                  <dd className="text-sm text-line text-right">
                    {c.href ? (
                      <a href={c.href} className="hover:text-signal transition-colors">
                        {c.v}
                      </a>
                    ) : (
                      c.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="text-sm text-line-dim leading-relaxed">
              Currently looking for a Web Development Projects. Open to remote,
              hybrid, or on-site — whatever gets me shipping real code fastest.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
