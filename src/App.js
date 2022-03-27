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
// https://www.linkedin.com/posts/christine-yoo-cy_how-did-you-get-a-software-engineerfullstack-activity-6864093251188658176-2QkC
// https://coderkhalid.notion.site/coderkhalid/Front-End-Web-Development-Complete-Guide-Step-by-Step-94d00745c7144ae1a4fb843ac7ab38a9
// https://docs.google.com/forms/d/e/1FAIpQLSfkaHjZQWxq8H7neW8a8V23ybui-cyTe08j9ycP9BMkRaWXYw/viewform?fbclid=IwAR0LoO7wmYaX86TTQYwA5tdKbvuoO8XtYzF2_0mv0Fue1G60bQRe97QCwzY
//https://web.facebook.com/groups/745330659322217/?multi_permalinks=1245032559352022&hoisted_section_header_type=recently_seen&__cft__[0]=AZV7_5PqCF1gHIoiE7zu7kYqY_DWuo7K-9vPVkeAT7bC9XQu1Y03FIbweJiXwuZQZMZKLsPgWKLhzpQwwQo8bYkOA9_Impqhqqws9GUY-bjp3aUEETPq5sbe-DfHrFGjICQnuPPe6fx9FzJV4jLXd_ycoM7yDhoPlN6r3lmjD4UxcMBtI6hsjhXXE69Yg6B3rhE&__tn__=%2CO%2CP-R

// Hi,I am Raihan. I am an experienced Full stack web developer. I have worked in multiple technologies to build websites and web applications. For me as professional web developer, learning new technologies in web is my passion. Right now, I am working as Front-end developer on different platform. Just to inform you, JavaScript is my love. I love to code in JavaScript, build projects in JavaScript .
