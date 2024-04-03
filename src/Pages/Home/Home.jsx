import React from "react";
import Intro from "../../Home_Component/Intro/Intro";
import Ads from "../../Home_Component/Ads/Ads";
import Arrival from "../../Home_Component/NewArrival/Arrival";
import Bestseller from "../../Home_Component/Bestseller/Bestseller";
import Ads2 from "../../Home_Component/Ads2/Ads2";
import SpecialOffer from "../../Home_Component/SpecialOffer/SpecialOffer";

const Home = () => {
  return (
    <>
      <Intro />
      <Ads />
      <Arrival />
      <Bestseller />
      <Ads2 />
      <SpecialOffer />
    </>
  );
};

export default Home;
