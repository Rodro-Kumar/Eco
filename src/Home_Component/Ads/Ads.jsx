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
              <Overlay
                className={"absolute top-0"}
                AdsHeading={"Phones Sale"}
                Discout={"30%"}
                DiscooutRightText={"sale for all phones!"}
                btnTitle={"Shop Now"}
              />
            </div>
            <div className="gap-y-8 flex flex-col">
              <div className="relative">
                <img src={clockImg} alt={clockImg} />
                <Overlay
                  className={"absolute top-0"}
                  AdsHeading={"Electronics Sale"}
                  Discout={"70%"}
                  DiscooutRightText={"sale for all electronics!"}
                  btnTitle={"Shop Now"}
                />
              </div>
              <div className="relative">
                <img src={furnitureImg} alt={furnitureImg} />
                <Overlay
                  className={"absolute top-0"}
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
