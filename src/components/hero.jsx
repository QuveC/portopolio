import React, { useEffect, useState } from "react";
import foto from "../Asset/ed15b7e5-24c5-4d41-8b83-774790b231fa.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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
        <h3 className="text-xl md:text-2xl font-medium text-Button mb-4">
          A Full Stack Developer
        </h3>
        <h4 className="text-lg md:text-xl font-normal text-black mb-8">
          BASED IN INDONESIA
        </h4>
        <div className="flex gap-0 group">
          <a href=" https://wa.me/+623818375286" target="_blank">
          <button className="bg-black text-white px-8 py-3 rounded-l-md group-hover:bg-red-500 transition-colors duration-300">
            Got a project?
          </button>

          <button className="bg-white text-black border border-black px-8 py-3 rounded-r-md group-hover:border-red-500 group-hover:text-Button transition-colors duration-300">
            Let's talk.
          </button>
          </a>
        </div>
      </div>
      <div className="relative mt-8 md:mt-0 flex justify-center items-center flex-col">
        <img
          src={foto}
          alt="Ahmad Aqiela"
          className={`w-72 h-72 object-cover rounded-lg border-4 border-slate-900 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out ${
            fadeIn ? "opacity-100" : "opacity-0"
          } hover:scale-110 hover:rotate-6`}
        />
        <div className="flex gap-4 mt-7">
          <a href="https://github.com/QuveC" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-gray-700 hover:text-black" />
          </a>
          <a href="https://www.linkedin.com/in/ahmad-aqiela-3489872a2/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-gray-700 hover:text-blue-700" />
          </a>
          <a href="https://www.instagram.com/_ahmd_aqla" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-gray-700 hover:text-pink-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
