import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [isDay, setIsDay] = useState(false)
  const toggle = () => setIsDay((d) => !d)
  return (
    <ThemeContext.Provider value={{ isDay, toggle }}>
      <div
        className={`min-h-screen bg-[var(--bg)] text-[var(--fg)] transition-colors duration-[1400ms] ease-in-out ${
          isDay ? 'theme-day' : ''
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
