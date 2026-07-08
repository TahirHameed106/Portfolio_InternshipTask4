import React from 'react'
import Navbar from './components/Navbar'
import ScrollTrace from './components/ScrollTrace'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Education from './components/Education'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative">
      <ScrollTrace />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
