import React from "react";
import works from "./work";

const MyWork = () => {
  return (
    <div className="py-16" id="work">
      <div className="row">
        <h1 className="mb-16 text-3xl text-center font-medium">
          CHECK OUT SOME OF MY WORKS
        </h1>
        <div className="flex justify-between flex-wrap">
          {works.map((work) => {
            return (
              <a
                data-aos="flip-left"
                href={work.link}
                target="_blank"
                className="work cursor-pointer mb-8 relative transition duration-500"
              >
                <div id="image__wrap" key={work.id}>
                  <img src={work.img} alt="" />
                  <h3 className="absolute top-2 left-2 opacity-0 transition duration-500 text-white">
                    {work.title}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>
        <center data-aos="fade-up">
          <a
            className="bg-purple-600 rounded-full px-6 py-3 text-white github transition duration-500 font-semibold"
            href="https://github.com/sagormiah"
            target="_blank"
          >
            Check Out My Github
          </a>
        </center>
      </div>
    </div>
  );
};

export default MyWork;
