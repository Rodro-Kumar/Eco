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
        <h3 className="text-3xl sm:text-4xl font-DMsans font-bold text-primaryFontColor pb-7">
          {AdsHeading ? AdsHeading : "Phones Sale "}
        </h3>
        <p className="text-sm sm:text-base font-DMsans font-normal sm:text-[#262626c4] text-yellow-400 pb-10 whitespace-nowrap sm:whitespace-normal">
          Up to
          <span className="text-[35px] text-yellow-400 sm:text-black sm:text-[40px] font-bold text-primaryFontColor px-2 align-middle">
            {Discout ? Discout : "30%"}
          </span>
          <span className="text-[#262626c4]">
            {DiscooutRightText ? DiscooutRightText : "sale for all phones!"}
          </span>
        </p>
        <Button className={"py-[10px] px-8 sm:py-4 sm:px-14"}>
          {btnTitle ? btnTitle : "Shop Now"}
        </Button>
      </div>
    </>
  );
};

export default Overlay;
