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
import { motion } from "framer-motion";
const cards = [
  {
    icon: (
      <GiWorld className="text-[50px] md:text-[55px] text-[#db2777] mr-2" />
    ),
    title: "Global Coverage",
  },
  {
    icon: (
      <BiTransferAlt className="text-[50px] md:text-[55px] text-[#db2777] mr-2" />
    ),
    title: "Easy Transfer Method",
  },
  {
    icon: (
      <MdOutlineNotificationsActive className="text-[50px] md:text-[55px] text-[#db2777] mr-2" />
    ),
    title: "Global 24/7 Support",
  },
  {
    icon: (
      <PiHourglassLow className="text-[50px] md:text-[55px] text-[#db2777] mr-2" />
    ),
    title: "Lowest Fee",
  },
  {
    icon: (
      <IoIosFlash className="text-[50px] md:text-[55px] text-[#db2777] mr-2" />
    ),
    title: "Instant Processing",
  },
  {
    icon: (
      <MdSecurity className="text-[50px] md:text-[55px] text-[#db2777] mr-2" />
    ),
    title: "Bank Level Security",
  },
];
const Benefit = () => {
  return (
    <div className="my-10 bg-gray-100 py-10 px-4">
      <h3 className="text-center text-[#db2777] tracking-2px ">
        YOUR BENEFITS
      </h3>
      <h1 className="font-bold text-center md:text-[35px]">
        Your one-stop digital banking platform
      </h1>
      <div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 my-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative py-10 bg-white transition-all duration-200 cursor-pointer rounded-xl shadow px-6 overflow-hidden group view"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.5 },
                y: { duration: 0.8, delay: index * 0.2 },
              }}
            >
              <div className="absolute inset-0 bg-[#db2777] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
              <div className="flex items-center">
                <div className="relative z-10 transition-colors duration-200 group-hover:text-white">
                  {card.icon}
                </div>
                <p className="relative z-10 transition-colors duration-200 group-hover:text-white ml-4 font-bold">
                  {card.title}
                </p>
              </div>
              <div className="rounded-full w-[40px] h-[40px] absolute top-12 left-10 bg-blue-200"></div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10">
          <h3 className="text-center text-[#db2777] tracking-2px ">
            CURRENCY PROFILE
          </h3>
          <h1 className="font-bold text-center md:text-[35px]">
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
