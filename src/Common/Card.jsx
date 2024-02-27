import React from "react";
import productImg from "../assets/product2.png";
import { FaHeart } from "react-icons/fa";

const Card = ({ colorVariant, badge, img }) => {
  return (
    <>
      <div className="cursor-pointer h-[371px] w-[90%]">
        <div className="group relative overflow-hidden">
          <div className="absolute top-5 left-5 text-black">{badge}</div>

          <img src={img ? img : productImg} alt={img} className="" />

          {/* =================Overlay================= */}

          <div className="py-6 px-7 flex flex-col items-end absolute -bottom-36 left-0 bg-white w-full gap-y-5 group-hover:bottom-0 transition-all">
            <div className="flex items-center gap-x-4">
              <h5 className="text-[#767676] font-normal hover:text-[#262626] hover:font-bold transition-all">
                Add to List
              </h5>
              <FaHeart />
            </div>
            <div className="flex items-center gap-x-4">
              <h5 className="text-[#767676] font-normal hover:text-[#262626] hover:font-bold transition-all">
                Add to List
              </h5>
              <FaHeart />
            </div>
            <div className="flex items-center gap-x-4">
              <h5 className="text-[#767676] font-normal hover:text-[#262626] hover:font-bold transition-all">
                Add to List
              </h5>
              <FaHeart />
            </div>
          </div>

          {/* =================Overlay================= */}
        </div>

        <div className="flex justify-between items-center pt-6">
          <h3>Basic Crew Neck Tee</h3>
          <p>$44.00</p>
        </div>
        {colorVariant && <span>Black</span>}
      </div>
    </>
  );
};

export default Card;
