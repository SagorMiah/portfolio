import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="py-8 bg-gray-800">
        <div className="container mx-auto">
          <div>
            <ul id="footer__menu" className="flex justify-center">
              <li>
                <a
                  target="_blank"
                  className="text-white socialLink transition duration-400"
                  href="https://www.facebook.com/samiulrpi0/"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="text-white socialLink transition duration-400"
                  href="https://github.com/sagormiah"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="text-white socialLink transition duration-400"
                  href="https://www.linkedin.com/in/md-sagor-641a4521a/"
                >
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
            <center className="mt-4">
              <span className="made">Made by </span>
              <a className="text-white" href="#">
                Md Sagor
              </a>
            </center>
          </div>
        </div>
        <a href="#headerSection" id="upButton" className="absolute">
          <KeyboardArrowUpIcon />
        </a>
      </footer>
    </>
  );
};

export default Footer;
