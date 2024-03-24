import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiMenuFoldFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { BiDetail } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";
import { BsJournalBookmarkFill } from "react-icons/bs";
import cartImg from "../assets/product1.png";
import Button from "../Common/Button";

import logo from "../assets/logo.png";

const Header = () => {
  const [isshow, setisshow] = useState(false);

  const HandleMenuBar = () => {
    setisshow(!isshow);
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="flex items-center py-8 px-4 sm:px-0 justify-between ">
            <div className="cursor-pointer">
              <img src={logo} alt={logo} />
            </div>

            <div
              className={`m-auto sm:block absolute top-[87px] sm:static ${
                isshow ? "left-0 z-10 w-1/2 transition-all " : "left-[-100%]"
              }`}
            >
              <ul className="flex gap-x-10 py-7 pb-[558px] sm:pb-0 sm:py-0 flex-col sm:flex-row bg-[#ffffff] sm:bg-transparent rounded-tr-2xl">
                <li>
                  <a
                    href="#"
                    className="group text-sm text-secondaryFontColor font-DMsans font-normal flex sm:inline-block  items-center hover:text-black hover:bg-[#dadada60] py-2 px-4 sm:py-0 sm:px-0 sm:hover:bg-transparent"
                  >
                    Home
                    <IoMdHome className="text-lg ml-10 group-hover:text-black sm:hidden scale-0  group-hover:scale-105 transition-all" />
                  </a>
                </li>
                <li className="py-2 sm:py-0">
                  {" "}
                  <a
                    href="#"
                    className="group text-sm text-secondaryFontColor font-DMsans font-normal flex sm:inline-block  items-center hover:text-black hover:bg-[#dadada60] py-2 px-4 sm:py-0 sm:px-0 sm:hover:bg-transparent"
                  >
                    Shop
                    <HiShoppingCart className="text-lg ml-[45px] group-hover:text-black sm:hidden scale-0  group-hover:scale-105 transition-all" />
                  </a>
                </li>
                <li className="">
                  {" "}
                  <a
                    href="#"
                    className="group text-sm text-secondaryFontColor font-DMsans font-normal flex sm:inline-block  items-center hover:text-black hover:bg-[#dadada60] py-2 px-4 sm:py-0 sm:px-0 sm:hover:bg-transparent"
                  >
                    About
                    <BiDetail className="text-lg ml-10 group-hover:text-black sm:hidden scale-0  group-hover:scale-105 transition-all" />
                  </a>
                </li>
                <li className="py-2 sm:py-0">
                  {" "}
                  <a
                    href="#"
                    className="group text-sm text-secondaryFontColor font-DMsans font-normal flex sm:inline-block  items-center hover:text-black hover:bg-[#dadada60] py-2 px-4 sm:py-0 sm:px-0 sm:hover:bg-transparent "
                  >
                    Contacts
                    <MdContactSupport className="text-lg ml-5 group-hover:text-black sm:hidden scale-0  group-hover:scale-105 transition-all" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group text-sm text-secondaryFontColor font-DMsans font-normal flex sm:inline-block  items-center hover:text-black hover:bg-[#dadada60] py-2 px-4 sm:py-0 sm:px-0 sm:hover:bg-transparent"
                  >
                    Journal
                    <BsJournalBookmarkFill className="text-base ml-8 group-hover:text-black sm:hidden scale-0  group-hover:scale-105 transition-all" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="cursor-pointer sm:hidden" onClick={HandleMenuBar}>
              {isshow === true ? (
                <RxCross2 className="text-2xl" />
              ) : (
                <RiMenuFoldFill className="text-2xl" />
              )}
            </div>
          </div>
        </div>
        {/* =========== Bottom =========== */}
        <div className="bg-[#eeee3e]">
          <div className="container">
            <div className="py-6 flex items-center justify-between px-4 sm:px-0 relative">
              <div className="left">
                <div className="flex items-center gap-x-[10px] cursor-pointer">
                  <HiMenuAlt4 className="text-2xl sm:text-xl" />
                  <p className="text-sm text-primaryFontColor font-normal font-DMsans hidden sm:block">
                    Shop by Category
                  </p>
                </div>
              </div>
              <div className="bg-primaryFontColor text-[#fff] text-opacity-70 flex flex-col w-[263px] absolute top-[102px] left-0  z-10">
                {[
                  "Accesories",
                  "Furniture",
                  "Electronics",
                  "Clothes",
                  "Bags",
                  "Home appliances",
                ].map((item, index) => {
                  return (
                    <a
                      href="#"
                      key={index}
                      className="py-4 pl-5 font-DMsans text-sm font-normal border-b-2 border-[#97979727] hover:font-bold hover:pl-7 hover:text-white transition-all "
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
              <div className="midle">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Products"
                    className="pl-5 py-3 sm:py-4  pr-[8px] sm:pr-[473px] placeholder:text-sm placeholder:text-[#C4C4C4] placeholder:font-DMsans placeholder:font-normal focus:outline-none  focus:ring-yellow-600 focus:ring-1 focus:rounded-md"
                  />
                  <div className="absolute top-0 right-0 my-4 pr-5 ">
                    <FaSearch className="text-xl sm:text-2xl" />
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="flex items-center gap-x-3 sm:gap-x-10">
                  <div className="group flex items-center cursor-pointer text-lg">
                    <FaUser title="User" />
                    <FaCaretDown />
                  </div>
                  <div className="absolute top-[104px] right-[59px] z-10 flex flex-col items-center w-[200px] hidden">
                    <a
                      href="#"
                      className="py-4 w-full text-white bg-primaryFontColor font-DMsans font-bold text-sm text-center"
                    >
                      My Account
                    </a>
                    <a
                      href=""
                      className="py-4  w-full bg-white text-black font-normal text-sm text-center"
                    >
                      Log Out
                    </a>
                  </div>
                  <div className="cursor-pointer">
                    <FaShoppingCart className="text-lg" title="Shoping" />
                  </div>
                  <div className="bg-white absolute top-[104px] right-0 z-10">
                    <div className="flex justify-between items-center bg-[#F5F5F3] px-5 py-5">
                      <div className="h-[80px] w-[80px]">
                        <img src={cartImg} alt={cartImg} />
                      </div>
                      <div className="flex items-center pl-5">
                        <div>
                          <h3 className="font-DMsans font-bold text-sm whitespace-nowrap">
                            Black Smart Watch
                          </h3>
                          <p className="font-DMsans font-bold text-sm">
                            $44.00
                          </p>
                        </div>
                        <div className="ml-16 cursor-pointer hover:scale-150 transition-all">
                          <RxCross2 />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-5 py-4">
                      <p className="text-base font-DMsans font-normal text-secondaryFontColor">
                        Subtotal:
                      </p>
                      <p className="text-base font-DMsans font-bold text-primaryFontColor pl-1">
                        $44.00
                      </p>
                    </div>
                    <div className="flex items-center justify-between px-5 pb-5">
                      <div>
                        <Button
                          className={
                            "py-4 px-10 text-white hover:border-2 hover:border-[#000] hover:text-black hover:bg-white transition-all"
                          }
                        >
                          View Cart
                        </Button>
                      </div>
                      <div>
                        <Button
                          className={
                            "py-4 px-10 text-white hover:border-2 hover:border-[#000] hover:text-black hover:bg-white transition-all"
                          }
                        >
                          Checkout
                        </Button>
                      </div>
                    </div>
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
