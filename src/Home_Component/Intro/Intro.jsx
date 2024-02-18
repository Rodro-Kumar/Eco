import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import twoImg from "../../assets/2.png";
import slider1 from "../../assets/slider1.png";
import { FaTruck } from "react-icons/fa";
import { IoReloadOutline } from "react-icons/io5";

const Intro = () => {
  // slider settings
  var settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "100px",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          padding: "15px 0",
        }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img src={slider1} alt={slider1} />
          </div>
          <div>
            <img src={slider1} alt={slider1} />
          </div>
          <div>
            <img src={slider1} alt={slider1} />
          </div>
          <div>
            <img src={slider1} alt={slider1} />
          </div>
        </Slider>
      </div>

      <div className="border-b-2 border-[#cccccc6b]">
        <div className="container">
          <div className="py-7 flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <img src={twoImg} alt={twoImg} />
              <p className="text-base font-DMsans font-normal text-thirdFontColor">
                Two years warranty
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <FaTruck className="text-2xl" />
              <p className="text-base font-DMsans font-normal text-thirdFontColor">
                Free shipping
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <IoReloadOutline className="text-2xl" />
              <p className="text-base font-DMsans font-normal text-thirdFontColor">
                Return policy in 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
