import React, { useState } from "react";
import Card from "../../Common/Card";
// import Flex from "../../Common/Flex";
// import product1 from "../../assets/product1.png";
// import product2 from "../../assets/product2.png";
// import product3 from "../../assets/product3.png";
// import product4 from "../../assets/product4.png";
import NewArrivalData from "../../../NewArrivalData/ArrivalData";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        width: "60px",
        height: "60px",
        position: "absolute",
        top: "40%",
        transform: "translateY(-40%)",
        backgroundColor: "#979797",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <div className="flex justify-center items-center h-full cursor-pointer hover:bg-[#b4b4b4] rounded-full">
        <FaLongArrowAltLeft className="text-base text-primaryBgColor" />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        width: "60px",
        height: "60px",
        top: "40%",
        transform: "translateY(-40%)",
        right: "32px",
        position: "absolute",
        zIndex: "1",
        backgroundColor: "#979797",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <div className="flex justify-center items-center h-full cursor-pointer hover:bg-[#b4b4b4] rounded-full">
        <FaLongArrowAltRight className="text-base text-primaryBgColor" />
      </div>
    </div>
  );
}

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Arrival = () => {
  const [arrivalData, setarrivalData] = useState(NewArrivalData);

  return (
    <>
      <div className="bg-sky-600">
        <div className="container">
          <h4 className="text-[40px] font-DMsans font-bold text-primaryFontColor pb-12">
            New Arrivals
          </h4>

          <Slider {...settings}>
            {arrivalData?.map((item) => (
              <Card img={item.productImg} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Arrival;
