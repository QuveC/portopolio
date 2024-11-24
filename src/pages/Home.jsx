import React from "react";
import Hero from "../components/hero";
import Skill from "../components/skill";
import Sertifikat from "../components/sertifikat";
import Porto from "../components/porto";
import Navbar from "../components/navbar";
const Home = () => {
  return (
    <div className="bg-slate-900">
      
   <Navbar />
   <Hero />
   <Skill />
   <Porto />
   <Sertifikat />
    </div>
  );
};

export default Home;
