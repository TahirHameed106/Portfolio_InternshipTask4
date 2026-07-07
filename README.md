# Tahir Hameed — Portfolio (Day 1 + Day 2)

**Concept — "Sheet 01 — Systems."** A technical-drawing aesthetic: the site reads like a
set of engineering drawings. Full-bleed hero with no cards, sections labeled as numbered
sheets, projects presented as spec sheets, and one persistent circuit-trace line running
down the page that lights up as you scroll — a functional scroll indicator doubling as
the site's signature visual. Type is IBM Plex Sans + IBM Plex Mono (one family, built for
technical documents). Palette: near-black blueprint ink, pale blue-white linework, a
single safety-orange signal color for actions/status. No icon-grid, no emoji, no leftover
decoration from earlier drafts.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## What's included

**Day 1**
- Project setup (Vite + React + Tailwind + Framer Motion)
- Responsive navbar
- Hero — full-bleed title block, animated schematic backdrop, typewriter role text
- About (Sheet 02 — System) — spec-list facts + clean 4-entry timeline
- Skills (Sheet 03 — Stack) — categorized, tick-gauge proficiency (no progress-bar cards)
- Services (Sheet 04) — spec-sheet list, no icon cards

**Day 2**
- Projects (Sheet 05 — Case Studies) — 6 dummy projects, each with tags, a brief, and a
  named outcome, laid out as alternating spec-sheet rows
- Education & Experience (Sheet 06) — degree info, coursework tags, and a working
  **Download CV** button
- Testimonials (Sheet 07) — 3 dummy quotes, clearly marked as placeholders

**Persistent element**
- `ScrollTrace.jsx` — a vertical circuit-trace on desktop (top progress bar on mobile)
  that tracks which sheet you're on across the whole site

## Before you submit

1. **Résumé:** add your real PDF at `public/resume.pdf` — both the navbar's "Résumé"
   button and the Education section's "Download CV" button link there.
2. **Repo/Live links:** `Projects.jsx` has placeholder `#` links under "Repo →" / "Live →"
   for each project — point those at your actual GitHub repos and deployed URLs.
3. **Testimonials:** these are explicitly dummy per the assignment brief — swap in real
   quotes later if you get them, or leave as-is since the task allows placeholders.
4. Skim all copy (About facts, Education, Project briefs) to make sure it still matches
   how you'd describe yourself.

## Not built yet (Day 3)

Contact section, footer with social links, contact form UI, final responsive polish and
bug pass. Say the word and I'll build those next in the same visual language.


