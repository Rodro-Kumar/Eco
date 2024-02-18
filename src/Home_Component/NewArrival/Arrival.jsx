import React from "react";
import Card from "../../Common/Card";
import Flex from "../../Common/Flex";

const Arrival = () => {
  return (
    <>
      <div>
        <div className="container">
          <Flex className="pb-32 gap-x-10">
            <Card />
            <Card />
            <Card />
            <Card />
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Arrival;
