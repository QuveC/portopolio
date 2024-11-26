import React from "react";
import Hero from "../components/hero";
import Skill from "../components/skill";
import Sertifikat from "../components/sertifikat";
import Porto from "../components/porto";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Back from "../components/back";
import About from "../components/about";
const Home = () => {
  return (
    <div >
      
   <Navbar />
   <Back />
   <Hero />
   <Skill />
   <About />
   <Porto />
   <Sertifikat />
   <Footer />
    </div>
  );
};

export default Home;
