import React from "react";
import Card from "../../Common/Card";
import Flex from "../../Common/Flex";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";
import product7 from "../../assets/product7.png";
import product8 from "../../assets/product8.png";

const Bestseller = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="pb-32">
            <h4 className="text-[40px] font-DMsans font-bold text-primaryFontColor pb-12">
              Our Bestsellers
            </h4>
            <Flex className={"gap-x-9"}>
              <Card productImg={product5} />
              <Card productImg={product6} />
              <Card productImg={product7} />
              <Card productImg={product8} />
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestseller;
