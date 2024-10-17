import React from "react";
import { SiGnuprivacyguard } from "react-icons/si";
import { GiWorld } from "react-icons/gi";
import { BiTransferAlt } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { PiHourglassLow } from "react-icons/pi";
import { TbHandClick } from "react-icons/tb";
import { countryList } from "../currencyrate/Rate";
const Benefit = () => {
  return (
    <div className="my-10 bg-gray-100 p-10">
      <h3 className="text-center text-[#db2777] tracking-2px ">
        YOUR BENEFITS
      </h3>
      <h1 className="font-bold text-center text-[35px]">
        Your one-stop digital banking platform
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3  my-4 gap-6">
          <div className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group">
            <div className="absolute inset-0 bg-[#db2777]  transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <GiWorld className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4  font-bold">
                Global Coverage
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </div>

          <div className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group">
            <div className="absolute inset-0 bg-[#db2777]  transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <BiTransferAlt className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4  font-bold">
                Easy Transfer Method
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </div>

          <div className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group">
            <div className="absolute inset-0 bg-[#db2777]  transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <MdOutlineNotificationsActive className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4  font-bold">
                Global 24 / 7 Support
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </div>

          <div className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group">
            <div className="absolute inset-0 bg-[#db2777]  transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <PiHourglassLow className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4  font-bold">
                Lowest Fee
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </div>

          <div className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group">
            <div className="absolute inset-0 bg-[#db2777]  transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <IoIosFlash className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4  font-bold">
                Instant Processing
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </div>

          <div className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group">
            <div className="absolute inset-0 bg-[#db2777]  transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            <div className="flex items-center">
              <MdSecurity className="text-[50px] md:text-[55px] text-[#db2777] mr-2 relative z-10 transition-colors duration-200 group-hover:text-white " />
              <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4  font-bold">
                Bank Level Security
              </p>
            </div>
            <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
          </div>
        </div>

        <div className="my-40">
          <h3 className="text-center text-[#db2777] tracking-2px ">
            CURRENCY PROFILE
          </h3>
          <h1 className="font-bold text-center text-[35px]">
            Get These Local Account Details Just Like Pay A Local
          </h1>
          <div>
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 w-full flex-wrap my-10">
              {countryList.map((country) => (
                <div
                  key={country.code}
                  className="relative  bg-white w-full  py-8 px-4 flex mr-4 items-center transition-all duration-200 cursor-pointer  overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                  <img
                    src={country.image} // Use the image property from countryList
                    alt={country.country}
                    className="w-10 h-10 object-cover relative z-10" // Adjust size as needed
                  />{" "}
                  <div className="relative z-10  group-hover:text-white flex  font-bold ml-4 text-black  transition-colors duration-500">
                    <div>{country.country}</div>
                    <span>-</span>
                    <div>{country.code}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
