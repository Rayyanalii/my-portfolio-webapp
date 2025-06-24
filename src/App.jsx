import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'

const App = () => {
  return (
    <>
      <Header />
      <main>

        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
      </main>
    </>
  )
}

export default App
