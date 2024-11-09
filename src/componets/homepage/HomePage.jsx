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
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      className=" overflow-hidden"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Fade in to opacity 1
      transition={{
        duration: 3, // Duration of the fade-in
        delay: 0.5, // Add delay before starting the fade-in
        ease: "easeOut", // Smooth easing effect
      }}
    >
      <Hero />
      <Sliding />
      <Digital />
      <Carousel />
      <ChoseUs />
      <Rate />
      <Benefit />
      <Testimonies />
      <Blog />
    </motion.div>
  );
};

export default HomePage;
