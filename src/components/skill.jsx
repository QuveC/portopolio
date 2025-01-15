import React from "react";
import Marquee from "react-fast-marquee";

const Skill = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center text-black py-12"
      data-aos="zoom-out"
      data-aos-delay="1700"
    >
      <div className="w-full flex flex-col">
        <Marquee autoFill pauseOnClick className="mb-6">
          <div className="bg-white m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-sky-400 border-2 border-sky-400">
            TailwindCSS
          </div>

          <div className="bg-white m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-sky-400 border-2 border-sky-400">
            Golang
          </div>
          <div className="bg-white m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-purple-500 border-2 border-purple-500">
            Bootstrap
          </div>
          <div className="bg-white m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-yellow-400 border-2 border-yellow-400">
            JavaScript
          </div>
        </Marquee>

        <Marquee autoFill pauseOnClick direction="right">
          <div className="bg-white m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-sky-400 border-2 border-sky-400">
            ReactJS
          </div>
          <div className="bg-white m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-violet-400 border-2 border-violet-400">
            ViteJS
          </div>
          <div className="bg-white m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-black border-2 border-black">
            Next.js
          </div>
          <div className="bg-white m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-sky-400 border-2 border-sky-400">
            React Native
          </div>
          <div className="bg-white m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-red-500 border-2 border-red-500">
            Laravel
          </div>
          <div className="bg-white m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-blue-700 border-2 border-blue-700">
            MySQL
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skill;
