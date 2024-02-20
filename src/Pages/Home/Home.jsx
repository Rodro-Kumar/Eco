import React from "react";
import Header from "../../Common/Header";
import Intro from "../../Home_Component/Intro/Intro";
import Ads from "../../Home_Component/Ads/Ads";
import Arrival from "../../Home_Component/NewArrival/Arrival";
import Bestseller from "../../Home_Component/Bestseller/Bestseller";
import Ads2 from "../../Home_Component/Ads2/Ads2";
import SpecialOffer from "../../Home_Component/SpecialOffer/SpecialOffer";
import Footer from "../../Common/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Ads />
      <Arrival />
      <Bestseller />
      <Ads2 />
      <SpecialOffer />
      <Footer />
    </>
  );
};

export default Home;
