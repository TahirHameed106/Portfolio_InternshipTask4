import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import SoundToggle from './components/SoundToggle'

function App() {
  return (
    <div className="relative bg-pine">
      {/* Fine paper-grain texture over the whole page */}
      <div className="pointer-events-none fixed inset-0 bg-grain z-40 mix-blend-overlay" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <SoundToggle />
    </div>
  )
}

export default App
