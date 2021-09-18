import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 text-white">
      <div className="row">
        <h1 className="text-center text-3xl font-bold mb-16">
          Contact With me
        </h1>
        <div className="">
          <form
            className="w-1/2 mx-auto submitform"
            onClick={(e) => e.preventDefault()}
          >
            <div className="flex justify-between flex-wrap">
              <div className="namenumber">
                <label data-aos="fade-up" htmlFor="">
                  Your Name
                </label>
                <input
                  data-aos="fade-up"
                  className="w-full rounded mb-2 mt-1 p-2 outline-none bg-gray-300 focus:bg-white"
                  type="text"
                />
              </div>
              <div className="namenumber">
                <label data-aos="fade-up" htmlFor="">
                  Your Phone Number
                </label>
                <input
                  data-aos="fade-up"
                  className="w-full rounded mb-2 mt-1 p-2 outline-none bg-gray-300 focus:bg-white"
                  type="number"
                />
              </div>
            </div>
            <div>
              <label data-aos="fade-up" htmlFor="">
                Email
              </label>
              <input
                data-aos="fade-up"
                className="w-full rounded mb-2 mt-1 p-2 outline-none bg-gray-300 focus:bg-white"
                type="email"
              />
            </div>
            <div>
              <label data-aos="fade-up" htmlFor="">
                Subject
              </label>
              <input
                data-aos="fade-up"
                className="w-full rounded mb-2 mt-1 p-2 outline-none bg-gray-300 focus:bg-white"
                type="text"
              />
            </div>
            <div>
              <label data-aos="fade-up" htmlFor="">
                Message
              </label>
              <textarea
                data-aos="fade-up"
                className="w-full rounded mt-1 outline-none bg-gray-300 focus:bg-white"
                name=""
                id=""
                cols=""
                rows="7"
              ></textarea>
            </div>
            <input
              data-aos="fade-up"
              className="text-black py-2 px-4 rounded font-semibold cursor-pointer mt-2 bg-purple-600 text-white transition duration-400 hover:bg-purple-700"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
