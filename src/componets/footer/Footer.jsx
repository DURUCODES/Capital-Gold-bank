import React from "react";
import Goldhand from "../public/image/goldhand.jpg";
import { Link } from "react-router-dom";
import { PiInstagramLogoThin } from "react-icons/pi";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="bg-black  px-5  py-10 md:p-10 flex flex-col md:flex-row lg:flex-row justify-between">
      <div>
        <div className="flex  items-center h-[100px]  bg-white w-[200px] md:w-[250px] mb-5">
          {/* logo */}
          <div>
            <Link to="/">
              <img
                src={Goldhand}
                className="md:w-[80px] w-[40px] cursor-pointer"
              />
            </Link>
          </div>
          <div className="px-2">
            <h1 className="text-yellow-500 font-bold text-xl md:text-2xl">
              Capital Gold
            </h1>
            <p className="text-[#db2777] font-bold  text-xs md:text-sm">
              Banking and Finance
            </p>
          </div>
        </div>
        <p className="text-white text-[14px] w-[290px]">
          We are now one of the largest digital banking providers, dedicated to
          innovating, simplifying, and humanizing banking.
        </p>
        <div className="flex space-x-4 my-5">
          <div className="bg-white p-2 items-center flex justify-center rounded-full">
            <PiInstagramLogoThin className="text-[#db2777] text-[20px] " />
          </div>

          <div className="bg-white p-2 items-center flex justify-center rounded-full">
            <RiFacebookLine className="text-[#db2777] text-[20px]" />
          </div>
          <div className="bg-white p-2 items-center flex justify-center rounded-full">
            {" "}
            <CiTwitter className="text-[#db2777] text-[20px] " />
          </div>
          <div className="bg-white p-2 items-center flex justify-center rounded-full">
            {" "}
            <CiLinkedin className="text-[#db2777] text-[20px] " />
          </div>
        </div>
      </div>
      {/* logo and   socials  */}
      <div className="text-white">
        <h3 className="mb-2">Company</h3>
        <div className="bg-gray-500 w-[150px] h-1 rounded">
          <div className="bg-[#db2777] rounded h-1 w-[70px]"></div>
        </div>
        <ul className="space-y-4 my-4 text-[14px]  text-gray-400">
          <li className="hover:text-[#db2777]  hover:underline cursor-pointer">
            About us
          </li>
          <li className="hover:text-[#db2777]  hover:underline cursor-pointer">
            Business Banking
          </li>
          <li className="hover:text-[#db2777]  hover:underline cursor-pointer"></li>{" "}
          <li className="hover:text-[#db2777]  hover:underline cursor-pointer">
            Credit Cards
          </li>
          <li className="hover:text-[#db2777]  hover:underline cursor-pointer">
            Personal Banking
          </li>
          <li className="hover:text-[#db2777]  hover:underline cursor-pointer">
            Loans
          </li>
        </ul>
      </div>{" "}
      {/* company */}
      <div className="text-white mb-4">
        <h3 className="mb-2">Resources</h3>
        <div className="bg-gray-500 w-[150px] h-1 rounded">
          <div className="bg-[#db2777] rounded h-1 w-[70px]"></div>
        </div>
        <ul className="space-y-4 my-4 text-[14px] text-gray-400">
          <li className="hover:text-[#db2777]  hover:underline cursor-pointer">
            Contact Us
          </li>
          <li className="hover:text-[#db2777]  hover:underline cursor-pointer">
            FAQs
          </li>
          <li className="hover:text-[#db2777]  hover:underline cursor-pointer">
            Download App
          </li>
          <li className="hover:text-[#db2777]  hover:underline cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-p[#db2777]  hover:underline cursor-pointer">
            Terms & Conditions
          </li>
        </ul>
      </div>{" "}
      {/* resource */}
      <div className="text-white mb-4">
        <h3 className="mb-2">Transfer Money</h3>
        <div className="bg-gray-500 w-[150px] h-1 rounded">
          <div className="bg-[#db2777] rounded h-1 w-[70px]"></div>
        </div>
        <ul className="space-y-4 my-4 text-[14px] text-gray-400">
          <li className="hover:text-[#db2777] hover:underline cursor-pointer">
            Register/Login
          </li>
          <li className="hover:text-[#db2777] hover:underline cursor-pointer">
            IBank Transfer
          </li>
          <li className="hover:text-[#db2777] hover:underline cursor-pointer">
            USA Money Transfer
          </li>
          <li className="hover:text-[#db2777] hover:underline cursor-pointer">
            UK Money Transfer
          </li>
          <li className="hover:text-[#db2777] hover:underline cursor-pointer">
            Euro Money Transfer
          </li>
        </ul>
      </div>{" "}
      {/* transfer */}
      <div className="text-white">
        <h3 className="mb-2">Contact Us</h3>
        <div className="bg-gray-500 w-[150px] h-1 rounded">
          <div className="bg-[#db2777] rounded h-1 w-[70px]"></div>
        </div>
        <ul className="space-y-4 my-4 text-[14px] text-gray-400">
          <li className="hover:text-[#db2777 hover:underline cursor-pointer flex ">
            <div className="mr-3">
              {" "}
              <span>
                <IoLocationOutline className="text-[#db2777]  mt-2" />
              </span>
            </div>
            <div>
              <p className="text-white mb-1">Location</p>
              <p className="text-white">
                301 East Water Street, Charlottesville,
                <br /> VA 22904 Virginia
              </p>
            </div>
          </li>

          <li className="hover:text-[#db2777]  hover:underline cursor-pointer flex ">
            <div className="mr-3">
              {" "}
              <span>
                <MdOutlineMail className="text-[#db2777]  mt-2" />
              </span>
            </div>
            <div>
              <p className="text-white mb-1 ">Email</p>
              <p className="text-white">Goldtrustbank@banking.com</p>
            </div>
          </li>

          <li className="hover:text-[#db2777]  hover:underline cursor-pointer flex ">
            <div className="mr-3">
              {" "}
              <span>
                <MdLocalPhone className="text-[#db2777]  mt-2" />
              </span>
            </div>
            <div>
              <p className="text-white mb-1 ">Phone</p>
              <p className="text-white">0123456789</p>
            </div>
          </li>
        </ul>
      </div>{" "}
      {/* contatc */}
    </div>
  );
};

export default Footer;
