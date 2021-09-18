import React, { useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import MenuIcon from "@material-ui/icons/Menu";
import TypeWriter from "react-typewriter";

const Hero = () => {
  const [showUp, setShowUP] = useState(false);
  const showMenu = () => {
    setShowUP(!showUp);
  };
  return (
    <>
      <section id="headerSection">
        <nav id="nav__wrap">
          <button className="text-white" onClick={showMenu}>
            <MenuIcon className="menu__icon" />
          </button>
          <div className={showUp ? "show__active" : "show__dactive"}>
            <ul className="menu">
              <li>
                <a href="#" className="text-sm font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm font-semibold">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm font-semibold">
                  Skills
                </a>
              </li>
              <li>
                <a href="#work" className="text-sm font-semibold">
                  Work
                </a>
              </li>
              <li className="pr-0">
                <a href="#footer" className="text-sm font-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="banner text-white">
          <h1 style={{ animationDelay: "700ms" }}>
            <TypeWriter data-aos="fade-down" id="typing" typing={0.5}>
              I'm Md. Sagor
            </TypeWriter>
          </h1>

          <div data-aos="fade-up" className="flex justify-center">
            <a
              className="bg-purple-600 transition duration-500 hover:bg-purple-700 px-6 py-3 rounded-full text-base font-bold"
              href="#footer"
            >
              Contact Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

{
  /* <div className="flex mb-6">
            <h1 id="static" className="text-5xl static-txt mt-5">
              I am a
            </h1>
            <ul id="dynamic" className="text-5xl ml-2 dynamic-txts">
              <li>
                <span>Web Designer</span>
              </li>
              <li>
                <span>Web Development</span>
              </li>
              <li>
                <span>Freelancer</span>
              </li>
              <li>
                <span>JavaScript Developer</span>
              </li>
            </ul>
          </div> */
}
{
  /* <a
        href="#headerSection"
        className={`buttonup bg-purple-600 text-white rounded-full w-10 h-10 flex justify-center items-center ${
          showUp && "show__buttonup"
        }`}
      >
        <ExpandLessIcon />
      </a> */
}
