import React, { useState } from "react";
import Goldhand from "../public/image/goldhand.jpg";
import { IoPersonAddOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import LanguageSelector from "../language/LanguageSelector";

export const navlinks = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "Business",
    url: "/business",
  },
  {
    id: 3,
    label: "Personal",
    url: "/personal",
  },
  {
    id: 4,
    label: "Credit Cards",
    url: "/creditcard",
  },
  {
    id: 5,
    label: "Loans",
    url: "/loans",
  },
  {
    id: 6,
    label: "About Us",
    url: "/about",
  },
  {
    id: 7,
    label: "Support",
    url: "/support",
  },
];
const desktopnav = ({ openNav, isOpen }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isDrop, setIsDrop] = useState(false);
  const toggleDropdown = () => {
    setIsDrop(!isDrop);
  };
  const cancleToggle = () => {
    setIsDrop(false);
  };

  return (
    <div className="md:px-4   px-1 flex justify-between items-center  shadow-2xl  mb-0">
      <div className="flex  items-center ">
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
          <Link to="/">
            <h1 className="text-yellow-500 font-bold text-xs md:text-2xl">
              Capital Gold
            </h1>
            <p className="text-[#db2777] font-bold  text-[10px] md:text-sm">
              Banking and Finance
            </p>
          </Link>
        </div>
      </div>
      <div className="items-center hidden md:flex">
        {/* links */}
        {navlinks.map((link) => (
          <ul key={link.id} className="flex">
            <Link to={link.url}>
              {" "}
              <li
                className={`mr-4 cursor-pointer ${
                  activeLink === link.label ? "text-[#db2777]" : "text-black"
                }`}
                onClick={() => setActiveLink(link.label)} // Set active link on click
              >
                <a>{link.label}</a>
              </li>
            </Link>
          </ul>
        ))}
      </div>
      <div className="flex items-center">
        {/* buttons */}

        <div className="relative">
          <IoPersonAddOutline
            className="md:mr-4 text-[22px] cursor-pointer"
            onClick={toggleDropdown}
          />
          {isDrop && (
            <div className="absolute bg-white shadow-xl top-10 rounded ">
              <div tabIndex={0} role="button" className="btn m-1"></div>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 space-y-2 p-2 shadow">
                <li onClick={cancleToggle}>
                  <Link to="/login">Login</Link>
                </li>
                <li onClick={cancleToggle}>
                  <Link to="/register">Sign Up</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="hidden md:block">
          <button class="overflow-hidden  w-36 p-2 h-12 bg-black text-white border-none rounded-md text-xs font-bold cursor-pointer relative z-10 group">
            Online Banking
            <span class="absolute w-40 h-28 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span class="absolute w-40 h-28 -top-8 -left-2 bg-[#db2777] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span class="absolute w-40 h-28 -top-8 -left-2 bg-[#db2777] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
            <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute  left-6 z-10">
              Online Banking
            </span>
          </button>
        </div>
      </div>
      <div className="">
        {/* translate */}
        <LanguageSelector />
      </div>
      <div
        className="md:hidden flex  items-center px-4  w-14 h-14 bg-[#db2777] rounded-t-2xl rounded-l-xl cursor-pointer"
        onClick={openNav}
      >
        {/* Hmaburger */}
        <CiMenuFries className="text-white text-xl" />
      </div>
    </div>
  );
};

export default desktopnav;
