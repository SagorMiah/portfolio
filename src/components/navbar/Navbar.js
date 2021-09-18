import React, { useState, useEffect } from "react";
import "./navbar.css";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });
  return (
    <>
      <header id="header" className={`nav ${show && "showNavBar"}`}>
        <nav className="py-6">
          <div className="menu">
            <ul className="flex">
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
      </header>
    </>
  );
};

export default Navbar;
