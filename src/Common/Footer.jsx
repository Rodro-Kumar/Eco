import React from "react";
import Flex from "../Common/Flex";
import Logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F5F5F3] footer">
        <div className="container">
          <div className="py-14">
            <Flex className={" gap-x-36"}>
              <ul>
                <li>MENU</li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Journal</a>
                </li>
              </ul>
              <ul>
                <li>SHOP</li>
                <li>
                  <a href="#">Category 1</a>
                </li>
                <li>
                  <a href="#">Category 2</a>
                </li>
                <li>
                  <a href="#">Category 3</a>
                </li>
                <li>
                  <a href="#">Category 4</a>
                </li>
                <li>
                  <a href="#">Category 5</a>
                </li>
              </ul>
              <ul>
                <li>HELP</li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Special E-shop</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Secure Payments</a>
                </li>
              </ul>

              <div>
                <p className="text-base font-DMsans font-bold text-primaryFontColor">
                  (052) 611-5711
                </p>
                <p className="text-base font-DMsans font-bold text-primaryFontColor">
                  company@domain.com
                </p>
                <p className="text-sm font-DMsans font-normal text-thirdFontColor pt-3">
                  575 Crescent Ave. Quakertown, PA 18951
                </p>
              </div>
              <div>
                <picture>
                  <img src={Logo} alt={Logo} />
                </picture>
              </div>
            </Flex>
            <Flex className="pt-14 items-center justify-between">
              <Flex className={"gap-x-5 icon"}>
                <a
                  href="#"
                  className="text-2xl  items-center justify-center flex transition-all h-10 w-10  rounded-full"
                >
                  <FaFacebookF className="" />
                </a>
                <a
                  href="#"
                  className="text-2xl items-center justify-center flex transition-all h-10 w-10  rounded-full transition-all"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="text-2xl items-center justify-center flex transition-all h-10 w-10  rounded-full transition-all"
                >
                  <FaInstagram />
                </a>
              </Flex>
              <div>
                <p className="text-sm font-DMsans font-normal text-thirdFontColor">
                  2020 Orebi Minimal eCommerce Figma Template by Adveits
                </p>
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
