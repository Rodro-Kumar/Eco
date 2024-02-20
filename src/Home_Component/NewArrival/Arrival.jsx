import React from "react";
import Card from "../../Common/Card";
import Flex from "../../Common/Flex";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";

const Arrival = () => {
  return (
    <>
      <div>
        <div className="container">
          <h4 className="text-[40px] font-DMsans font-bold text-primaryFontColor pb-12">
            New Arrivals
          </h4>
          <Flex className="pb-32 gap-x-10">
            <Card
              tag={"10%"}
              productImg={product1}
              productCategotyTitle={" "}
            />
            <Card productImg={product2} />
            <Card productImg={product3} />
            <Card productImg={product4} />
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Arrival;
