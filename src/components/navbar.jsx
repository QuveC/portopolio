import React from 'react'
import { Link } from 'react-router-dom'


const navbar = () => {
    
  return (
    
    <nav className="bg-slate-900 text-white py-4 shadow-md">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-red-500">
          QuvecDev
        </Link>
      </div>

      <div className="hidden md:flex space-x-8">
        <Link to="/" className="hover:text-red-500">
          Home
        </Link>
        <Link to="/portfolio" className="hover:text-red-500">
          Portfolio
        </Link>
        <Link to="/about" className="hover:text-red-500">
          About
        </Link>
        <Link to="/contact" className="hover:text-red-500">
          Contact
        </Link>
      </div>

      <div className="md:hidden">
        <button className="text-xl">☰</button> 
      </div>
    </div>
  </nav>
  )
}

export default navbar
