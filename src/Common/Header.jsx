import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex items-center py-8">
            <div>
              <img src={logo} alt={logo} />
            </div>
            <div className="list m-auto">
              <ul className="flex gap-x-10">
                <li>
                  <a
                    href="#"
                    className="text-sm text-secondaryFontColor font-DMsans font-normal"
                  >
                    Home
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="#"
                    className="text-sm text-secondaryFontColor font-DMsans font-normal "
                  >
                    Shop
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="#"
                    className="text-sm text-secondaryFontColor font-DMsans font-normal  "
                  >
                    About
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="#"
                    className="text-sm text-secondaryFontColor font-DMsans font-normal  "
                  >
                    Contacts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-secondaryFontColor font-DMsans font-normal "
                  >
                    Journal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* =========== Bottom =========== */}
        <div className="bg-[#F5F5F3]">
          <div className="container">
            <div className="py-6 flex items-center justify-between">
              <div className="left">
                <div className="flex items-center gap-x-[10px] cursor-pointer">
                  <HiMenuAlt4 className="text-xl" />
                  <p className="text-sm text-primaryFontColor font-normal font-DMsans">
                    Shop by Category
                  </p>
                </div>
              </div>
              <div className="center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Products"
                    className="pl-5 py-4 pr-[468px] placeholder:text-sm placeholder:text-[#C4C4C4] placeholder:font-DMsans placeholder:font-normal focus:outline-none  focus:ring-yellow-600 focus:ring-1 focus:rounded-md"
                  />
                  <div className="absolute top-0 right-0 my-4 pr-5 ">
                    <FaSearch className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="flex items-center gap-x-10">
                  <div className="group flex items-center cursor-pointer text-lg">
                    <FaUser title="User" />
                    <FaCaretDown />
                  </div>
                  <div className="cursor-pointer">
                    <FaShoppingCart className="text-lg" title="Shoping" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
