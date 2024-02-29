import React, { useState } from "react";
import Card from "../../Common/Card";
import Button from "../../Common/Button";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";
import BestSellerData from "../../../BestSellerData/BestsellerData";

// Next Arrow function
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#979797",
        height: "60px",
        width: "60px",
        position: "absolute",
        top: "40%",
        transform: "translateY(-40%)",
        right: "33px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <div className="flex justify-center h-full items-center cursor-pointer hover:bg-[#b3b3b3] rounded-full">
        <FaLongArrowAltRight className="text-white text-lg" />
      </div>
    </div>
  );
}

// Pre Arrow function
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#979797",
        height: "60px",
        width: "60px",
        position: "absolute",
        top: "40%",
        transform: "translateY(-40%)",
        left: "0",
        borderRadius: "50%",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <div className="flex justify-center h-full items-center cursor-pointer hover:bg-[#b3b3b3] rounded-full">
        <FaLongArrowAltLeft className="text-white text-lg" />
      </div>
    </div>
  );
}

// Slider setting

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Bestseller = () => {
  const [ourBestSellerData, setourBestSellerData] = useState(BestSellerData);
  return (
    <>
      <div>
        <div className="container">
          <div className="pb-32">
            <h4 className="text-[40px] font-DMsans font-bold text-primaryFontColor pb-12">
              Our Bestsellers
            </h4>
            <Slider {...settings}>
              {ourBestSellerData?.map((item) => (
                <Card
                  key={item.id}
                  img={item.productImg}
                  badge={
                    item.badge ? (
                      <Button className={"py-[7px] px-8"}>
                        {item.productStatus}
                      </Button>
                    ) : null
                  }
                  colorVariant={item.color}
                  productTitle={item.title}
                  price={item.price}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestseller;
