import React, { useMemo } from 'react'
import { useTheme } from '../context/ThemeContext'

function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

const NightScene = ({ visible }) => {
  const rand = seeded(42)
  const fireflies = useMemo(
    () =>
      Array.from({ length: 14 }).map(() => ({
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
      Array.from({ length: 26 }).map(() => ({
        left: rand() * 100,
        delay: rand() * 1.6,
        duration: 0.9 + rand() * 0.8,
        height: 40 + rand() * 60,
      })),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-[1400ms] ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A2440] via-[#3C2E3A] to-[#141F19]" />
      <div className="absolute bottom-[28%] inset-x-0 h-24 bg-white/5 blur-2xl animate-drift" />

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
    </div>
  )
}

const DayScene = ({ visible }) => {
  const rand = seeded(7)
  const birds = useMemo(
    () =>
      Array.from({ length: 5 }).map(() => ({
        top: 14 + rand() * 30,
        delay: rand() * 10,
        duration: 14 + rand() * 10,
        scale: 0.7 + rand() * 0.6,
      })),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-[1400ms] ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#BFE0EC] via-[#E9D9AE] to-[#F3E8D0]" />

      {/* Soft drifting clouds */}
      <div className="absolute top-[16%] left-[12%] w-24 h-6 rounded-full bg-white/60 blur-sm animate-drift" />
      <div className="absolute top-[26%] right-[20%] w-16 h-5 rounded-full bg-white/50 blur-sm animate-drift" style={{ animationDelay: '2s' }} />

      {/* Mountains, morning light */}
      <svg className="absolute bottom-0 w-full h-[55%]" viewBox="0 0 800 300" preserveAspectRatio="none">
        <polygon points="0,300 0,170 120,80 240,150 360,60 480,140 600,90 720,160 800,110 800,300" fill="#8CA2AE" opacity="0.55" />
        <polygon points="0,300 0,210 150,130 300,190 450,110 600,180 750,140 800,170 800,300" fill="#5F7C89" />
        <polygon points="120,80 140,95 150,80 160,95 120,80" fill="#F3E8D0" opacity="0.8" />
        <polygon points="360,60 382,78 392,60 402,78 360,60" fill="#F3E8D0" opacity="0.8" />
      </svg>

      {birds.map((b, i) => (
        <svg
          key={i}
          viewBox="0 0 24 12"
          className="absolute w-6 h-3"
          style={{
            top: `${b.top}%`,
            left: '-8%',
            transform: `scale(${b.scale})`,
            animation: `flyAcross ${b.duration}s linear infinite`,
            animationDelay: `${b.delay}s`,
          }}
        >
          <path d="M0 8 Q6 0 12 6 Q18 0 24 8" stroke="#3A3226" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </svg>
      ))}
      <style>{`
        @keyframes flyAcross {
          from { transform: translateX(0) scale(var(--s,1)); }
          to { transform: translateX(760px) scale(var(--s,1)); }
        }
      `}</style>
    </div>
  )
}

const SkyWindow = () => {
  const { isDay, toggle } = useTheme()

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <NightScene visible={!isDay} />
      <DayScene visible={isDay} />

      {/* Clickable celestial body — moon at night, sun by day */}
      <button
        onClick={toggle}
        aria-label={isDay ? 'Switch to night view' : 'Switch to morning view'}
        className="absolute top-[12%] right-[16%] w-16 h-16 rounded-full cursor-pointer transition-all duration-[1400ms] ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        style={{
          background: isDay
            ? 'radial-gradient(circle at 35% 35%, #FFE9B0, #F2A85C 70%)'
            : '#F3E6C9',
          boxShadow: isDay
            ? '0 0 70px 22px rgba(242,168,92,0.45)'
            : '0 0 60px 18px rgba(243,230,201,0.25)',
        }}
      />

      {/* Window mullions */}
      <div className="absolute inset-0 border-[14px] border-[#4A3524] rounded-lg pointer-events-none" />
      <div className="absolute inset-y-0 left-1/2 w-3 -translate-x-1/2 bg-[#4A3524] pointer-events-none" />
      <div className="absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 bg-[#4A3524] pointer-events-none" />
    </div>
  )
}

export default SkyWindow
