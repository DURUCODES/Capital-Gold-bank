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
import Carousel from "../carousel/Carousel";
import { motion } from "framer-motion";

// Motion variants
const containerVariants = {
  hidden: { opacity: 0, x: -100 }, // Initially offscreen to the left
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, delay: 0.3 },
  }, // When in view, slide in from left
};

const rightContainerVariants = {
  hidden: { opacity: 0, x: 100 }, // Initially offscreen to the right
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, delay: 0.5 },
  }, // When in view, slide in from right
};

const textVariants = {
  hidden: { opacity: 0, y: 30 }, // Start below the normal position
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, delay: 0.7 },
  }, // Slide up with delay
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Fade in to opacity 1
      transition={{
        duration: 3, // Duration of the fade-in
        delay: 0.5, // Add delay before starting the fade-in
        ease: "easeOut", // Smooth easing effect
      }}
      className=" overflow-hidden"
    >
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
      <div className="flex w-full md:flex-row flex-col items-center px-4 md:px-10">
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: -100 }} // Start from the left
          whileInView={{ opacity: 1, x: 0 }} // Move to normal position
          transition={{
            duration: 1,
            ease: "easeInOut", // Smooth transition
          }}
          viewport={{ once: true }}
        >
          {/* Row 1 */}
          <div>
            <img
              src={about1}
              className="md:w-[500px] md:h-[400px] w-[250px] h-[300px] object-cover rounded"
            />
          </div>
          <div>
            <img
              src={popfly}
              className="absolute w-16 md:left-[25%] left-[70%] animate-move-left-right"
            />
            <img
              src={about2}
              className="md:w-[500px] md:h-[350px] mt-[48px] h-[250px] object-cover rounded"
            />
          </div>
          <div>
            <img
              src={about3}
              className="md:w-[500px] md:h-[350px] h-[200px] object-cover rounded relative z-10"
            />
            <img
              src={lightimg}
              className="w-[200px] left-0 -mt-10 bouncepic relative"
            />
          </div>
          <div>
            <img
              src={about4}
              className="md:w-[500px] md:h-[400px] h-[250px] object-cover rounded"
            />
          </div>
        </motion.div>

        <motion.div
          className="md:ml-4"
          initial={{ opacity: 0, x: 100 }} // Start from the right
          whileInView={{ opacity: 1, x: 0 }} // Move to normal position
          transition={{
            duration: 1,
            ease: "easeInOut", // Smooth transition
          }}
          viewport={{ once: true }} // Trigger animation only once when 30% of the element is in view
        >
          {/* right side text content */}
          <div className="my-5">
            <motion.h3
              className="text-[#db2777] text-[25px]"
              variants={textVariants}
            >
              ABOUT US
            </motion.h3>
            <motion.h1
              className="md:text-[50px] text-[30px] font-bold my-4"
              variants={textVariants}
            >
              Digital Banking was revolutionized by us.
            </motion.h1>
            <motion.p className="text-[16px]" variants={textVariants}>
              We've developed to become one of the most well-known digital
              banking companies, dedicated to reinventing, simplifying, and
              humanizing the banking experience.
            </motion.p>
          </div>

          <div>
            <div className="flex my-8">
              <div className="relative bg-blue-100 md:w-24 md:h-14 w-[150px] h-[50px] flex items-center justify-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                <TbHandClick className="text-3xl text-[#db2777] group-hover:text-white transition-colors duration-500 relative z-10" />
              </div>
              <div className="ml-4">
                <motion.h2
                  className="md:text-[20px] font-bold"
                  variants={textVariants}
                >
                  Powerful Mobile & Online App
                </motion.h2>
                <motion.p
                  className="font-light text-gray-600"
                  variants={textVariants}
                >
                  Our mobile app service is quick and easy to use, and you can
                  get it from your app store.
                </motion.p>
              </div>
            </div>

            <div className="flex my-8">
              <div className="relative bg-blue-100 md:w-24 md:h-14 w-[150px] h-[50px] flex items-center justify-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                <CiAlarmOn className="text-3xl text-[#db2777] group-hover:text-white transition-colors duration-500 relative z-10" />
              </div>
              <div className="ml-4">
                <motion.h2
                  className="md:text-[20px] font-bold"
                  variants={textVariants}
                >
                  Brings More Transparency & Speed
                </motion.h2>
                <motion.p
                  className="font-light text-gray-600"
                  variants={textVariants}
                >
                  Our digital banking services are transparent and quick, and
                  we're building a reliable network.
                </motion.p>
              </div>
            </div>

            <div className="flex my-8">
              <div className="relative bg-blue-100 w-[200px] md:w-[140px] md:h-14 h-[50px] flex items-center justify-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                <SiBetterstack className="text-3xl text-[#db2777] group-hover:text-white transition-colors duration-500 relative z-10" />
              </div>
              <div className="ml-4">
                <motion.h2
                  className="md:text-[20px] font-bold"
                  variants={textVariants}
                >
                  Special For Multiple User Capabilities
                </motion.h2>
                <motion.p
                  className="font-light text-gray-600"
                  variants={textVariants}
                >
                  The ability of a computer or operating system to create
                  independent working environments for several users is referred
                  to as multiuser.
                </motion.p>
              </div>
            </div>
          </div>

          <div className="my-10">
            <Link to="/login">
              <button className="uppercase bg-[#db2777] hover:bg-[#46172c] text-white px-5 py-2 rounded flex items-center">
                Start With Us
                <span className="ml-2">
                  <FaAngleRight />
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ////////// */}

      {/* popular current below */}
      <div className="text-center my-8"></div>
      {/* slider card below */}
      <Carousel />

      {/*  we are innovative and digital below */}
      <div className="px-5 md:p-10  flex flex-col md:flex-row justify-between items-center">
        <div className="">
          <h2 className="text-[#db2777] tracking-2px"> WHY CHOOSE US </h2>
          <h1 className="md:text-[40px] text-[20px] my-2 font-bold">
            We are innovative and digital
          </h1>
          <p className="text-gray-400 text-[14px]">
            Capital Gold bank transformed the credit card business using data
            and technology more than ten years ago. We are now one of the
            largest digital banking providers, dedicated to innovating,
            simplifying, and humanizing banking.
          </p>
          {/* ///Done marks */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Start from the right
            whileInView={{ opacity: 1, x: 0 }} // Move to normal position
            transition={{
              duration: 1,
              ease: "easeInOut", // Smooth transition
            }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start from the right
          whileInView={{ opacity: 1, x: 0 }} // Move to normal position
          transition={{
            duration: 1,
            ease: "easeInOut", // Smooth transition
          }}
          viewport={{ once: true }}
          className=" relative w-[100%] md:px-5"
        >
          <div className="bg-[#f5d7d7] md:w-[680px] h-[450px] w-[300px] my-5 md:h-[550px] rounded-tl-[25%] rounded-br-[22%] animate-up-down"></div>

          <img
            src={clapimg}
            className="w-[320px] h-[430px] md:w-[600px] md:h-[535px] object-cover absolute top-10 md:right-10  right-4  rounded-tl-[20%] rounded-br-[20%]"
          />
          <img
            src={roundpop}
            className="w-[70px] absolute  right-5 md:right-10 md:top-58 top-[84%] animate-move"
          />
        </motion.div>
      </div>

      {/*  fun fact below  and counting numbers  */}
      <div className="my-4">
        <div>
          <h3 className="tracking-2px text-[#db2777] text-center">
            SOME FUN FACTS
          </h3>
          <h1 className="md:text-[30px] font-bold text-center">
            We Always Try To Understand Customer's Expectation
          </h1>
        </div>
        <div className="text-center justify-center flex ">
          <Counter />
        </div>
      </div>

      {/*  draft display  */}
      <div className="flex  flex-col justify-center  md:flex-row  md:p-5 md:justify-between my-5 px-5  items-center ">
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
    </motion.div>
  );
};

export default About;
