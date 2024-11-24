import React, { useEffect, useState } from "react";
import foto from "../Asset/ed15b7e5-24c5-4d41-8b83-774790b231fa.jpg";

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between ${
        fadeIn ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
    >
      <div className="max-w-lg md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4">
          HI, I'M Ahmad Aqiela
        </h1>
        <h3 className="text-xl md:text-2xl font-medium text-slate-200 mb-4">
          I'm a Front-end Developer
        </h3>
        <h4 className="text-lg md:text-xl font-normal text-slate-200 mb-8">
          I'M FROM INDONESIA
        </h4>
        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800">
            Got a project?
          </button>
          <a
            href="https://wa.me/+6283818375286"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600">
              Let's talk.
            </button>
          </a>
        </div>
      </div>
      <div className="relative mt-8 md:mt-0 flex justify-center items-center">
        <div className="bg-red-600 w-56 h-80 rounded-b-full"></div>
        <img
          src={foto}
          alt="Ahmad Aqiela"
          className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 object-cover rounded-full border-4 border-gray-300 ${
            fadeIn ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        />
      </div>
    </div>
  );
};

export default Hero;
