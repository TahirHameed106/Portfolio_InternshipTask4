import React from 'react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'Twitter / X', href: 'https://twitter.com/' },
  { label: 'Email', href: 'mailto:tahir.hameed@example.com' },
]

const sections = [
  { label: 'System', id: 'about' },
  { label: 'Stack', id: 'skills' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative px-6 md:px-10 pt-16 pb-10 border-t border-line-faint/20 bg-ink-deep">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <a href="#top" className="font-mono text-sm tracking-[0.15em] text-line">
              TH<span className="text-signal">—</span>01
            </a>
            <p className="mt-4 text-sm text-line-dim leading-relaxed max-w-xs">
              Software Engineering student and full-stack developer, building systems
              end to end — from schema to shipped UI.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-line-faint mb-4">
              Sections
            </p>
            <ul className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-line-dim hover:text-signal transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-line-faint mb-4">
              Elsewhere
            </p>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-sm text-line-dim hover:text-signal transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-line-faint">
            © {year} Tahir Hameed — Sheet closed.
          </p>
          <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-line-faint">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
