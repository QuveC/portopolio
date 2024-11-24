import React from 'react'

const porto = () => {

    
  return (
  
    <div className="w-full flex flex-col justify-center items-center text-neutral-200 py-12">
    <div className="w-[90%] md:w-[75%] lg:w-[60%] flex flex-col">
      <div className="text-center mb-14 mt-10">
        <span className="text-slate-200 font-mono text-2xl mb-10">
          Portopolio
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-[#202020] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/150"
            alt="Project 1"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-white">Project 1</h3>
          <p className="text-sm text-gray-400">
            Deskripsi singkat tentang proyek ini.
          </p>
        </div>
        <div className="bg-[#202020] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://via.placeholder.com/150"
            alt="Project 2"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-white">Project 2</h3>
          <p className="text-sm text-gray-400">
            Deskripsi singkat tentang proyek ini.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default porto
