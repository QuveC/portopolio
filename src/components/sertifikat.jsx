import React, { useEffect } from "react";
import serti1 from "../Asset/sertifikat/bnsp.png";
import serti2 from "../Asset/sertifikat/c++.png";
import serti3 from "../Asset/sertifikat/creatonme.png";
import serti4 from "../Asset/sertifikat/dataascien.png";
import serti5 from "../Asset/sertifikat/dcoding.png";
import serti6 from "../Asset/sertifikat/html.png";
import serti7 from "../Asset/sertifikat/idn.png";
import serti8 from "../Asset/sertifikat/java (2).png";
import serti9 from "../Asset/sertifikat/landing page.png";
import serti10 from "../Asset/sertifikat/laravel.png";
import serti11 from "../Asset/sertifikat/sakubi.png";

const Certificates = () => {


  const portfolio = [
    { id: 1, image: serti1, title: "Certificate BNSP", description: "Official BNSP certificate." },
    { id: 2, image: serti2, title: "Certificate C++", description: "C++ certification." },
    { id: 3, image: serti3, title: "Certificate Creaton Me", description: "Gameboard workshop certificate." },
    { id: 4, image: serti4, title: "Certificate Data Science", description: "Data science certificate." },
    { id: 5, image: serti5, title: "Certificate Dicoding", description: "Learning programming at Dicoding." },
    { id: 6, image: serti6, title: "Certificate HTML", description: "HTML fundamentals." },
    { id: 7, image: serti7, title: "Certificate IDN", description: "Semi Finalist Web Design." },
    { id: 8, image: serti8, title: "Certificate Java", description: "Java certification." },
    { id: 9, image: serti9, title: "Certificate Landing Page", description: "Landing page certification." },
    { id: 10, image: serti10, title: "Certificate Laravel", description: "Laravel framework certification." },
    { id: 11, image: serti11, title: "Certificate Sakubi", description: "Sakubi training certificate." },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center text-neutral-200 py-12" id="Certifikat">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-14 mt-10">
          <span className="text-black font-normal text-2xl mb-10">Certificates</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolio.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#202020] p-2 rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
              data-aos="flip-left"
              data-aos-delay={index * 200} 
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[250px] object-contain rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-white px-4 py-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
