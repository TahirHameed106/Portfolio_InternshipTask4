# Tahir Hameed — Portfolio (Day 1: Home Page)

**Concept — "Field Notes at Dusk":** the page reads like a naturalist's journal kept at
golden hour. The hero is a lantern-lit window looking out on a rain-flecked forest with
drifting fireflies; content sits in pinned "field note" cards; sections are labelled as
journal entries instead of generic headings; a lantern icon (bottom-right) toggles ambient
rain/forest sound.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## What's included (Day 1 scope)

- Project setup (Vite + React + Tailwind + Framer Motion)
- Responsive Navbar
- Hero section (animated dusk-window scene + typewriter role text)
- About section (journal timeline)
- Skills section (toolkit cards with animated proficiency bars)
- Services section
- Ambient sound toggle (needs an audio file, see below)

## Before you submit

1. **Photo:** if you want a real photo instead of the illustrated window scene as your
   hero visual, add it to `public/images/` and swap it into `Hero.jsx` — happy to wire
   that up for you.
2. **Ambient sound:** drop a royalty-free looping ambience track (rain + forest, a few
   free ones exist on mixkit.co or freesound.org — check the license on whichever you
   pick) at `public/audio/dusk-ambience.mp3`. The lantern button will play it automatically
   once the file exists; until then it shows a small note telling you the file is missing.
3. **Résumé:** add your real PDF at `public/resume.pdf` — the navbar's "Résumé" button
   already links there.
4. Double-check the About/Skills copy still matches how you'd describe yourself before
   you submit — I wrote it from what I know of your background, but it's easy to tweak.

## Next (Day 2 / Day 3, not built yet)

Projects grid (6+ dummy projects), resume/education timeline, testimonials, download-CV
button, contact section, footer with social links, contact form UI. Say the word and I'll
build those in the same visual language so the whole site feels like one piece.
