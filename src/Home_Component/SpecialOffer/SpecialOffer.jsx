import React, { useState } from "react";
import Slider from "react-slick";
import Card from "../../Common/Card";
import Button from "../../Common/Button";
import SpecialOfferData from "../../../SpecialOfferData/SpecialOffer";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

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
        width: "60px",
        height: "60px",
        position: "absolute",
        top: "40%",
        transform: "translateY(-40%)",
        right: "33px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <div className="flex justify-center items-center h-full rounded-full hover:bg-[#b8b8b8] cursor-pointer">
        <FaLongArrowAltRight className="text-lg text-white" />
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
        width: "60px",
        height: "60px",
        position: "absolute",
        top: "40%",
        transform: "translateY(-40%)",
        left: "0",
        borderRadius: "50%",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <div className="flex justify-center items-center h-full rounded-full hover:bg-[#b8b8b8] cursor-pointer">
        <FaLongArrowAltLeft className="text-lg text-white" />
      </div>
    </div>
  );
}

// Slider setting
const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 414,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SpecialOffer = () => {
  const [OfferData, setOfferData] = useState(SpecialOfferData);
  return (
    <>
      <div className="pb-24 px-4 sm:px-0">
        <div className="container">
          <div>
            <h3 className="text-primaryFontColor text-[35px] sm:text-[40px] font-DMsans font-bold pb-12">
              Special Offers
            </h3>
          </div>

          <Slider {...settings}>
            {OfferData?.map((item) => (
              <Card
                img={item.productImg}
                colorVariant={item.color}
                badge={
                  item.badge ? (
                    <Button className={"py-[7px] px-8"}>
                      {item.productStatus}
                    </Button>
                  ) : null
                }
                productTitle={item.title}
                price={item.price}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SpecialOffer;
