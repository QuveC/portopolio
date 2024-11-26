import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="relative z-50">
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-red-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-red-600 transition duration-300 ease-in-out z-60"
        >
          <FaAngleDoubleUp size={24} />
        </button>
      </div>
    )
  );
};

export default BackToTopButton;
