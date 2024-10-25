import React, { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
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
    <div className="transition-all translate-0 duration-300">
      {isVisible && (
        <div className="bg-red-500">
          <button
            className="bg-[#db2777] shadow-2xl shadow-black rounded-b-2xl rounded-s-3xl animate-slow-bounce p-4"
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              color: "white",
              border: "none",
              padding: "15px",
            }}
          >
            <BiArrowToTop />
          </button>
        </div>
      )}
    </div>
  );
};

export default Scroll;
