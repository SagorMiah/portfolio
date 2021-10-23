import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import Quote from "./components/Quote";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <MyWork />
      <Quote />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
