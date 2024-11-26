import React from "react";
import Hero from "../components/hero";
import Skill from "../components/skill";
import Sertifikat from "../components/sertifikat";
import Porto from "../components/porto";
import Footer from "../components/footer";
import Back from "../components/back";
import About from "../components/about";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const sections = [
    { id: "hero", component: <Hero /> },
    { id: "skill", component: <Skill /> },
    { id: "about", component: <About /> },
    { id: "portfolio", component: <Porto /> },
    { id: "Certifikat", component: <Sertifikat /> },
    { id: "contact", component: <Footer /> },
  ];

  return (
    <div>
      <Navbar />
      <Back />
      {sections.map((section) => (
        <div id={section.id} key={section.id}>
          {section.component}
        </div>
      ))}
    </div>
  );
};

export default Home;
