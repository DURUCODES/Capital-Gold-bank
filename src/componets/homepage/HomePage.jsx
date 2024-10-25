import React from "react";
import Hero from "../hero/Hero";
import Sliding from "../sliding/Sliding";
import Rate from "../currencyrate/Rate";
import Benefit from "../benefit/Benefit";
import Testimonies from "../Testimony/Testimonies";
import Blog from "../Blog/Blog";
import Digital from "../Digital/Digital";
import ChoseUs from "../ChoseUs/ChoseUs";
import Carousel from "../carousel/Carousel";
import Scroll from "../scrol/Scroll";

const HomePage = () => {
  return (
    <div className=" overflow-hidden">
      <Hero />
      <Sliding />
      <Digital />
      <Carousel />
      <ChoseUs />
      <Rate />
      <Benefit />
      <Testimonies />
      <Blog />
    </div>
  );
};

export default HomePage;
