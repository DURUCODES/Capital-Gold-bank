import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import image1 from "../Blog/img1.jpg";
import image2 from "../Blog/dds.jpg";
import image3 from "../Blog/img3.jpg";
import image4 from "../Blog/img4.jpg";
import { motion } from "framer-motion"; // Importing framer-motion

const Blog = () => {
  return (
    <div className="text-center mt-10 pt-10 ">
      <p className="text-[#db2777] tracking-2px mb-4">OUR BLOG</p>
      <h1 className="font-bold text-xl md:text-2xl mx-auto leading-relaxed">
        Keep Up To Date With Global Business Content <br /> From Our Trusted
        Team
      </h1>
      <div className="mt-10 flex flex-wrap justify-center">
        {/* Wrapping all cards in a motion.div for stagger effect */}
        <motion.div
          className="flex flex-wrap justify-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3, // Delay for each card to animate
                duration: 0.7,
                ease: "easeInOut",
              },
            },
          }}
        >
          {/* CARD 1 */}
          <motion.div
            className="m-4 w-[300px] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <div className="view">
              <img src={image1} className="w-[300px] h-[300px]" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-blue-700 mx-1">
                      <IoCalendarOutline />
                    </span>
                    <span className="text-blue-700 text-[14px]">
                      2024-24-10
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-700 mx-1">
                      <IoCreateOutline />
                    </span>
                    <span className="text-blue-700 text-[14px] max-w-[12ch] truncate">
                      rocky living
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold text-lg my-3 hover:text-blue-500 hover:underline">
                    <a
                      href="https://www.investopedia.com/articles/younginvestors/08/eight-tips.asp"
                      target="_blank"
                    >
                      8 Financial Tips for Young Adults
                    </a>
                  </h2>
                  <p className="text-gray-600 max-w-[150ch] truncate">
                    Exercise patience and self-control with your finances. If
                    you wait and save money for what you need, you will pay with
                    cash or a debit card to deduct money directly from your
                    checking account and avoid using a credit card.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            className="m-4 w-[300px] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <img src={image2} className="w-[300px] h-[300px]" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-blue-700 mx-1">
                    <IoCalendarOutline />
                  </span>
                  <span className="text-blue-700 text-[14px]">
                    October 25, 2024
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-700 mx-1">
                    <IoCreateOutline />
                  </span>
                  <span className="text-blue-700 text-[14px] max-w-[12ch] truncate">
                    Amanda Cooper
                  </span>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-lg my-3 hover:text-blue-500 hover:underline">
                  <a
                    href="https://www.reuters.com/markets/currencies/yen-wobbles-vulnerable-political-reverberations-2024-10-25/"
                    target="_blank"
                  >
                    Dollar gains for fourth week as investors grow jittery
                  </a>
                </h2>
                <p className="text-gray-600 max-w-[150ch] truncate">
                  LONDON, Oct 25 (Reuters) - The dollar was set for a fourth
                  weekly gain on Friday, as an uncertain backdrop for markets
                  sent the yen near three-month lows ahead of an election in
                  Japan over the weekend that could complicate the Bank of
                  Japan's (BOJ) plans to normalise rates.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            className="m-4 w-[300px] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <img src={image3} className="w-[300px] h-[300px]" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-blue-700 mx-1">
                    <IoCalendarOutline />
                  </span>
                  <span className="text-blue-700 text-[14px]">2024-24-10</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-700 mx-1">
                    <IoCreateOutline />
                  </span>
                  <span className="text-blue-700 text-[14px] max-w-[12ch] truncate">
                    By Sami Tunj
                  </span>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-lg my-3 hover:text-blue-500 hover:underline">
                  <a
                    href="https://punchng.com/nigeria-still-borrowing-amid-high-debt-costs-imf/"
                    target="_blank"
                  >
                    Nigeria still borrowing amid high debt costs – IMF
                  </a>
                </h2>
                <p className="text-gray-600 max-w-[150ch] truncate">
                  Nigeria’s engagement with the global debt market remains
                  vibrant despite challenges posed by high borrowing costs, the
                  International Monetary Fund has said.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            className="m-4 w-[300px] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <div className="view">
              <img src={image4} className="w-[300px] h-[300px]" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-blue-700 mx-1">
                      <IoCalendarOutline />
                    </span>
                    <span className="text-blue-700 text-[14px]">
                      2024-14-10
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-700 mx-1">
                      <IoCreateOutline />
                    </span>
                    <span className="text-blue-700 text-[14px] max-w-[12ch] truncate">
                      Olumide Adesina
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold text-lg my-3 hover:text-blue-500 hover:underline">
                    <a
                      href="https://nairametrics.com/2024/10/24/naira-exposed-to-market-forces-loses-n1650-level-at-official-market/"
                      target="_blank"
                    >
                      Naira exposed to market forces, loses N1,650/$ level at
                      official market
                    </a>
                  </h2>
                  <p className="text-gray-600 max-w-[150ch] truncate">
                    The local currency has been left to the whims of market
                    forces amid the strengthening of the U.S. dollar index.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
