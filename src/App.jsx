import { useState } from 'react'


import Hero from './components/sections/Hero'
import About from './components/sections/About'
import SkillTree from './components/sections/SkillTree'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

function App() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <div className="pt-20 lg:pt-28 space-y-0">
         <Hero />
         <About />
         <SkillTree />
         <Projects />
         <Experience />
         <Contact />
      </div>
    </main>
  )
}

export default App
