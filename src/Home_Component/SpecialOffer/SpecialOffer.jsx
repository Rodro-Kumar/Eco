import React from "react";
import Flex from "../../Common/Flex";
import Card from "../../Common/Card";
import product9 from "../../assets/product9.png";
import product10 from "../../assets/product10.png";
import product11 from "../../assets/product11.png";
import product12 from "../../assets/product12.png";

const SpecialOffer = () => {
  return (
    <>
      <div>
        <div className="container">
          <Flex className={"gap-x-9 pb-28"}>
            <Card productImg={product9} />
            <Card productImg={product10} />
            <Card productImg={product11} />
            <Card productImg={product12} />
          </Flex>
        </div>
      </div>
    </>
  );
};

export default SpecialOffer;
