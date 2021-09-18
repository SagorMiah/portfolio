import React from "react";

const About = () => {
  return (
    <div id="about" className="py-16">
      <div className="row">
        <h1 className="mb-2 text-3xl text-center font-medium">About</h1>
        <span className="seperator mb-12"></span>
        <div id="about__wrap" className="flex justify-between w-4/5 mx-auto">
          <div data-aos="fade-right" className="avatar___image">
            <img className="rounded-full" src="/images/avatar.jpg" alt="" />
          </div>
          <div data-aos="fade-left" className="own__info abdescription w-8/12">
            <h1 className="font-medium text-2xl mb-2">I'm Md Sagor.</h1>
            <p>
              A young entrepreneur (only 18 years old). At the age of 16, I
              started my entrepreneurial journey. With over 2 years of
              professional experience, I'm a Web designer and UI/UX designer. I
              have learned about Web design from FN Softwares & institute. Still
              I am working on the Fiverr as a Web designer. I have already done
              many projects. you can see my some projects on the below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
// http://www.innovationplans.com/idesign/kewll/demo1-dark.html
