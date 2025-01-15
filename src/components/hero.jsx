import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import file CSS AOS
import foto from "../Asset/ed15b7e5-24c5-4d41-8b83-774790b231fa.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inisialisasi AOS
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
      <div
        className="max-w-lg md:w-1/2 text-center md:text-left"
        data-aos="fade-right"
        data-aos-delay="200" // Delay 200ms
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          HI, I'M Ahmad Aqiela
        </h1>
        <h3
          className="text-xl md:text-2xl font-medium text-Button mb-4"
          data-aos="fade-left"
          data-aos-delay="400" // Delay 400ms
        >
          A Full Stack Developer
        </h3>
        <h4
          className="text-lg md:text-xl font-normal text-black mb-8"
          data-aos="fade-up"
          data-aos-delay="600" // Delay 600ms
        >
          BASED IN INDONESIA
        </h4>
        <div className="flex gap-0 group" data-aos="zoom-in" data-aos-delay="800">
          <a href="https://wa.me/+623818375286" target="_blank">
            <button className="bg-black text-white px-8 py-3 rounded-l-md group-hover:bg-red-500 transition-colors duration-300">
              Got a project?
            </button>
            <button className="bg-white text-black border border-black px-8 py-3 rounded-r-md group-hover:border-red-500 group-hover:text-Button transition-colors duration-300">
              Let's talk.
            </button>
          </a>
        </div>
      </div>
      <div
        className="relative mt-8 md:mt-0 flex justify-center items-center flex-col"
        data-aos="fade-left"
        data-aos-delay="1000" 
      >
        <img
          src={foto}
          alt="Ahmad Aqiela"
          className="w-72 h-72 object-cover rounded-lg border-4 border-slate-900 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-6"
        />
        <div className="flex gap-4 mt-7" data-aos="fade-in" data-aos-delay="1200">
          <a
            href="https://github.com/QuveC"
            target="_blank"
            rel="noopener noreferrer"
             data-aos-delay="1500"
             data-aos="fade-left"

          >
            <FaGithub size={30} className="text-gray-700 hover:text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-aqiela-3489872a2/"
            target="_blank"
            rel="noopener noreferrer"
             data-aos-delay="1600"
             data-aos="fade-left"

          >
            <FaLinkedin size={30} className="text-gray-700 hover:text-blue-700" />
          </a>
          <a
            href="https://www.instagram.com/_ahmd_aqla"
            target="_blank"
            rel="noopener noreferrer"
             data-aos-delay="1700"
             data-aos="fade-left"

          >
            <FaInstagram size={30} className="text-gray-700 hover:text-pink-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
