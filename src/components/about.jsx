import React from "react";

const About = () => {
  return (
    <div>
      <section className="bg-white p-8 my-28">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <h1 className="text-red-600 text-base md:text-lg font-semibold mb-4">Ahmad Aqiela</h1>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              About Me
            </h2>
          </div>

          <div className="md:w-1/2 text-left">
            <p className="text-xl md:text-2xl text-gray-800 mb-4">
              Developer with a design flair, embracing challenges to create engaging digital experiences.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Crafting seamless digital experiences as both a full-stack developer and UI designer, I merge code and design for user-friendly solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
