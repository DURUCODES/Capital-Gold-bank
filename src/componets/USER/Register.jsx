import React from "react";
import LoginImg from "../public/image/LOGIN.avif";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import Goldhand from "../public/image/goldhand.jpg";
const Register = () => {
  return (
    <div className="flex justify-between">
      <div className="bg-black">
        <img src={LoginImg} className="hidden md:flex h-[70%]  mt-24 mx-auto" />
        <div className="  items-center h-[100px] absolute hidden md:flex top-5 left-64   bg-white w-[200px] md:w-[250px] mb-5">
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
      </div>
      <div className="md:w-[45%] mx-auto px-5">
        <div className="flex  items-center h-[100px]   md:hidden  top-5 left-48  mx-auto  bg-white w-[200px] md:w-[250px] mb-5">
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
        <h3 className="text-center text-xl font-semibold  mb-2">
          Account Information
        </h3>
        <p className="text-center text-[14px] font-light  mb-4">
          Please enter your information and proceed to the next step so we can
          build your accounts.
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4  mb-5">
          <div className="flex  flex-col">
            <label className="font-semibold text-sm mb-1">
              Legal First Name
            </label>
            <input
              className=" bg-gray-100 p-2 rounded "
              placeholder="Enter First Name"
              type="text"
            />
          </div>
          <div className="flex  flex-col">
            <label className="font-semibold text-sm  mb-1">Middle Name</label>
            <input
              className=" bg-gray-100 p-2 rounded "
              placeholder="Enter Middle Name"
              type="text"
            />
          </div>{" "}
          <div className="flex  flex-col">
            <label className="font-semibold text-sm  mb-1">Last Name</label>
            <input
              className=" bg-gray-100 p-2 rounded "
              placeholder="Enter Your Last Name"
              type="text"
            />
          </div>{" "}
          <div className="flex  flex-col">
            <label className="font-semibold text-sm  mb-1">User Name</label>
            <input
              className=" bg-gray-100 p-2 rounded "
              placeholder="Enter a Unique Name"
              type="text"
            />
          </div>
        </div>
        <div className="flex  flex-col">
          <div className="flex  flex-col">
            <label className="font-semibold text-sm  mb-1"> Email</label>
            <input
              placeholder="name@email.com"
              type="email"
              className=" bg-gray-100 p-2 rounded  mb-4"
            />

            <label className="font-semibold text-sm  mb-1"> phone</label>
            <input
              placeholder="+1234567890"
              type="number"
              className=" bg-gray-100 p-2 rounded  mb-4"
            />

            <label className="font-semibold text-sm  mb-1"> Country</label>
            <input
              placeholder="Choose Country"
              type="text"
              className=" bg-gray-100 p-2 rounded  mb-4"
            />

            <label className="font-semibold text-sm  mb-1"> Account Type</label>
            <input
              placeholder=" please select Account Type"
              type="text"
              className=" bg-gray-100 p-2 rounded  mb-4"
            />

            <label className="font-semibold text-sm  mb-1">
              {" "}
              Digit Transaction Pin
            </label>
            <input
              placeholder="Pin "
              type="number"
              className=" bg-gray-100 p-2 rounded  mb-4"
            />

            <label className="font-semibold text-sm  mb-1"> Password</label>
            <input
              placeholder="xxxxxxx"
              type="password"
              className=" bg-gray-100 p-2 rounded mb-4 "
            />

            <label className="font-semibold text-sm  mb-1">
              {" "}
              Comfirm Password
            </label>
            <input
              placeholder="xxxxxxx"
              type="password"
              className=" bg-gray-100 p-2 rounded  mb-4"
            />
          </div>
          <div>
            <div className="flex items-center">
              <input type="checkbox" />
              <p className="ml-2 text-sm my-3">
                I agree to{" "}
                <span className=" text-blue-500">terms & conditions</span>{" "}
              </p>
            </div>
            <div>
              <button className="bg-blue-700  hover:bg-blue-900 py-3 text-xs md:text-sm rounded font-bold w-full text-white">
                Sign In
              </button>
              <Link to="/login">
                <button className="bg-black hover:bg-gray-800 my-2 py-3 text-xs md:text-sm rounded font-bold w-full text-white flex items-center justify-center">
                  <span className="flex items-center">
                    <CiLogout className="mr-2" />
                    <span>Already have an account?</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
