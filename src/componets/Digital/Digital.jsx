import React from "react";
import bigimage from "../public/image/bigimage1.avif";
import image2 from "../public/image/smallimg1.avif";
import { IoRocket } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Digital = () => {
  return (
    <div className="md:p-20 p-4 flex flex-col md:flex-row justify-between items-center ">
      {/* Left side - Images */}
      <motion.div
        className="md:px-10 px-4 relative flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Make it run only once when the element comes into view
      >
        {/* Big Image - Animated from the top */}
        <motion.div
          className="w-full"
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
        >
          <img
            src={bigimage}
            className="clip-image md:h-[700px] h-[500px] w-full object-cover object-center"
            alt="Big Image"
          />
        </motion.div>

        {/* Small Image - Animated from the left */}
        <motion.div
          className="absolute z-10 md:w-[350px] w-[180px] h-[180px] md:h-[350px] 
               md:-translate-y-1/2 md:top-[20%]  md:left-[-10%] 
               left-[-5%] -translate-x-1/2 top-[28%] -translate-y-1/2 
               bg-white"
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
        >
          <img
            src={image2}
            className="clip-image border-4 border-white w-full h-full object-cover"
            alt="Small Image"
          />
        </motion.div>
      </motion.div>

      {/* Right side - Texts and Button */}
      <motion.div
        className="md:ml-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }} // Make it run only once when the element comes into view
      >
        {/* About Us Section */}
        <motion.div
          className="my-5"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#db2777] text-[25px]">ABOUT US</h3>
          <h1 className="md:text-[50px] text-[18px] font-bold my-4">
            We revolutionized Digital Banking
          </h1>
          <p className="text-[16px]">
            We have grown to become one of the largest digital banking
            providers, committed to inventing, simplifying, and humanizing the
            banking experience.
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="">
          {/* Feature 1 */}
          <motion.div
            className="flex my-8"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-blue-100 w-24 h-14 px-5 flex mr-4 items-center justify-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
              <FaAppStore className="text-3xl text-[#db2777] group-hover:text-white transition-colors duration-500 relative z-10" />
            </div>
            <div>
              <h2 className="text-[20px] font-bold">
                Powerful Mobile & Online App
              </h2>
              <p className="font-light text-gray-600">
                Our mobile app service is quick and easy to use, and you can get
                it from your app store.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="flex my-8"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-blue-100 w-24 h-14 px-5 flex mr-4 items-center justify-center rounded-t-2xl rounded-l-xl transition-all duration-200 cursor-pointer rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#db2777] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
              <IoRocket className="text-3xl text-[#db2777] group-hover:text-white transition-colors duration-500 relative z-10" />
            </div>
            <div>
              <h2 className="text-[16px] font-bold">
                Brings More Transparency & Speed
              </h2>
              <p className="font-light text-gray-600">
                Our digital banking services are transparent and quick, and
                we're building a reliable network.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Button Section */}
        <motion.div
          className="my-10"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <Link to="/login">
            <button className="uppercase bg-[#db2777] hover:bg-[#46172c] text-white px-5 py-2 rounded flex items-center">
              Read More
              <span className="ml-2">
                <FaAngleRight />
              </span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Digital;
