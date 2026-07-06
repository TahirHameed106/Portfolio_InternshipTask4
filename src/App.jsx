import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import SoundToggle from './components/SoundToggle'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        {/* Fine paper-grain texture over the whole page */}
        <div className="pointer-events-none fixed inset-0 bg-grain z-40 mix-blend-overlay" />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <SoundToggle />
      </div>
    </ThemeProvider>
  )
}

export default App
