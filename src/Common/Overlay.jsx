import React from "react";
import Button from "./Button";

const Overlay = ({
  className,
  DiscooutRightText,
  Discout,
  AdsHeading,
  btnTitle,
}) => {
  return (
    <>
      <div className={className}>
        <h3 className="text-3xl sm:text-[30px]  md:text-4xl font-DMsans font-bold text-primaryFontColor pb-7 sm:pb-4 md:pb-7">
          {AdsHeading ? AdsHeading : "Phones Sale "}
        </h3>
        <p className="text-sm sm:text-xs md:text-base font-DMsans font-bold sm:font-normal text-[#262626c4]  pb-10 sm:pb-4 md:pb-10 whitespace-nowrap sm:whitespace-normal">
          Up to
          <span className="text-[30px]  text-white sm:bg-transparent rounded-md bg-[#0000002f] sm:text-black sm:text-[28px] md:text-[40px] font-bold text-primaryFontColor px-2 align-middle">
            {Discout ? Discout : "30%"}
          </span>
          <span className="text-[#262626c4]">
            {DiscooutRightText ? DiscooutRightText : "sale for all phones!"}
          </span>
        </p>
        <Button
          className={
            "py-[10px] px-8 sm:py-[10px] sm:px-[40px] md:py-4 md:px-14"
          }
        >
          {btnTitle ? btnTitle : "Shop Now"}
        </Button>
      </div>
    </>
  );
};

export default Overlay;
