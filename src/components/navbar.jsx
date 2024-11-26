import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-slate-900 text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to="/" className="hover:text-sky-400">
              QuvecDev
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-Button">
              Home
            </a>
            <a href="#about" className="hover:text-Button">
              About
            </a>
            <a href="#portfolio" className="hover:text-Button">
              Portfolio
            </a>
            <a href="#Certifikat" className="hover:text-Button">
              Certifikat
            </a>
            <a href="#contact" className="hover:text-Button">
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-slate-800 transform transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <ul className="flex flex-col space-y-2 py-4 px-4">
            <li>
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-Button"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-Button"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-Button"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#Certifikat"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-Button"
              >
                Certifikat
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-Button"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
