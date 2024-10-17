import React from "react";
import business from "../public/image/atm.jpg";
import cardheadline from "../public/image/image (6).avif";
import card1 from "../public/image/card1.avif";
import card2 from "../public/image/card2.avif";
import card3 from "../public/image/card3.avif";
import card4 from "../public/image/card4.avif";
import atmcard from "../public/image/armcard.avif";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaBusinessTime } from "react-icons/fa";
import { GiRapidshareArrow } from "react-icons/gi";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { GiSuspensionBridge } from "react-icons/gi";
import { PiHandWithdrawLight } from "react-icons/pi";
import phoneimage from "../public/image/image (5).avif";
import appstore from "../public/image/ii.avif";
import googlestrore from "../public/image/aa.avif";

import { Link } from "react-router-dom";

const CreditCard = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(219, 39, 119, 0.8), rgba(0, 0, 0, 0.8)), url(${business})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh", // Set a height as needed
          color: "white", // Adjust text color for visibility
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Center content vertically
          alignItems: "center", // Center content horizontally
        }}
        className=""
      >
        <h1 className="text-[40px]  font-bold">Credit Card</h1>
        <ul className="flex space-x-10">
          <li className="text-white font-semibold hover:text-[#db2777] transition-all duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#db2777] font-semibold list-disc   cursor-pointer">
            {" "}
            Credit Card
          </li>
        </ul>
      </div>
      <div className=" my-6 text-center px-[10px] md:w-[600px] mx-auto">
        <h1 className="text-center text-[18px] md:text-[22px] text-[#db2777] font-light">
          Capital Gold Trust bank
        </h1>

        <h2 className="font-bold text-[20px]  mt-2">
          We Invite You to See if You're Pre-Approved for a Credit Card from
          Capital Gold Bank
        </h2>
      </div>
      <div className="px-5 py-10">
        <div className="flex items-center my-4 ">
          <img src={cardheadline} />
          <h3 className="text-2xl font-semibold ml-2">Card Details</h3>
        </div>
        <div className=" gap-4 grid grid-cols-4 border-t-[1px] border-black ">
          <div className="flex  flex-col items-center my-4 ">
            <img
              src={card2}
              className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
            />
            <p className="text-xs">VISA</p>
            <hr className="mt-5 border-1  w-full border-black" />
          </div>

          <div className="flex  flex-col items-center my-4 ">
            <img
              src={card1}
              className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
            />
            <p className="text-xs">MAESTRO</p>
            <hr className="mt-5 border-1  w-full border-black" />
          </div>
          <div className="flex  flex-col items-center my-4 ">
            <img
              src={card3}
              className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
            />
            <p className="text-xs">AMEX</p>
            <hr className="mt-5 border-1  w-full border-black" />
          </div>
          <div className="flex  flex-col items-center my-4 ">
            <img
              src={card4}
              className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
            />
            <p className="text-xs">DISCOVER</p>
            <hr className="mt-5 border-1  w-full border-black" />
          </div>
        </div>
      </div>
      {/* apply For Card below */}
      <div className="px-5 md:px-5">
        <div className="flex justify-center  flex-col md:flex-row items-center  px-5 md:px-14">
          <div className="md:mr-16">
            <img src={atmcard} className=" " />
          </div>
          <div className=" text-center my-4">
            <h3 className="font-semibold text-[20px]">
              Apply For Credit Cards
            </h3>
            <p className="text-[16px] my-[8px] md:w-[300px]">
              Welcome to Rivero Trust Bank, Apply For Credit Cards to be
              delivered to your doorstep today.
            </p>
            <button class="overflow-hidden  w-36 p-2 h-12 bg-black text-white border-none rounded-md text-xs font-bold cursor-pointer relative z-10 group">
              APPLY
              <span class="absolute w-40 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
              <span class="absolute w-40 h-32 -top-8 -left-2 bg-[#db2777] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
              <span class="absolute w-40 h-32 -top-8 -left-2 bg-[#db2777] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
              <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute  left-10 z-10">
                APPLYING
              </span>
            </button>
          </div>
        </div>
        <hr className="my-5 border-1  w-full border-black" />
      </div>

      {/* ////////// */}
      <div className="px-5">
        <div className="grid grid-cols-1 md:grid-cols-3  my-4 gap-6">
          <div className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group">
            <div className="absolute inset-0 bg-[#db2777]  transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <SiGnuprivacyguard className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4  font-bold">
                Security Assured
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </div>

          <div className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group">
            <div className="absolute inset-0 bg-[#db2777] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <FaBusinessTime className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4  font-bold">
                Business Realiable
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </div>
          <div className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group">
            <div className="absolute inset-0 bg-[#db2777] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <GiRapidshareArrow className="text-[50px] md:text-[55px] text-[#db2777]  mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4  font-bold">
                Rapid Response
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </div>
          <div className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group">
            <div className="absolute inset-0 bg-[#db2777] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <GiSuspensionBridge className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4  font-bold">
                Pension
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </div>
          <div className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group">
            <div className="absolute inset-0 bg-[#db2777]  transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <MdEnergySavingsLeaf className="text-[50px] md:text-[55px] text-[#db2777]  mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4  font-bold">
                Savings
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </div>
          <div className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group">
            <div className="absolute inset-0 bg-[#db2777] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <PiHandWithdrawLight className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4  font-bold">
                Withdraw
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </div>
        </div>
      </div>

      {/*  draft display  */}
      <div className="flex  flex-col justify-center  md:flex-row  md:p-20 md:justify-between my-10 px-5  items-center ">
        <div className="flex justify-center my-5">
          <img src={phoneimage} className="w-[80%] h-auto" />
        </div>
        {/*    <div className="bg-yellow-400 w-[100px] h-[100px] rounded-full -mt-[70px] mr-[250px] animate-slow-bounce"></div> */}

        <div className="flex  flex-col">
          <h3 className="text-[#db2777] text-[20px] "> Our Cards</h3>
          <h1 className=" leading-9 mb-4 md:text-[40px] font-semibold ">
            Protect Your Card From Anywhere
          </h1>
          <p>
            Leave your card at the restaurant or drop it at the concert?
            Instantly lock your card with a few taps. And if you find it, unlock
            it just as fast.
          </p>
          <h3 className="text-2xl font-semibold my-4">
            Over 2 million credit card users
          </h3>

          <div className="flex  items-center mx-auto md:my-5 md:mx-0 space-x-3">
            <img
              src={appstore}
              className="md:w-[200px] w-[100px]  shadow-2xl rounded"
            />
            <img
              src={googlestrore}
              className="md:w-[200px] w-[100px] shadow-2xl rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
