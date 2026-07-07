/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A121F',
          deep: '#060B14',
          raised: '#0E1B2E',
        },
        line: {
          DEFAULT: '#D7E1EC',
          dim: '#8695A8',
          faint: '#4A5A70',
        },
        signal: {
          DEFAULT: '#FF6A2B',
          dim: '#B3491C',
        },
        stamp: '#35D07F',
        grid: 'rgba(120,150,190,0.09)',
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(120,150,190,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(120,150,190,0.09) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      keyframes: {
        pulseLine: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-240' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        'pulse-line': 'pulseLine 6s linear infinite',
        blink: 'blink 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
