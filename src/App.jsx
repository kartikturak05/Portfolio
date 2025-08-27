import React, { useState } from 'react'
import LoadingIntro from './components/ui/LoadingIntro'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Projects from './components/sections/Projects'
import Footer from './components/sections/Footer'
<link href="/src/styles.css" rel="stylesheet"></link>

const App = () => {
   const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
      {!isLoaded && <LoadingIntro onComplete={() => setIsLoaded(true)} />}

        <div
          className={`relative min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}
        >
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />

      </div>
    </>
  )
}

export default App