import React from "react";
import phoneAds from "../../assets/sale.png";
import clockImg from "../../assets/clock.png";
import furnitureImg from "../../assets/furniture.png";
import Button from "../../Common/Button";
import Overlay from "../../Common/Overlay";

const Ads = () => {
  return (
    <>
      <div className="bg-red-400">
        <div className="container">
          <div className="py-40 flex gap-x-10">
            <div className="relative">
              <img src={phoneAds} alt={phoneAds} />
              <div className="absolute bottom-[72px] left-16">
                <h3 className="text-primaryFontColor font-DMsans font-bold text-4xl pb-9">
                  Phones Sale
                </h3>
                <p className="font-normal text-base font-DMsans text-[#262626b0] pb-12">
                  Up to
                  <span
                    className="text-[40px] font-DMsans font-bold text-primaryFontColor align-middle px-2
                  "
                  >
                    30%
                  </span>
                  sale for all phones!
                </p>
                <Button></Button>
              </div>
            </div>
            <div className="gap-y-8 flex flex-col">
              <div className="relative">
                <img src={clockImg} alt={clockImg} />
                <Overlay className={"absolute top-0"} />
              </div>
              <div>
                <img src={furnitureImg} alt={furnitureImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ads;
