import React from "react";
import { MdDone } from "react-icons/md";
import image1 from "../public/image/chose1.avif";
import image2 from "../public/image/chose2.avif";
import image3 from "../public/image/chose3.avif";

const ChoseUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div>
        {/*  we are innovative and digital below */}
        <div className="px-5 md:p-10  flex flex-col md:flex-row justify-between items-center">
          <div className="">
            <h2 className="text-[#db2777] tracking-2px"> WHY CHOOSE US </h2>
            <h1 className="md:text-[40px] text-[20px] my-2 font-bold">
              We are innovative and digital
            </h1>
            <p className="text-gray-900  text-[14px]">
              Capital Gold bank transformed the credit card business using data
              and technology more than ten years ago. We are now one of the
              largest digital banking providers, dedicated to innovating,
              simplifying, and humanizing banking.
            </p>
            {/* ///Done marks */}
            <div>
              <div className="relative flex mr-4 items-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl my-4 overflow-hidden group">
                <span className="relative bg-white shadow md:p-5 p-3 rounded-full overflow-hidden transition-all duration-500 mr-2">
                  <span className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                  <MdDone className="text-3xl text-[#db2777] transition-colors duration-500 relative z-10 group-hover:text-white" />
                </span>
                <p className="ml-2 transition-colors duration-500 text-black group-hover:text-[#db2777] font-bold md:text-[20px]">
                  Historical Currency Rates
                </p>
              </div>

              <div className="relative flex mr-4 items-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl my-4 overflow-hidden group">
                <span className="relative bg-white shadow md:p-5 p-3 rounded-full overflow-hidden transition-all duration-500 mr-2">
                  <span className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                  <MdDone className="text-3xl text-[#db2777] transition-colors duration-500 relative z-10 group-hover:text-white" />
                </span>
                <p className="ml-2 transition-colors duration-500 text-black group-hover:text-[#db2777] font-bold md:text-[20px]">
                  Travel Expense Calculator
                </p>
              </div>

              <div className="relative flex mr-4 items-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl my-4 overflow-hidden group">
                <span className="relative bg-white shadow md:p-5 p-3 rounded-full overflow-hidden transition-all duration-500 mr-2">
                  <span className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                  <MdDone className="text-3xl text-[#db2777] transition-colors duration-500 relative z-10 group-hover:text-white" />
                </span>
                <p className="ml-2 transition-colors duration-500 text-black group-hover:text-[#db2777] font-bold md:text-[20px]">
                  Currency Email Updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-3 items-start px-4">
        <div className="space-y-5">
          <div className="clip-div2">
            <img src={image1} />
          </div>
          <div className="clip-div2">
            <img src={image2} />
          </div>
        </div>
        <div className="clip-div ">
          <img src={image3} className="" />
        </div>
      </div>
    </div>
  );
};

export default ChoseUs;
