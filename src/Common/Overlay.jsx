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
      <div className={`${className}`}>
        <h3 className="text-3xl sm:text-[30px] md:text-4xl font-DMsans font-bold text-primaryFontColor pb-7 sm:pb-4 lg:pb-7 max-[338px]:text-[22px]">
          {AdsHeading ? AdsHeading : "Phones Sale "}
        </h3>
        <p className="text-sm sm:text-xs lg:text-base font-DMsans font-bold sm:font-normal text-[#262626c4]  pb-10 sm:pb-4 lg:pb-10 whitespace-nowrap sm:whitespace-normal max-[338px]:text-[12px]">
          Up to
          <span className="text-[30px]  text-white sm:bg-transparent rounded-md bg-[#0000002f] sm:text-black sm:text-[28px] md:text-[40px] font-bold text-primaryFontColor px-2 align-middle max-[338px]:text-[20px]">
            {Discout ? Discout : "30%"}
          </span>
          <span className="text-[#262626c4]">
            {DiscooutRightText ? DiscooutRightText : "sale for all phones!"}
          </span>
        </p>
        <Button
          className={
            "py-[10px] px-8 sm:py-[10px] sm:px-[40px] lg:py-4 lg:px-14 md:mt-2 lg:mt-0 max-[338px]:px-[20px]"
          }
        >
          {btnTitle ? btnTitle : "Shop Now"}
        </Button>
      </div>
    </>
  );
};

export default Overlay;
