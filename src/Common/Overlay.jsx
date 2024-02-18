import React from "react";
import Button from "./Button";

const Overlay = ({ className }) => {
  return (
    <>
      <div className={className}>
        <h3 className="text-4xl font-DMsans font-bold text-primaryFontColor pb-9">
          Phones Sale
        </h3>
        <p className="text-base font-DMsans font-normal text-[#262626c4] pb-12">
          Up to{" "}
          <span className="text-[40px] font-bold text-primaryFontColor">
            30%
          </span>
          sale for all phones!
        </p>
        <Button></Button>
      </div>
    </>
  );
};

export default Overlay;
