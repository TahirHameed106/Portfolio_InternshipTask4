/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // "Field Notes at Dusk" palette — named, not stock Tailwind swatches
        pine: {
          DEFAULT: '#141F19',
          light: '#1C2A22',
          deep: '#0D1611',
        },
        parchment: {
          DEFAULT: '#EFE6D3',
          dim: '#CFC4AC',
          faint: '#8C9184',
        },
        ember: {
          DEFAULT: '#D98B4A',
          bright: '#F2A85C',
          dim: '#A9642F',
        },
        rust: '#8C4A34',
        moss: {
          DEFAULT: '#5E7A5B',
          bright: '#7E9C77',
          dim: '#3B4E3A',
        },
      },
      boxShadow: {
        lantern: '0 0 40px 8px rgba(242,168,92,0.25)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(6px,-8px)' },
        },
        firefly: {
          '0%, 100%': { opacity: '0.15', transform: 'translate(0,0) scale(0.8)' },
          '35%': { opacity: '0.9', transform: 'translate(8px,-14px) scale(1)' },
          '65%': { opacity: '0.5', transform: 'translate(-6px,-24px) scale(0.9)' },
        },
        rainfall: {
          '0%': { transform: 'translateY(-20%)', opacity: '0' },
          '10%': { opacity: '0.5' },
          '100%': { transform: 'translateY(120%)', opacity: '0' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.85' },
          '52%': { opacity: '1' },
          '78%': { opacity: '0.9' },
        },
        riseIn: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        drift: 'drift 7s ease-in-out infinite',
        firefly: 'firefly 6s ease-in-out infinite',
        rainfall: 'rainfall 1.6s linear infinite',
        flicker: 'flicker 4s ease-in-out infinite',
        'rise-in': 'riseIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
      },
    },
  },
  plugins: [],
}
