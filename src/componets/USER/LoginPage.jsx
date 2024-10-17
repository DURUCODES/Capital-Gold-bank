import React from "react";
import LoginImg from "../public/image/LOGIN.avif";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import Goldhand from "../public/image/goldhand.jpg";

const LoginPage = () => {
  return (
    <div className="flex  justify-between   ">
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
      <div className="">
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
        <p className="text-center text-xs my-4">
          Sign In to <span className="text-yellow-500">Capital Gold</span>{" "}
        </p>
        <h3 className="text-center text-xl font-semibold  mb-4">
          Access the capital Gold Bank panel using your email and password.
        </h3>
        <form className="flex items-center flex-col justify-center  md:w-[500px] mx-auto p-5">
          <div className="flex flex-col w-full">
            <div className="w-full">
              <div className="flex  flex-col my-4">
                <label className="font-semibold text-[16px]">Email</label>
                <input
                  placeholder="name@email.com"
                  className="w-full bg-[#fafafa] px-4 rounded py-2 mb-2"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label className="font-semibold text-[16px]">Password</label>
                  <label className="font-semibold text-[16px] text-blue-600">
                    Forgot Password?
                  </label>
                </div>{" "}
                <input
                  placeholder="xxxxxxxxxx"
                  className="w-full bg-[#fafafa] px-4 rounded py-2 mb-2"
                />
              </div>
            </div>

            <div className="flex items-center my-4">
              <input type="checkbox" className="mr-2" />
              <p>Stay signed in for 30 days</p>
            </div>
          </div>
          <div className="flex flex-col my-4 w-full">
            <button className="bg-blue-700  hover:bg-blue-900 py-3  text-xs md:text-sm rounded font-bold w-full text-white">
              Sign In
            </button>
            <Link to="/register">
              <button className="bg-black hover:bg-gray-800 my-2 py-3 rounded text-xs md:text-sm font-bold w-full text-white flex items-center justify-center">
                <span className="flex items-center">
                  <span> Not Enrolled? Create an Account</span>
                  <CiLogin className="ml-2" />
                </span>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
