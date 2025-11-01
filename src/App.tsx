import React from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import BackToTop from './components/BackToTop'
import SEOHead from './components/SEOHead'

export default function App() {
  return (
    <>
      <SEOHead 
        title="Siva Kumar's Portfolio" 
        description="Full Stack Developer & Technical Writer experienced in React, Node.js, and Cloud technologies" 
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </>
  )
}
