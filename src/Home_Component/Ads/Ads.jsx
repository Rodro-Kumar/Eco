import React from "react";
import phoneAds from "../../assets/sale.png";
import clockImg from "../../assets/clock.png";
import furnitureImg from "../../assets/furniture.png";
import Overlay from "../../Common/Overlay";

const Ads = () => {
  return (
    <>
      <div className="px-4 sm:px-0">
        <div className="container">
          <div className="py-[60px] flex flex-col sm:flex-row gap-x-10 sm:py-40">
            <div className="relative mb-8 sm:mb-0">
              <img src={phoneAds} alt={phoneAds} />
              <Overlay
                className={
                  "absolute bottom-[51px] md:bottom-[37px] lg:bottom-[72px] sm:bottom-[37px] left-10 md:left-16"
                }
                AdsHeading={"Phones Sale"}
                Discout={"30%"}
                DiscooutRightText={"sale for all phones!"}
                btnTitle={"Shop Now"}
              />
            </div>
            <div className="gap-y-8 flex flex-col">
              <div className="relative">
                <img
                  src={clockImg}
                  alt={clockImg}
                  className="h-[250px] sm:h-full"
                />
                <Overlay
                  className={
                    "absolute top-1/2 -translate-y-1/2 left-[20px] md:left-[50px] sm:left-[22px]"
                  }
                  AdsHeading={"Electronics Sale"}
                  Discout={"70%"}
                  DiscooutRightText={"sale for all electronics!"}
                  btnTitle={"Shop Now"}
                />
              </div>
              <div className="relative">
                <img
                  src={furnitureImg}
                  alt={furnitureImg}
                  className="h-[250px] sm:h-full"
                />
                <Overlay
                  className={
                    "absolute top-1/2 left-[20px] sm:top-[65px] md:top-1/2 -translate-y-1/2 md:left-[50px] sm:left-[22px] max-[354px]:left-[10px]"
                  }
                  AdsHeading={"Furniture Offer"}
                  Discout={"50%"}
                  DiscooutRightText={"sale for all furniture items!"}
                  btnTitle={"Shop Now"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ads;
