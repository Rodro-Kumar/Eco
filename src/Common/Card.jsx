import React from "react";
import product1 from "../assets/product1.png";
import Button from "./Button";
import { FaHeart } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { BsCartDashFill } from "react-icons/bs";

const Card = ({
  productImg,
  tag,
  productTitle,
  productPrice,
  productCategotyTitle,
}) => {
  return (
    <>
      <div className="card cursor-pointer inline-block ">
        <div className="relative overflow-hidden">
          <img src={productImg ? productImg : product1} alt={productImg} />
          <div className="absolute top-5 left-5">
            <Button className={"py-[6px] px-6"}>{tag ? tag : "New"}</Button>
          </div>
          <div className="bg-white absolute -bottom-36 w-full transition-all overlay">
            <div className="flex flex-col items-end py-6 pr-7 gap-y-5">
              <div>
                <a href="#" className="wish-list wish flex items-center">
                  <p
                    className="text-base font-DMsans font-normal text-secondaryFontColor pr-[15px] hover:text-primaryFontColor hover:font-bold transition-all
                  "
                  >
                    Add to Wish List
                  </p>
                  <FaHeart className="text-xl" />
                </a>
              </div>
              <div>
                <a href="#" className="compare flex items-center">
                  <p className="text-base font-DMsans font-normal text-secondaryFontColor pr-[15px] hover:text-primaryFontColor hover:font-bold transition-all">
                    Compare
                  </p>
                  <TbReload className="text-xl" />
                </a>
              </div>
              <div>
                <a href="#" className="cart flex items-center">
                  <p className="text-base font-DMsans font-normal text-secondaryFontColor pr-[15px] hover:text-primaryFontColor hover:font-bold transition-all">
                    Add to Cart
                  </p>
                  <BsCartDashFill className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-6">
          <p className="text-xl font-DMsans font-bold text-primaryFontColor">
            {productTitle ? productTitle : "Basic Crew Neck Tee"}
          </p>
          <p className="text-base font-normal font-DMsans text-secondaryFontColor">
            {productPrice ? productPrice : "$44.00"}
          </p>
        </div>
        <p className="text-base font-DMsans font-normal text-secondaryFontColor pt-3">
          {productCategotyTitle ? productCategotyTitle : "Black"}
        </p>
      </div>
    </>
  );
};

export default Card;
