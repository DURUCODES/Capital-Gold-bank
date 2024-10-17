import React from "react";
import business from "../public/image/smile.jpg";
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
const Personal = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(219, 39, 119, 0.8), rgba(0, 0, 0, 0.8)), url(${business})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className=""
      >
        <h1 className="text-[40px]  font-bold">Personal Banking</h1>
        <ul className="flex space-x-10">
          <li className="text-white font-semibold hover:text-[#db2777] transition-all duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#db2777] font-semibold list-disc   cursor-pointer">
            {" "}
            Personal Banking
          </li>
        </ul>
      </div>
      <div className=" my-6 text-center px-[10px] md:w-[600px] mx-auto">
        <h1 className="text-center text-[18px] md:text-[22px] text-[#db2777] font-light">
          Capital Gold Trust bank
        </h1>
        <h2 className="font-bold text-[20px]  mt-2 text-center leading-6 ">
          Personal Checking, Savings, Credit Cards, Loans That Works For You
        </h2>
      </div>
      <div className="py-4 px-6">
        <h1 className="text-[25px] font-bold ">Our Personal Banking</h1>
        <p className="text-[14px] w-full">
          We offer personal banking products that typically include savings and
          transaction facilities such as a bank transaction account, debit
          cards/EFT, an interest bearing floating account (savings account) and
          a fixed interest deposit account for a specific agreed period
          (certificates of deposit / term deposit) which can vary according to
          the bank.
        </p>
      </div>
      <div className="flex  flex-col px-6">
        <div className="flex   mb-4 ">
          <div>
            <MdOutlineLibraryAddCheck className="text-[20px]  md:text-[22px] mr-2 text-[#db2777]" />
          </div>
          <p className="text-[14px]">
            To meet your banking needs, you will need a combination of current
            and savings accounts.
          </p>
        </div>
        <div className="flex   mb-4 ">
          <div>
            {" "}
            <MdOutlineLibraryAddCheck className="text-[20px]  md:text-[22px] mr-2 text-[#db2777]" />
          </div>
          <p className="text-[14px] font-">
            Complementary accounts that work together to meet the demands of
            each individual's cash portfolio.
          </p>
        </div>
        <div className="flex   mb-4 ">
          <div>
            {" "}
            <MdOutlineLibraryAddCheck className="text-[20px] md:text-[22px] mr-2 text-[#db2777]" />
          </div>
          <p className="text-[14px]">
            Instant access to cash, free day-to-day transactions, and fee-free
            currency conversion are just a few of the benefits – visit
            individual account sites for more information.
          </p>
        </div>
        <div className="flex   mb-4 ">
          <div>
            <MdOutlineLibraryAddCheck className="text-[20px] md:text-[22px] mr-2 text-[#db2777]" />
          </div>
          <p className="text-[14px]">
            Except for the Cash Hub Account, which can only have two joint
            account holders, other personal accounts can have up to four joint
            account holders.
          </p>
        </div>
      </div>
      <div className=" px-6 my-5">
        <hr className="border-t border-gray-500 my-2" />

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
        {/*  draft display  */}
        <div className="flex  flex-col justify-center  md:flex-row  md:p-20 md:justify-between my-10  items-center ">
          <div className="flex justify-center my-5">
            <img src={phoneimage} className="w-[80%] h-auto" />
          </div>
          {/*    <div className="bg-yellow-400 w-[100px] h-[100px] rounded-full -mt-[70px] mr-[250px] animate-slow-bounce"></div> */}

          <div className="flex  flex-col">
            <h3 className="text-[#db2777] text-[20px] "> Our App</h3>
            <h1 className=" leading-9 mb-4 md:text-[40px] font-semibold ">
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
    </div>
  );
};

export default Personal;
