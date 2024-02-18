import React from "react";
import Header from "../../Common/Header";
import Intro from "../../Home_Component/Intro/Intro";
import Ads from "../../Home_Component/Ads/Ads";
import Arrival from "../../Home_Component/NewArrival/Arrival";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Ads />
      <Arrival />
    </>
  );
};

export default Home;
