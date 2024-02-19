import React from "react";

import Card from "../../Common/Card";
import Flex from "../../Common/Flex";
import smartWatch from "../../assets/smartwatch.png";

const Arrival = () => {
  return (
    <>
      <div>
        <div className="container">
          <Flex className="pb-32 gap-x-10">
            <Card tag={"10%"} productCategotyTitle={" "} />
            <Card productImg={smartWatch} />
            <Card />
            <Card />
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Arrival;
