import React, { useState } from "react";
import LoadingIntro from "./components/ui/LoadingIntro";
import NavBar from "./components/ui/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/sections/HomePage";
<link href="/src/styles.css" rel="stylesheet"></link>;

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingIntro onComplete={() => setIsLoaded(true)} />}

      <div
        className={`relative min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <div className="pb-30 md:pb-1">
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
{/*         
        <div>
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div> */}
      </div>
    </>
  );
};

export default App;
