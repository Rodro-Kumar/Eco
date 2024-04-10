import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiMenuFoldFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { FaCartArrowDown } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import cartImg from "../assets/product1.png";
import Button from "../Common/Button";
import logo from "../assets/logo.png";
import Tooltip from "./Tooltip";
import { IoCaretDownSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isshow, setisshow] = useState(false);
  const [showCategory, setshowCategory] = useState(false);
  const [showCart, setshowCart] = useState(false);
  const [showuser, setshowuser] = useState(false);
  const Menuref = useRef();

  // menubar functionality

  const HandleMenuBar = () => {
    setshowCategory(false);
    setshowuser(false);
    setshowCart(false);
    setisshow(!isshow);
  };

  // categary functionality

  const HandleCategory = () => {
    setshowuser(false);
    setshowCart(false);
    setisshow(false);
    setshowCategory(!showCategory);
  };

  // cart functionality

  const HandleCart = () => {
    setshowCategory(false);
    setshowuser(false);
    setisshow(false);
    setshowCart(!showCart);
  };

  // user functionality

  const HandleUser = () => {
    setisshow(false);
    setshowCategory(false);
    setshowCart(false);
    setshowuser(!showuser);
  };

  // menu ref functionality
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!Menuref.current.contains(e.target)) {
        setshowCategory(false);
        setshowuser(false);
      }
    });
  }, []);

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
                isshow
                  ? "left-0 z-10 w-1/2 transition-all shadow-xl"
                  : "left-[-100%] transition-opacity"
              }`}
            >
              <ul className="flex gap-x-10 py-7 pb-[558px] sm:pb-0 sm:py-0 flex-col sm:flex-row bg-[#ffffff] sm:bg-transparent rounded-tr-2xl">
                <li>
                  <NavLink
                    href="#"
                    className="group text-sm text-secondaryFontColor font-DMsans font-normal flex sm:inline-block  items-center hover:text-black hover:bg-[#dadada60] py-2 px-4 sm:py-0 sm:px-0 sm:hover:bg-transparent"
                  >
                    Home
                    <IoMdHome className="text-lg ml-10 group-hover:text-black sm:hidden scale-0  group-hover:scale-105 transition-all" />
                  </NavLink>
                </li>
                <li className="py-2 sm:py-0">
                  {" "}
                  <NavLink
                    href="#"
                    className="group text-sm text-secondaryFontColor font-DMsans font-normal flex sm:inline-block  items-center hover:text-black hover:bg-[#dadada60] py-2 px-4 sm:py-0 sm:px-0 sm:hover:bg-transparent"
                  >
                    Shop
                    <HiShoppingCart className="text-lg ml-[45px] group-hover:text-black sm:hidden scale-0  group-hover:scale-105 transition-all" />
                  </NavLink>
                </li>
                <li className="">
                  {" "}
                  <NavLink
                    href="#"
                    className="group text-sm text-secondaryFontColor font-DMsans font-normal flex sm:inline-block  items-center hover:text-black hover:bg-[#dadada60] py-2 px-4 sm:py-0 sm:px-0 sm:hover:bg-transparent"
                  >
                    About
                    <BiDetail className="text-lg ml-10 group-hover:text-black sm:hidden scale-0  group-hover:scale-105 transition-all" />
                  </NavLink>
                </li>
                <li className="py-2 sm:py-0">
                  {" "}
                  <NavLink
                    href="#"
                    className="group text-sm text-secondaryFontColor font-DMsans font-normal flex sm:inline-block  items-center hover:text-black hover:bg-[#dadada60] py-2 px-4 sm:py-0 sm:px-0 sm:hover:bg-transparent "
                  >
                    Contacts
                    <MdContactSupport className="text-lg ml-5 group-hover:text-black sm:hidden scale-0  group-hover:scale-105 transition-all" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="group text-sm text-secondaryFontColor font-DMsans font-normal flex sm:inline-block  items-center hover:text-black hover:bg-[#dadada60] py-2 px-4 sm:py-0 sm:px-0 sm:hover:bg-transparent"
                  >
                    Journal
                    <BsJournalBookmarkFill className="text-base ml-8 group-hover:text-black sm:hidden scale-0  group-hover:scale-105 transition-all" />
                  </NavLink>
                </li>
                <img
                  src={logo}
                  alt={logo}
                  className="w-12 ml-4 mt-16 sm:hidden"
                />
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
        <div className="bg-[#F5F5F3]">
          <div className="container">
            <div className="py-6 flex items-center justify-between px-4 lg:px-0 relative">
              <div className="left relative group">
                <div
                  className="flex items-center gap-x-[10px] cursor-pointer"
                  onClick={HandleCategory}
                >
                  <HiMenuAlt4 className="text-2xl sm:text-xl" />
                  <p className="text-sm text-primaryFontColor sm:pr-4 md:pr-0 font-normal whitespace-nowrap font-DMsans hidden sm:block">
                    Shop by Category
                  </p>
                </div>
                <Tooltip
                  TooltipTitle={"All category"}
                  className={"top-[-40px] z-10 text-[10px] whitespace-nowrap"}
                />
              </div>

              <div
                className={`bg-primaryFontColor text-[#fff] opacity-0 text-opacity-70 flex flex-col w-[263px] absolute top-[96px] sm:[102px] left-[50%] sm:left-0 sm:translate-x-0 -translate-x-[50%] z-10 ${
                  showCategory && "opacity-[1] transition-all"
                }`}
              >
                <Link
                  to={"/"}
                  href="#"
                  className="py-4 pl-5 font-DMsans text-sm font-normal border-b-2 border-[#97979727] hover:font-bold hover:pl-7 hover:text-white transition-all "
                >
                  Accesories
                </Link>
                <Link
                  to={"/"}
                  href="#"
                  className="py-4 pl-5 font-DMsans text-sm font-normal border-b-2 border-[#97979727] hover:font-bold hover:pl-7 hover:text-white transition-all "
                >
                  Furniture
                </Link>
                <Link
                  to={"/"}
                  href="#"
                  className="py-4 pl-5 font-DMsans text-sm font-normal border-b-2 border-[#97979727] hover:font-bold hover:pl-7 hover:text-white transition-all "
                >
                  Electronics
                </Link>
                <Link
                  to={"/"}
                  href="#"
                  className="py-4 pl-5 font-DMsans text-sm font-normal border-b-2 border-[#97979727] hover:font-bold hover:pl-7 hover:text-white transition-all "
                >
                  Clothes
                </Link>
                <Link
                  to={"/"}
                  href="#"
                  className="py-4 pl-5 font-DMsans text-sm font-normal border-b-2 border-[#97979727] hover:font-bold hover:pl-7 hover:text-white transition-all "
                >
                  Bags
                </Link>
                <Link
                  to={"/"}
                  href="#"
                  className="py-4 pl-5 font-DMsans text-sm font-normal border-b-2 border-[#97979727] hover:font-bold hover:pl-7 hover:text-white transition-all "
                >
                  Home appliances
                </Link>
              </div>
              <div className="midle">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Products"
                    className="pl-5 py-3 sm:py-4 pr-[8px] sm:pr-[170px] md:pr-[220px] lg:pr-[473px] placeholder:text-sm placeholder:text-[#C4C4C4] placeholder:font-DMsans placeholder:font-normal focus:outline-none  focus:ring-yellow-600 focus:ring-1 focus:rounded-md max-[348px]:pr-[4px] max-[330px]:ml-[6px] max-[330px]:pr-[3px]"
                  />
                  <div className="absolute top-0 right-0 my-4 pr-5 bg-white">
                    <FaSearch className="text-xl sm:text-2xl z-10" />
                  </div>
                </div>
              </div>
              <div className="right pl-4 lg:pl-5 max-[348px]:pl-2">
                <div className="flex items-center gap-x-3 md:gap-x-10 sm:gap-x-4 max-[348px]:gap-x-2">
                  <div
                    className="group relative flex items-center cursor-pointer text-lg "
                    onClick={HandleUser}
                  >
                    <FaUser title="User" />

                    {showuser ? <FaCaretUp /> : <FaCaretDown />}
                  </div>

                  {showuser && (
                    <div className="z-20 absolute top-[104px] right-[59px]  flex flex-col items-center w-[200px]">
                      <Link
                        href="#"
                        className="cursor-pointer py-4 w-full text-white bg-primaryFontColor font-DMsans font-bold text-sm text-center hover:bg-[#383838]"
                      >
                        My Account
                      </Link>

                      <Link
                        href="#"
                        className="group logout cursor-pointer py-4 flex gap-x-2 items-center justify-center w-full bg-white text-black font-semibold text-sm hover:bg-[#f0f0f0] transition-all"
                      >
                        Log Out
                        <BiLogOutCircle className="scale-150 group-hover:text-red-400" />
                      </Link>
                    </div>
                  )}

                  <div
                    className="cursor-pointer relative group"
                    onClick={HandleCart}
                  >
                    {showCart ? (
                      <FaCartArrowDown className="text-lg transition-all" />
                    ) : (
                      <FaShoppingCart className="text-lg  transition-all" />
                    )}
                    <Tooltip
                      TooltipTitle={"Shoping cart"}
                      className={"whitespace-nowrap right-[-3px] sm:right-0"}
                      DownArrow={
                        <IoCaretDownSharp className="text-[#353535] text-[18px] left-10 absolute" />
                      }
                    />
                  </div>

                  {showCart === true ? (
                    <div
                      className={`cartOverlay bg-white absolute top-[104px]  right-[8px] sm:right-0 z-30 shadow-lg sm:shadow-none`}
                    >
                      <div className="flex justify-center sm:justify-between items-center bg-[#F5F5F3] px-5 py-5">
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
                          <div
                            className="ml-14 sm:ml-16 cursor-pointer hover:scale-150 transition-all "
                            onClick={() => setshowCart(false)}
                          >
                            <RxCross2 />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center px-5 py-4 justify-center sm:justify-start">
                        <p className="text-base font-DMsans font-normal text-secondaryFontColor">
                          Subtotal:
                        </p>
                        <p className="text-base font-DMsans font-bold text-primaryFontColor pl-1">
                          $44.00
                        </p>
                      </div>
                      <div className="flex items-center gap-x-5 px-0 pb-5 sm:px-5 justify-center">
                        <div>
                          <Button
                            className={
                              "cartBtn py-[14px] px-8 sm:py-4 sm:px-10 text-white hover:outline-dashed hover:outline-2 hover:outline-black hover:border-[#000] whitespace-nowrap hover:bg-transparent"
                            }
                          >
                            View Cart
                          </Button>
                        </div>
                        <div>
                          <Button
                            className={
                              "cartBtn py-[14px] px-8 sm:py-4 sm:px-10 text-white hover:outline-dashed hover:outline-2 hover:outline-black hover:bg-transparent"
                            }
                          >
                            Checkout
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : null}
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
