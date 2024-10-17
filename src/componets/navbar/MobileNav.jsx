import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export const navlinks = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "Business", url: "/business" },
  { id: 3, label: "Personal", url: "/personal" },
  { id: 4, label: "Credit Cards", url: "/creditcard" },
  { id: 5, label: "Loans", url: "/loans" },
  { id: 6, label: "About Us", url: "/about" },
  { id: 7, label: "Support", url: "/support" },
];

const MobileNav = ({ closeNav, isOpen }) => {
  const [activeLink, setActiveLink] = useState("Home");
  if (!isOpen) return null;

  return (
    <div className="relative">
      {/* Overlay with blur effect */}
      <div className="bg-yellow-600 h-[100vh] w-full absolute top-0 left-0 backdrop-blur-sm z-10"></div>

      {/* Navbar container */}
      <div className="flex fixed h-screen bg-white shadow-xl w-[80%] px-8 py-28 right-0 top-0 z-20">
        <div className="flex text-2xl absolute top-2 right-2 cursor-pointer px-2 py-2 bg-purple-600 rounded-t-2xl rounded-l-xl text-white">
          <IoMdClose onClick={closeNav} />
        </div>

        {/* Add your links here */}
        <div className="flex flex-col items-center">
          {navlinks.map((link) => (
            <ul key={link.id} className="flex flex-col">
              <Link to={link.url} onClick={closeNav}>
                <li
                  className={`mr-4 cursor-pointer my-2 ${
                    activeLink === link.label ? "text-[#db2777]" : "text-black"
                  }`}
                  onClick={() => setActiveLink(link.label)}
                >
                  <a>{link.label}</a>
                </li>
              </Link>
            </ul>
          ))}

          <div className="md:block mt-10">
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
      </div>
    </div>
  );
};

export default MobileNav;
