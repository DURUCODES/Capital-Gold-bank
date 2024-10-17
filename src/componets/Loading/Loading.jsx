import React, { useState } from "react";
import Goldhand from "../public/image/goldhand.jpg";

const Loading = () => {
  return (
    <div className="text-center">
      <div class="flex justify-center flex-col items-center h-screen">
        <img
          src={Goldhand}
          class="transition-transform duration-700 delay-150 transform hover:scale-50 hover:rotate-[360deg] animate-bounce mb-5"
          alt="Goldhand"
        />
        <h1 className="text-yellow-500 font-bold text-xs md:text-2xl">
          Capital Gold
        </h1>
        <p className="text-[#db2777] font-bold  text-[10px] md:text-sm">
          Banking and Finance
        </p>
      </div>
    </div>
  );
};

export default Loading;
