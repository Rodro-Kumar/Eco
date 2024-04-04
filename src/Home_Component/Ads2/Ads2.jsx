import React from "react";
import clockimg from "../../assets/bigClock.png";
import Button from "../../Common/Button";

const Ads2 = () => {
  return (
    <>
      <div className="pb-32">
        <div className="container">
          <div className="bg-[#f3f3f3] flex items-center sm:py-5 sm:pr-5 md:py-0 md:px-0">
            <div>
              <img src={clockimg} alt={clockimg} />
            </div>
            <div>
              <h2 className="text-4xl font-DMsans font-bold text-primaryFontColor pb-9 sm:text-3xl sm:pb-4 md:text-4xl md:pb-9">
                Phone of the year
              </h2>
              <p className="text-base sm:text-sm md:text-base font-DMsans font-normal text-primaryFontColor pb-12 max-w-[510px] sm:pb-6 md:pb-12">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry orem Ipsum..
              </p>
              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ads2;
