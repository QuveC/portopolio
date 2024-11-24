import React from 'react'
import Marquee from 'react-fast-marquee'

const skill = () => {
    
  return (
    <div className="w-full flex flex-col justify-center items-center text-neutral-200 py-12">
    <div className="w-[90%] md:w-[75%] lg:w-[60%] flex flex-col">
      <div className="text-center mb-14 mt-10">
        <span className="text-slate-200 font-mono text-2xl mb-10">
          My Skills
        </span>
      </div>
      <Marquee autoFill pauseOnClick className="mb-6">
        <div className="bg-[#202020] m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-sky-400">
          TailwindCSS
        </div>
        <div className="bg-[#202020] m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-red-600">
          HTML
        </div>
        <div className="bg-[#202020] m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-sky-400">
          Golang
        </div>
        <div className="bg-[#202020] m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-purple-500">
          Bootstrap
        </div>
        <div className="bg-[#202020] m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-yellow-400">
          JavaScript
        </div>
      </Marquee>
      <Marquee autoFill pauseOnClick direction="right">
        <div className="bg-[#202020] m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-sky-400">
          ReactJS
        </div>
        <div className="bg-[#202020] m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-violet-400">
          ViteJS
        </div>
        <div className="bg-[#202020] m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-white">
          Next.js
        </div>
        <div className="bg-[#202020] m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-sky-400">
          React Native
        </div>
        <div className="bg-[#202020] m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-red-500">
          Laravel
        </div>
        <div className="bg-[#202020] m-1 rounded-xl p-4 font-bold text-2xl cursor-pointer text-blue-700">
          MySQL
        </div>
      </Marquee>
    </div>
  </div>
  )
}

export default skill
