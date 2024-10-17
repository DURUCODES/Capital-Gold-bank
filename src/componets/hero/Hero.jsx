import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import smile from "../public/image/image (1).avif";
import manimage from "../public/image/image.avif";
import VideoModal from "../Modal/Modal";

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
      <div className=" md:w-[50%] ">
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
          <button class="overflow-hidden  w-36 p-2 h-12 bg-black text-white border-none rounded-md text-xs font-bold cursor-pointer relative z-10 group">
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
      </div>
      <div className="overflow-hidden  h-64">
        <img src={smile} className="mask mask-hexagon " />
        <img src={manimage} className="" />
      </div>
    </div>
  );
};

export default Hero;

/*  */
