import React from "react";
import business from "../public/image/business.jpg";
import { Link } from "react-router-dom";
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
import { motion } from "framer-motion"; // Importing Framer Motion

const BusinessPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Fade in to opacity 1
      transition={{
        duration: 3, // Duration of the fade-in
        delay: 0.5, // Add delay before starting the fade-in
        ease: "easeOut", // Smooth easing effect
      }}
      className=""
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
        <h1 className="text-[40px]  font-bold">Business Banking</h1>
        <ul className="flex space-x-10">
          <li className="text-white font-semibold hover:text-[#db2777] transition-all duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#db2777] font-semibold list-disc cursor-pointer">
            {" "}
            Business Banking
          </li>
        </ul>
      </div>
      <div className=" my-6 text-center px-[10px] md:w-[600px] mx-auto">
        <h1 className="text-center text-[18px] md:text-[22px] text-[#db2777] font-light">
          Capital Gold Trust bank
        </h1>
        <h2 className="font-bold text-[20px]  mt-2">
          You can get a $300 bonus if you have a business checking account and
          take certain tasks.
        </h2>
      </div>
      <motion.div
        className="py-4 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }} // Fade in with delay
      >
        <h1 className="text-[25px] font-bold mb-2">Our Business Banking</h1>
        <p className="text-[14px]">
          A variety of services given by a bank to a business or corporation is
          known as business banking. Our Business banking services include
          loans, credit, savings accounts, and checking accounts, all of which
          are tailored to the needs of the company.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.5 }} // Fade and slide in with delay
      >
        <div className="flex mb-4 ">
          <div>
            <MdOutlineLibraryAddCheck className="text-[20px] md:text-[22px] mr-2 text-[#db2777]" />
          </div>
          <p className="text-[14px]">
            A mix of current and savings accounts to cover your banking needs.
          </p>
        </div>
        <div className="flex mb-4 ">
          <div>
            <MdOutlineLibraryAddCheck className="text-[20px] md:text-[22px] mr-2 text-[#db2777]" />
          </div>
          <p className="text-[14px]">
            Accounts that complement each other, combining to suit the needs of
            each individual’s cash portfolio.
          </p>
        </div>
        <div className="flex mb-4 ">
          <div>
            <MdOutlineLibraryAddCheck className="text-[20px] md:text-[22px] mr-2 text-[#db2777]" />
          </div>
          <p className="text-[14px]">
            A mix of current and savings accounts to cover your banking needs.
          </p>
        </div>
        <div className="flex mb-4 ">
          <div>
            <MdOutlineLibraryAddCheck className="text-[20px] md:text-[22px] mr-2 text-[#db2777]" />
          </div>
          <p className="text-[14px]">
            All personal accounts can have up to four joint account holders,
            apart from the Cash Hub Account which can have two.
          </p>
        </div>
        <div className="flex mb-4 ">
          <div>
            <MdOutlineLibraryAddCheck className="text-[20px] md:text-[22px] mr-2 text-[#db2777]" />
          </div>
          <p className="text-[14px]">
            A range of benefits including instant access to funds, free
            day-to-day transactions and fee-free currency conversion – see
            account pages for individual details.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="px-6 my-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }} // Fade in with delay
      >
        <hr className="border-t border-gray-500 my-2" />
        <div className="grid grid-cols-1 md:grid-cols-3 my-4 gap-6">
          {/* Each of the following sections could have an animation as well */}
          <motion.div
            className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <div className="absolute inset-0 bg-[#db2777] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <SiGnuprivacyguard className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4 font-bold">
                Security Assured
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </motion.div>

          <motion.div
            className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <div className="absolute inset-0 bg-[#db2777] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <FaBusinessTime className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4 font-bold">
                Business Reliable
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </motion.div>

          <motion.div
            className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <div className="absolute inset-0 bg-[#db2777] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <GiRapidshareArrow className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4 font-bold">
                Rapid Response
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </motion.div>

          <motion.div
            className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <div className="absolute inset-0 bg-[#db2777] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <GiSuspensionBridge className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4 font-bold">
                Pension
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </motion.div>

          <motion.div
            className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <div className="absolute inset-0 bg-[#db2777] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <MdEnergySavingsLeaf className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4 font-bold">
                Savings
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </motion.div>

          <motion.div
            className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <div className="absolute inset-0 bg-[#db2777] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <PiHandWithdrawLight className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4 font-bold">
                Withdraw
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </motion.div>

          {/* Repeat the rest of the sections similarly */}
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col justify-center md:flex-row md:p-20 md:justify-between my-10 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, delay: 3 }}
      >
        <div className="flex justify-center my-5">
          <img src={phoneimage} className="w-[80%] h-auto" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#db2777] text-[20px]"> Our App</h3>
          <h1 className="leading-9 mb-4 md:text-[40px] font-semibold">
            Let's Answer Some Of Your Questions Or Download Our App{" "}
          </h1>
          <p>
            Our digital banking platform is up to date and completely
            trustworthy. You can use your mobile to perform transactions, loan
            requests, and credit card transactions.
          </p>
          <h3 className="text-2xl font-semibold my-4">
            Over 9.2 million Downloads Worldwide
          </h3>

          <div className="flex items-center mx-auto md:my-5 md:mx-0 space-x-3">
            <img
              src={appstore}
              className="md:w-[200px] w-[100px] shadow-2xl rounded"
            />
            <img
              src={googlestrore}
              className="md:w-[200px] w-[100px] shadow-2xl rounded"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BusinessPage;
