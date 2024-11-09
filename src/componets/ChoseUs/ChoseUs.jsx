import React from "react";
import { MdDone } from "react-icons/md";
import image1 from "../public/image/chose1.avif";
import image2 from "../public/image/chose2.avif";
import image3 from "../public/image/chose3.avif";
import { motion } from "framer-motion";

const ChoseUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      {/* Left side (Text Section with Framer Motion Animation) */}
      <motion.div
        className="px-5 md:p-10 flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0, y: 100 }} // Start from below
        whileInView={{ opacity: 1, y: 0 }} // Move to normal position
        transition={{
          duration: 1,
          ease: "easeInOut", // Smooth transition
          staggerChildren: 0.3, // Add staggered animations for children
        }}
        viewport={{ once: true }} // Only animate once when in view
      >
        <div className="">
          {/* Main Title */}
          <motion.h2
            className="text-[#db2777] tracking-2px"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            WHY CHOOSE US
          </motion.h2>
          <motion.h1
            className="md:text-[40px] text-[20px] my-2 font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            We are innovative and digital
          </motion.h1>
          <motion.p
            className="text-gray-900 text-[14px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Capital Gold bank transformed the credit card business using data
            and technology more than ten years ago. We are now one of the
            largest digital banking providers, dedicated to innovating,
            simplifying, and humanizing banking.
          </motion.p>

          {/* Animated List Items */}
          <div>
            <motion.div
              className="relative flex mr-4 items-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl my-4 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="relative bg-white shadow md:p-5 p-3 rounded-full overflow-hidden transition-all duration-500 mr-2">
                <span className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                <MdDone className="text-3xl text-[#db2777] transition-colors duration-500 relative z-10 group-hover:text-white" />
              </span>
              <p className="ml-2 transition-colors duration-500 text-black group-hover:text-[#db2777] font-bold md:text-[20px]">
                Historical Currency Rates
              </p>
            </motion.div>

            <motion.div
              className="relative flex mr-4 items-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl my-4 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="relative bg-white shadow md:p-5 p-3 rounded-full overflow-hidden transition-all duration-500 mr-2">
                <span className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                <MdDone className="text-3xl text-[#db2777] transition-colors duration-500 relative z-10 group-hover:text-white" />
              </span>
              <p className="ml-2 transition-colors duration-500 text-black group-hover:text-[#db2777] font-bold md:text-[20px]">
                Travel Expense Calculator
              </p>
            </motion.div>

            <motion.div
              className="relative flex mr-4 items-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl my-4 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="relative bg-white shadow md:p-5 p-3 rounded-full overflow-hidden transition-all duration-500 mr-2">
                <span className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                <MdDone className="text-3xl text-[#db2777] transition-colors duration-500 relative z-10 group-hover:text-white" />
              </span>
              <p className="ml-2 transition-colors duration-500 text-black group-hover:text-[#db2777] font-bold md:text-[20px]">
                Currency Email Updates
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Right side (Images with Framer Motion Animation) */}
      <motion.div
        className="flex space-x-3 -space-y-5 items-center  px-4"
        initial={{ opacity: 0, x: 100 }} // Start from the right
        whileInView={{ opacity: 1, x: 0 }} // Move to normal position
        transition={{
          duration: 1,
          ease: "easeInOut", // Smooth transition
        }}
        viewport={{ once: true }} // Only animate once when in view
      >
        <div className="space-y-5">
          <motion.div
            className="clip-div2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img src={image1} />
          </motion.div>
          <motion.div
            className="clip-div2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src={image2} />
          </motion.div>
        </div>
        <motion.div
          className="clip-div"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <img src={image3} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChoseUs;
