# Tahir Hameed — Portfolio (Day 1: Home Page)

**Concept — "Field Notes at Dusk / Dawn":** the page reads like a naturalist's journal.
The hero is a window with a clickable moon — click it and the whole site slowly morphs:
moon → sun, dusk forest → morning mountains, fireflies → birds, and every color on the
page (background, text, panels, accents) crossfades to a warm daytime palette. The About
section is a hand-drawn dotted trail map with pinned waypoints instead of a plain
timeline — a small ember of light travels along the path as you scroll. All icons are
custom-drawn line art, no emoji.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## What's included (Day 1 scope)

- Project setup (Vite + React + Tailwind + Framer Motion)
- Responsive navbar (theme-aware, custom hamburger icon)
- Hero: clickable sun/moon window that drives the whole site's day/night theme
- About: scroll-driven dotted journey map with waypoint pins
- Skills: toolkit cards with animated proficiency bars
- Services: custom-drawn icon cards (no emoji)
- Ambient sound toggle with a drawn flame icon (needs an audio file, see below)

## How the day/night toggle works

`src/context/ThemeContext.jsx` holds a single `isDay` boolean. Clicking the sun/moon in
`SkyWindow.jsx` flips it. Every themed color in the site (background, panels, text,
borders, accent) is a CSS variable defined in `src/index.css` under `:root` (night) and
`.theme-day` (day), so the whole page crossfades together over ~1.4s. If you want to
change the palette, edit those two variable blocks — nothing else needs to change.

## Before you submit

1. **Photo:** if you want a real photo instead of the illustrated window as your hero
   visual, add it to `public/images/` and I can wire it in alongside the window.
2. **Ambient sound:** drop a royalty-free looping ambience track (rain + forest, a few
   free ones exist on mixkit.co or freesound.org — check the license) at
   `public/audio/dusk-ambience.mp3`. The flame button plays it automatically once the
   file exists.
3. **Résumé:** add your real PDF at `public/resume.pdf` — the navbar's "Résumé" button
   already links there.
4. Double-check the About/journey-map copy still matches how you'd describe yourself.

## Next (Day 2 / Day 3, not built yet)

Projects grid (6+ dummy projects), resume/education timeline, testimonials, download-CV
button, contact section, footer with social links, contact form UI — all in the same
day/night-aware visual language. Say the word and I'll build those next.

