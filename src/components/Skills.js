import React from "react";
import skill from "./skill";

const Skills = () => {
  return (
    <div className="py-16" id="skills">
      <div className="row">
        <h1 className="mb-2 text-3xl text-center font-medium">Skills</h1>
        <span className="seperator mb-12"></span>
        <div className="flex justify-between items-center flex-wrap">
          <div
            className="skill flex flex-wrap justify-between items-center"
            style={{ width: "100%" }}
          >
            {skill.map((single, index) => {
              return (
                <div
                  data-aos="zoom-in"
                  className="progress__bar mb-4 font-medium"
                  key={index}
                >
                  <h3 className="progress__name mb-1 text-center mb-4">
                    {single.title}
                  </h3>
                  <div className="progress">
                    <div
                      className="prgress__done"
                      style={{ width: `${single.width}` }}
                    >
                      <span id="middlewidth">{single.width}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div
            data-aos="fade-up"
            className="sample__img"
            style={{ width: "45%" }}
          >
            <img
              className="rounded"
              src="https://images.unsplash.com/photo-1570717173024-ec8081c8f8e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
