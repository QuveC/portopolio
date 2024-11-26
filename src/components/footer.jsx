import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-400">
            I'm a passionate Front-end Developer from Indonesia, constantly exploring new technologies and improving my skills. I love creating visually appealing and user-friendly web applications.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#home" className="hover:text-red-500">Home</a></li>
            <li><a href="#about" className="hover:text-red-500">About</a></li>
            <li><a href="#portfolio" className="hover:text-red-500">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://github.com/QuveC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-aqiela-3489872a2/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/_ahmd_aqla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm">&copy; 2024 Ahmad Aqiela. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
