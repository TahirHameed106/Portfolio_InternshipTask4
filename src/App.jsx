import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import ScrollTrace from "./components/ScrollTrace";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-50 overflow-hidden">

        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[140px]" />

      </div>

      {/* Progress Indicator */}
      <ScrollTrace />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>

        <Hero />

        <About />

        <Skills />

        <Services />

        <Projects />

        <Education />

        <Testimonials />

      </main>

    </div>
  );
}

export default App;