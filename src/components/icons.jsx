import React from 'react'

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconLayers = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <polygon points="12 3 21 8 12 13 3 8 12 3" />
    <polyline points="3 13 12 18 21 13" />
    <polyline points="3 17.5 12 22.5 21 17.5" />
  </svg>
)

export const IconPlug = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M9 3v5M15 3v5M6.5 8h11a1 1 0 0 1 1 1v3a5.5 5.5 0 0 1-5.5 5.5h-2A5.5 5.5 0 0 1 5.5 12V9a1 1 0 0 1 1-1Z" />
    <path d="M12 17.5V21" />
  </svg>
)

export const IconWindow = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
    <line x1="12" y1="3.5" x2="12" y2="20.5" />
    <line x1="3.5" y1="12" x2="20.5" y2="12" />
  </svg>
)

export const IconCompass = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <polygon points="14.5 9.5 13 13 9.5 14.5 11 11 14.5 9.5" />
  </svg>
)

export const IconCloud = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M7 18a4.2 4.2 0 0 1-1-8.27A5.5 5.5 0 0 1 16.5 8.5 4.5 4.5 0 0 1 16 18H7Z" />
  </svg>
)

export const IconMagnifier = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <line x1="15.3" y1="15.3" x2="20.5" y2="20.5" />
  </svg>
)
