import React from "react";
import business from "../public/image/saboutbg.jpg";
import cardheadline from "../public/image/image (6).avif";
import card1 from "../public/image/homeloan.avif";
import card2 from "../public/image/carloan.avif";
import card3 from "../public/image/medicalloan.avif";
import card4 from "../public/image/businessloan.avif";
import atmcard from "../public/image/applyloan.avif";
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
import Sliding from "../sliding/Sliding";
import about1 from "../public/image/about1.avif";
import about2 from "../public/image/about2.avif";
import about3 from "../public/image/about3.avif";
import about4 from "../public/image/about4.avif";
import { TbHandClick } from "react-icons/tb";
import { CiAlarmOn } from "react-icons/ci";
import { SiBetterstack } from "react-icons/si";
import popfly from "../public/image/popimg.avif";
import lightimg from "../public/image/lightimg.avif";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import clapimg from "../public/image/clap.avif";
import roundpop from "../public/image/roundpop.avif";
import Counter from "../counter/Counter";

const About = () => {
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
        <h1 className="text-[40px]  font-bold">About Us</h1>
        <ul className="flex space-x-10">
          <li className="text-white font-semibold hover:text-[#db2777] transition-all duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#db2777] font-semibold list-disc   cursor-pointer">
            {" "}
            About Us
          </li>
        </ul>
      </div>
      <div className=" my-6 text-center px-[10px] md:w-[600px] mx-auto">
        <h1 className="text-center text-[25px] md:text-[32px] w-full text-[black] font-bold ">
          Used By 100K+ Businesses Of All Shapes & Sizes
        </h1>
      </div>

      {/* Sliding below */}
      <div className="md:px-10">
        {" "}
        <Sliding />
      </div>

      {/* about details below */}
      <div className="flex  justify-between  md:flex-row flex-col items-center  px-5 md:px-10">
        <img
          src={popfly}
          className="absolute w-16 md:left-[25%] left-[70%] md:top-[100%] top-[93%] animate-move-left-right"
        />

        <div className="grid grid-cols-2 gap-2">
          {/* Row 1 */}
          <div>
            <img
              src={about1}
              className="md:w-[300px] md:h-[350px] object-cover rounded"
            />
          </div>
          <div>
            <img
              src={about2}
              className="md:w-[300px] md:h-[300px] my-10 object-cover rounded"
            />
          </div>

          {/* Row 2 */}
          <div className="relative">
            <img
              src={about3}
              className="md:w-[300px] md:h-[350px] object-cover  rounded"
            />
            <img
              src={lightimg}
              className="w-[200px]  left-0 -mt-10 bouncepic relative"
            />
          </div>
          <div>
            <img
              src={about4}
              className="md:w-[300px] md:h-[350px] md:my-10 object-cover rounded"
            />
          </div>
        </div>

        <div className="md:ml-16">
          {/* right sidelightimg */}
          <div className="my-5">
            {" "}
            <h3 className="text-[#db2777] text-[25px] ">ABOUT US</h3>
            <h1 className="md:text-[50px] text-[30px] font-bold my-4">
              Digital Banking was revolutionized by us.
            </h1>
            <p className="text-[16px]">
              We've developed to become one of the most well-known digital
              banking companies, dedicated to reinventing, simplifying, and
              humanizing the banking experience.
            </p>
          </div>
          <div>
            <div className="flex my-8">
              <div className="relative bg-blue-100 w-24 h-14 flex mr-4 items-center justify-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                <TbHandClick className="text-3xl text-[#db2777] group-hover:text-white transition-colors duration-500 relative z-10" />
              </div>

              <div>
                <h2 className="text-[20px] font-bold">
                  Powerful Mobile & Online App
                </h2>
                <p className="font-light text-gray-600">
                  Our mobile app service is quick and easy to use, and you can
                  get it from your app store.
                </p>
              </div>
            </div>

            <div className="flex my-8">
              <div className="relative bg-blue-100 w-24 h-14 flex mr-4 items-center justify-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                <CiAlarmOn className="text-3xl text-[#db2777] group-hover:text-white transition-colors duration-500 relative z-10" />
              </div>

              <div>
                <h2 className="text-[20px] font-bold">
                  Brings More Transperency & Speed
                </h2>
                <p className="font-light text-gray-600">
                  Our digital banking services are transparent and quick, and
                  we're building a reliable network.
                </p>
              </div>
            </div>

            <div className="flex my-8">
              <div className="relative bg-blue-100 w-24 h-14 flex mr-4 items-center justify-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                <SiBetterstack className="text-3xl text-[#db2777] group-hover:text-white transition-colors duration-500 relative z-10" />
              </div>

              <div>
                <h2 className="text-[20px] font-bold">
                  Special For Multiple User Capabilities
                </h2>
                <p className="font-light text-gray-600">
                  The ability of a computer or operating system to create
                  independent working environments for several users is referred
                  to as multiuser.
                </p>
              </div>
            </div>
          </div>
          <div className="my-10">
            <button className="uppercase bg-[#db2777] hover:bg-[#46172c] text-white px-5 py-2 rounded flex items-center">
              Start With US
              <span className="ml-2">
                <FaAngleRight />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ////////// */}

      {/* popular current below */}
      <div className="text-center my-8">
        <h2 className="text-[#db2777] wideyy">POPULAR CURRENCY TOOLS</h2>
        <h1 className="text-black font-semibold text-[30px] ">
          Set Up & Exchange Money From Your Cards In A Minute
        </h1>
      </div>
      {/* slider card below */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 px-5 my-4">
        <div className="shadow-xl p-8 rounded-xl flex flex-col bg-white ">
          <div className="flex items-center mb-4">
            <span className="">
              {" "}
              <FaHandHoldingUsd className="text-[45px] text-[#db2777] mr-4" />
            </span>
            <p className="text-2xl font-semibold">Money Transfer</p>
          </div>
          <div>
            <p>
              with out digital , you may send money to relatives and friends all
              over the world
            </p>
          </div>
          <div className="flex items-center my-2 text-[#db2777] cursor-pointer">
            <a>SEND MONEY </a>{" "}
            <span className="ml-2">
              <FaAngleRight />
            </span>
          </div>
        </div>
        <div className="shadow-xl p-8 rounded-xl flex flex-col bg-white ">
          <div className="flex items-center mb-4">
            <span className="">
              {" "}
              <FaHandHoldingUsd className="text-[45px] text-[#db2777] mr-4" />
            </span>
            <p className="text-2xl font-semibold">Money Transfer</p>
          </div>
          <div>
            <p>
              with out digital , you may send money to relatives and friends all
              over the world
            </p>
          </div>
          <div className="flex items-center my-2 text-[#db2777] cursor-pointer">
            <a>SEND MONEY </a>{" "}
            <span className="ml-2">
              <FaAngleRight />
            </span>
          </div>
        </div>

        <div className="shadow-xl p-8 rounded-xl flex flex-col bg-white ">
          <div className="flex items-center mb-4">
            <span className="">
              {" "}
              <FaHandHoldingUsd className="text-[45px] text-[#db2777] mr-4" />
            </span>
            <p className="text-2xl font-semibold">Money Transfer</p>
          </div>
          <div>
            <p>
              with out digital , you may send money to relatives and friends all
              over the world
            </p>
          </div>
          <div className="flex items-center my-2 text-[#db2777] cursor-pointer">
            <a>SEND MONEY </a>{" "}
            <span className="ml-2">
              <FaAngleRight />
            </span>
          </div>
        </div>
      </div>

      {/*  we are innovative and digital below */}
      <div className="px-5 md:p-10  flex flex-col md:flex-row justify-between items-center">
        <div className="">
          <h2 className="text-[#db2777] tracking-2px"> WHY CHOOSE US </h2>
          <h1 className="text-[40px] my-2 font-bold">
            We are innovative and digital
          </h1>
          <p className="text-gray-400 text-[14px]">
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

        <div className=" relative w-[100%] md:px-5">
          <div className="bg-[#f5d7d7] md:w-[680px] h-[450px] w-[300px] my-5 md:h-[550px] rounded-tl-[25%] rounded-br-[22%] animate-up-down"></div>

          <img
            src={clapimg}
            className="w-[320px] h-[430px] md:w-[600px] md:h-[535px] object-cover absolute top-10 md:right-10  right-4  rounded-tl-[20%] rounded-br-[20%]"
          />
          <img
            src={roundpop}
            className="w-[70px] absolute  right-5 md:right-10 md:top-58 top-[84%] animate-move"
          />
        </div>
      </div>

      {/*  fun fact below  and counting numbers  */}
      <div className="my-10">
        <div>
          <h3 className="tracking-2px text-[#db2777] text-center">
            SOME FUN FACTS
          </h3>
          <h1 className="text-[30px] font-bold text-center">
            We Always Try To Understand Customer's Expectation
          </h1>
        </div>
        <div className="text-center justify-center flex ">
          <Counter />
        </div>
      </div>

      {/*  draft display  */}
      <div className="flex  flex-col justify-center  md:flex-row  md:p-20 md:justify-between my-10 px-5  items-center ">
        <div className="flex justify-center my-5">
          <img src={phoneimage} className="w-[80%] h-auto" />
        </div>
        {/*    <div className="bg-yellow-400 w-[100px] h-[100px] rounded-full -mt-[70px] mr-[250px] animate-slow-bounce"></div> */}

        <div className="flex  flex-col">
          <h3 className="text-[#db2777] text-[20px] my-4 "> Our App</h3>
          <h1 className=" leading-9 mb-4 md:text-[40px] font-semibold ">
            Let's Answer Some Of Your Questions Or Download Our App
          </h1>
          <p>
            Our digital banking platform is up to date and completely
            trustworthy. You can use your mobile to perform transactions, loan
            requests, and credit card transactions.
          </p>
          <h3 className="text-2xl font-semibold my-4">
            Over 9.2 million Downloads Worldwide
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

export default About;
