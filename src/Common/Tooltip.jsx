import React from "react";
import { IoCaretDownSharp } from "react-icons/io5";
import { IoMdArrowDropup } from "react-icons/io";

const Tooltip = ({ TooltipTitle, className }) => {
  return (
    <>
      <div
        className={`opacity-0 group-hover:opacity-[1]  transition ease-in duration-300 absolute py-[6px] px-2 bg-[#353535] text-[#ffffffb2] rounded-lg top-[-47px] text-[10px] font-medium ${className}`}
      >
        {TooltipTitle ? TooltipTitle : "Tooltip"}
        <div className="absolute top-[20px]">
          <IoCaretDownSharp className=" text-[#353535] text-lg" />
        </div>
        <div className="absolute bottom-[10px] hidden">
          <IoMdArrowDropup className="text-[#353535] text-3xl" />
        </div>
      </div>
    </>
  );
};

export default Tooltip;
