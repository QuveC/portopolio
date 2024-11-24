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
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          HI, I'M Ahmad Aqiela
        </h1>
        <h3 className="text-xl md:text-2xl font-medium text-red-500 mb-4">
          A Front-end Developer
        </h3>
        <h4 className="text-lg md:text-xl font-normal text-black mb-8">
          BASED IN INDONESIA
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
      <div className="bg-gray-300 w-96 h-64 rounded-l-full ml-auto"></div>
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
