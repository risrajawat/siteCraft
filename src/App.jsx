import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Guide from "./components/Guide";
import Footer from "./components/Footer";
import Features from "./components/Features";
import About from './components/About'
import { Navigate, useNavigate } from "react-router-dom";
const App = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoad(true);
  }, []);
  return (
    <>
      {load && (
        <div className="bg-gradient-to-r from-violet-400 via-yellow-300 to-pink-400">
          <Navbar />
          <Hero />
          <div id="guide">
            <Guide/>
          </div>
          <div id='feature'>
            <Features />
          </div>
          <div id='about'>
            <About/>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;