import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import ReadyToStart from "./Components/ReadyToStart";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import LocomotiveScroll from 'locomotive-scroll';



function App() {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=" select-none bg-[#F1F1F1]">
      <Nav />
      <Home />
      <Marquee />
      <About />
      <Eyes />
      <Projects />
      <ReadyToStart />
      <Footer />
    </div>
  );
}

export default App;
