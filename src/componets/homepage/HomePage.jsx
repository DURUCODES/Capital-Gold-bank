import React from "react";
import Hero from "../hero/Hero";
import Sliding from "../sliding/Sliding";
import Rate from "../currencyrate/Rate";
import Benefit from "../benefit/Benefit";
import Testimonies from "../Testimony/Testimonies";
import Blog from "../Blog/Blog";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <Sliding />
      <Rate />
      <Benefit />
      <Testimonies />
      <Blog />
    </div>
  );
};

export default HomePage;
