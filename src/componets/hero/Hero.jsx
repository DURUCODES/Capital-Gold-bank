import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import smile from "../public/image/image (1).avif";
import man from "../public/image/mann.avif";
import user from "../public/image/uuuu.avif";
import VideoModal from "../Modal/Modal";
import user1 from "../public/image/person1.avif";
import user2 from "../public/image/person2.avif";
import user3 from "../public/image/person3.avif";
import dollar from "./image/dollar.jpg";
import dollarrolling from "./image/cc.gif";
import coin1 from "./image/coinroll.gif";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlay = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between overflow-hidden bg-white px-3 md:p-10">
      <div
        className=" md:w-[50%]"
        style={{
          backgroundImage: `url(${coin1})`,
          backgroundSize: "120px 120px",
          backgroundPosition: "  right top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex  space-x-1 text-red-800  text-[13px] md:text-[15px]">
          <h3>SIMPLE,</h3>
          <h3>QUICK,</h3>
          <h3>SECURED</h3>
        </div>
        <div className="flex">
          <h1 className="text-[32px] md:text-[45px] my-4 font-bold leading-tight">
            Transfer Money Across <br className="hidden md:block" />
            The World In Real time
          </h1>
        </div>
        <p>
          <span className="text-yellow-500 font-bold mr-2"> Capital Gold</span>
          transformed the digital banking industry using data and technology
          more than ten years ago. We are now one of the largest digital banking
          providers, dedicated to innovating, simplifying, and humanizing
          banking.
        </p>
        <div className="flex items-center space-x-2 my-5">
          <button class="overflow-hidden  w-36 p-2 h-12 bg-black text-white border-none rounded-md text-xs font-bold cursor-pointer relative z-0 group">
            Online Banking
            <span class="absolute w-40 h-28 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span class="absolute w-40 h-28 -top-8 -left-2 bg-[#db2777] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span class="absolute w-40 h-28 -top-8 -left-2 bg-[#db2777] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
            <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute  left-6 z-10">
              Online Banking
            </span>
          </button>
          <button
            onClick={handlePlay}
            className="shadow-xl py-5 px-5 rounded-full bg-red-700 text-white hover:bg-red-500 flex items-center "
          >
            <span>
              <FaPlay className="font-bold  text-[15px]" />
            </span>
          </button>
          <p className="text-gray-500">play video</p>
          {isModalOpen && (
            <VideoModal videoId="oDDbVC3Hekc" onClose={handleClose} />
          )}
        </div>

        <div
          className="flex justify-between space-x-10    w-full md:w-[600px]"
          style={{
            backgroundImage: `url(${dollarrolling})`,
            backgroundSize: "50px 50px",
            backgroundPosition: " right  top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex">
            <img
              src={user1}
              className="rounded-full border-gray-100 w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            />
            <img
              src={user2}
              className="rounded-full border-gray-100 w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            />
            <img
              src={user3}
              className="rounded-full border-gray-100 w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            />
          </div>
          <div className=" mb-10 ">
            <p className="text-[#7777777] md:text-[18px] text-[14px] ">
              Need Help? Contact our{" "}
              <span className="text-blue-700">digital support</span> & tell us
              about your query.
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex space-x-4 items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${dollar})`,
          backgroundSize: "120px 120px",
          backgroundPosition: "  right top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative overflow-hidden w-[200px] h-[300px] md:h-[550px] md:w-[300px] clip-left">
          <img src={man} className="h-full w-auto object-cover relative  " />
        </div>

        <div className="bg-white rounded px-2 absolute  flex items-center z-10 animate-up-down">
          <div>
            <img src={user} className="w-[80px]" />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-[22px]">18.5M+</h2>
            <p className="text-[14px]">Active Users</p>
          </div>
        </div>

        <div className="relative overflow-hidden w-[200px]  h-[350px] md:h-[550px] md:w-[300px] clip-left top-20">
          <img src={smile} className="h-full w-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

/*  */
