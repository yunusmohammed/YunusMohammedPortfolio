import React from 'react'
import About from './components/About'
import Contact from './components/Contacts'
import Education from './components/Education'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import Testimonials from './components/Testimonials'
import './App.css'

export default function App () {
  return (
    <main className='text-white body-font'>
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
