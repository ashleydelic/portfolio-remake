import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Projects from './components/Projects'
import Toolkit from './components/Toolkit'
import Contact from './components/Contact'



function App() {
 
  return (
  <div >

    <NavBar />
    <Home />
    <About />
    <Projects />
    <Toolkit />
    <Contact />

    <SocialLinks />
  </div>
  )
}

export default App
