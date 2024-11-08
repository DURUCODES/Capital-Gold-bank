import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNav = ({ closeNav, isOpen }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      setShowMenu(true);
    } else {
      const timer = setTimeout(() => setShowMenu(false), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="z-50 fixed backdrop-blur-md h-screen top-0 left-0 w-full  bg-opacity-70">
          <div
            className={`bg-black bg-opacity-10 md:w-[400px] absolute left-0 top-0 h-full w-[250px] px-3 py-4 transition-transform duration-300 ease-in-out ${
              showMenu
                ? "transform translate-x-0"
                : "transform -translate-x-full"
            }`}
          >
            <motion.div
              animate={{ x: 0 }}
              transition={{ duration: 5 }}
              className="flex flex-col h-full fixed bg-white shadow-xl w-[300px] px-20   py-0 text-center left-[50%] top-0 z-10 transition-all duration-700"
            >
              <div className="flex text-2xl absolute top-2 right-10 cursor-pointer px-4 py-3 bg-[#db2777] rounded-t-2xl rounded-l-xl text-white">
                <IoMdClose onClick={closeNav} />
              </div>

              <div className="flex flex-col items-center justify-center py-24">
                <ul className="space-y-4 uppercase text-[12px]">
                  <li>
                    <Link
                      to="/"
                      className={`${
                        location.pathname === "/"
                          ? "text-[#db2777]"
                          : "text-black"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/business"
                      className={`${
                        location.pathname === "/business"
                          ? "text-[#db2777]"
                          : "text-black"
                      }`}
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/personal"
                      className={`${
                        location.pathname === "/personal"
                          ? "text-[#db2777]"
                          : "text-black"
                      }`}
                    >
                      Personal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/creditcard"
                      className={`${
                        location.pathname === "/creditcard"
                          ? "text-[#db2777]"
                          : "text-black"
                      }`}
                    >
                      Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/loans"
                      className={`${
                        location.pathname === "/loans"
                          ? "text-[#db2777]"
                          : "text-black"
                      }`}
                    >
                      Loans
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className={`${
                        location.pathname === "/about"
                          ? "text-[#db2777]"
                          : "text-black"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/support"
                      className={`${
                        location.pathname === "/support"
                          ? "text-[#db2777]"
                          : "text-black"
                      }`}
                    >
                      Support
                    </Link>
                  </li>
                </ul>

                <div className="md:block mt-10">
                  <button className="overflow-hidden w-36 p-2 h-12 bg-black text-white border-none rounded-md text-xs font-bold cursor-pointer relative group">
                    Online Banking
                    <span className="absolute w-40 h-28 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                    <span className="absolute w-40 h-28 -top-8 -left-2 bg-[#db2777] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                    <span className="absolute w-40 h-28 -top-8 -left-2 bg-[#db2777] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                    <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-6 z-10">
                      Online Banking
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
