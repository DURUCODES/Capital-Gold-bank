import React from "react";
import business from "../public/image/cont.jpg";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import serviceimg from "../public/image/24:7img.avif";
import { motion } from "framer-motion";
const ContatcUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Fade in to opacity 1
      transition={{
        duration: 3, // Duration of the fade-in
        delay: 0.5, // Add delay before starting the fade-in
        ease: "easeOut", // Smooth easing effect
      }}
    >
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
        <h1 className="text-[40px]  font-bold">Contact Us</h1>
        <ul className="flex space-x-10">
          <li className="text-white font-semibold hover:text-[#db2777] transition-all duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#db2777] font-semibold list-disc   cursor-pointer">
            {" "}
            Contact us
          </li>
        </ul>
      </div>
      {/* ABOUT THE BANK CONTACT, NUMBER , AND LOCATION BELOW  */}
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 items-center">
        <div className="relative shadow p-5 w-full bg-[#FAFAFA] flex  items-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl my-4 overflow-hidden group md:w-[400px] h-[200px]">
          <span className="relative bg-white shadow p-5 rounded-full overflow-hidden transition-all duration-500 mr-2 flex items-center justify-center">
            <span className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
            <CiLocationOn className="text-3xl text-[#db2777] transition-colors duration-500 relative z-10 group-hover:text-white" />
          </span>
          <div className="ml-3 flex items-start flex-col">
            <p className="transition-colors duration-500 text-black group-hover:text-[#db2777] font-bold md:text-[20px]">
              Our Location
            </p>
            <p className="text-xs">
              301 East Water Street, Charlottesville, VA 22904 Virginia
            </p>
          </div>
        </div>

        <div className="relative shadow p-5 bg-[#FAFAFA] flex  items-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl my-4 overflow-hidden group md:w-[400px] h-[200px]">
          <span className="relative bg-white shadow p-5 rounded-full overflow-hidden transition-all duration-500 mr-2 flex items-center justify-center">
            <span className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
            <TfiEmail className="text-3xl text-[#db2777] transition-colors duration-500 relative z-10 group-hover:text-white" />
          </span>
          <div className="ml-3 flex items-start flex-col">
            <p className="transition-colors duration-500 text-black group-hover:text-[#db2777] font-bold md:text-[20px]">
              Email us
            </p>
            <p className="text-xs">CapitalGoldbank@banking.com</p>
          </div>
        </div>

        <div className="relative shadow p-5 bg-[#FAFAFA] flex mr-4 items-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl my-4 overflow-hidden group md:w-[400px] h-[200px]">
          <span className="relative bg-white shadow p-5 rounded-full overflow-hidden transition-all duration-500 mr-2 flex items-center justify-center">
            <span className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
            <LuPhone className="text-3xl text-[#db2777] transition-colors duration-500 relative z-10 group-hover:text-white" />
          </span>
          <div className="ml-3 flex items-start flex-col">
            <p className="transition-colors duration-500 text-black group-hover:text-[#db2777] font-bold md:text-[20px]">
              Phone
            </p>
            <p className="text-xs">+1234567890</p>
          </div>
        </div>
      </div>

      {/* FORM FILED BELOW */}
      <div className="px-4 flex  mb-5 flex-col-reverse md:flex-row justify-between items-center ">
        <div>
          <form>
            <div className="flex  flex-col gap-4">
              <input
                placeholder="Name*"
                className="shadow-2xl rounded bg-[#e2e8f0] py-2 w-full px-4 "
              />
              <input
                placeholder="Email*"
                className="shadow-2xl rounded bg-[#e2e8f0] py-2 w-full px-4 "
              />
              <input
                placeholder="Phone*"
                className="shadow-2xl rounded bg-[#e2e8f0] py-2 w-full px-4 "
              />

              <div class="bg-white border border-slate-200 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm">
                <h1 class="text-center text-slate-200 text-xl font-bold col-span-6">
                  Send Feedback
                </h1>
                <textarea
                  placeholder="Your feedback..."
                  class="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
                ></textarea>
                <button class="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                  </svg>
                </button>
                <button class="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                  </svg>
                </button>
                <span class="col-span-2"></span>
                <button class="bg-slate-100 stroke-slate-600 border border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-blue-200 focus:bg-blue-400">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="30px"
                    width="30px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
                    ></path>
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      d="M10.11 13.6501L13.69 10.0601"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center my-4">
              <input type="checkbox" className="mr-2" />
              <p className="text-sm ml-3">
                i agree to{" "}
                <span className="text-blue-600">Terms & Conditions </span> and{" "}
                <span className="text-blue-600">Privacy Policy</span>
              </p>
            </div>

            <button class="overflow-hidden  w-36 p-2 h-12 bg-black text-white border-none rounded-md text-xs font-bold cursor-pointer relative z-10 group">
              SEND MESSAGE
              <span class="absolute w-40 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
              <span class="absolute w-40 h-32 -top-8 -left-2 bg-[#db2777] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
              <span class="absolute w-40 h-32 -top-8 -left-2 bg-[#db2777] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
              <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute  left-6 z-10">
                SENDING MESSAGE
              </span>
            </button>
          </form>
        </div>
        <div className="md:w-[50%] w-full">
          <img src={serviceimg} />
        </div>
      </div>
    </motion.div>
  );
};

export default ContatcUs;
