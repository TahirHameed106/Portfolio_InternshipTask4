import React, { useMemo } from 'react'

// Deterministic pseudo-random so the scene doesn't reshuffle on re-render
function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

const DuskWindow = () => {
  const rand = seeded(42)

  const fireflies = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        left: 6 + rand() * 88,
        top: 30 + rand() * 55,
        delay: rand() * 6,
        duration: 5 + rand() * 4,
        size: 2 + rand() * 2.5,
      })),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )

  const rain = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => ({
        left: rand() * 100,
        delay: rand() * 1.6,
        duration: 0.9 + rand() * 0.8,
        height: 40 + rand() * 60,
      })),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {/* Dusk sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A2440] via-[#3C2E3A] to-pine" />

      {/* Moon */}
      <div className="absolute top-[12%] right-[18%] w-16 h-16 rounded-full bg-[#F3E6C9] shadow-[0_0_60px_18px_rgba(243,230,201,0.25)] animate-flicker" />

      {/* Fog band */}
      <div className="absolute bottom-[28%] inset-x-0 h-24 bg-parchment/5 blur-2xl animate-drift" />

      {/* Pine silhouettes — back row */}
      <svg className="absolute bottom-0 w-full h-[55%]" viewBox="0 0 800 300" preserveAspectRatio="none">
        <g fill="#0D1611" opacity="0.65">
          {[40, 140, 260, 380, 500, 620, 740].map((x, i) => (
            <polygon key={i} points={`${x},300 ${x - 34},300 ${x - 10},210 ${x - 22},210 ${x},140 ${x + 22},210 ${x + 10},210 ${x + 34},300`} />
          ))}
        </g>
        <g fill="#0D1611">
          {[0, 100, 200, 320, 440, 560, 680, 780].map((x, i) => (
            <polygon key={i} points={`${x},300 ${x - 44},300 ${x - 14},185 ${x - 28},185 ${x},95 ${x + 28},185 ${x + 14},185 ${x + 44},300`} />
          ))}
        </g>
      </svg>

      {/* Fireflies */}
      {fireflies.map((f, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-ember-bright animate-firefly"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size,
            height: f.size,
            boxShadow: '0 0 6px 2px rgba(242,168,92,0.8)',
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
          }}
        />
      ))}

      {/* Rain streaks, on the "glass" */}
      <div className="absolute inset-0">
        {rain.map((r, i) => (
          <span
            key={i}
            className="absolute w-px bg-parchment/40 animate-rainfall"
            style={{
              left: `${r.left}%`,
              top: '-10%',
              height: r.height,
              animationDelay: `${r.delay}s`,
              animationDuration: `${r.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Window mullions (wooden cross frame), drawn last so it sits "in front of the glass" */}
      <div className="absolute inset-0 border-[14px] border-[#4A3524] rounded-lg pointer-events-none" />
      <div className="absolute inset-y-0 left-1/2 w-3 -translate-x-1/2 bg-[#4A3524] pointer-events-none" />
      <div className="absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 bg-[#4A3524] pointer-events-none" />
    </div>
  )
}

export default DuskWindow
