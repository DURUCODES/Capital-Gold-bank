import React from "react";
import Slider from "react-slick";
import { FaHandHoldingUsd, FaAngleRight } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";
import { IoPersonAddSharp } from "react-icons/io5";
import { icons } from "lucide-react";

const Carousel = () => {
  const cards = [
    {
      id: 1,
      icon: FaHandHoldingUsd,
      title: "Money Transfer",
      content:
        "Without digital, you may send money to relatives and friends all over the world.",
      option: "SEND MONEY",
    },
    {
      id: 2,
      icon: FaChartLine,
      title: "Current Charts",
      content:
        "You can always watch the markets movement and trade decisions without currency.",
      option: "VIEW CHARTS",
    },
    {
      id: 3,
      icon: RiAlarmWarningFill,

      title: "Rate Alert",
      content:
        "Enable our Clients to convert; we provide the finest currency rate in the market.",
      option: "CREATE ALERT",
    },
    {
      id: 4,
      icon: IoPersonAddSharp,
      title: "Create Account",
      content:
        "Create a free digital bank account with USD today to send money all around the world.",
      option: "GET STARTED",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" mb-16">
      <div className="text-center my-10">
        <h2 className="text-[#db2777] wideyy">POPULAR CURRENCY TOOLS</h2>
        <h1 className="text-black font-semibold md:text-[30px] text-[20px] ">
          Set Up & Exchange Money From Your Cards In A Minute
        </h1>
      </div>
      <Slider {...settings}>
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.id} className="w-full mb-5 relative ">
              <div className="relative  bg-white transition-all duration-200 cursor-pointer  shadow-md items-center  px-4 py-0 overflow-hidden group   rounded-xl  mx-4">
                <div className="py-4">
                  <div className="">
                    <div className="flex items-center mb-4">
                      <span>
                        <Icon className="text-[24px] text-[#db2777] font-light relative z-10 transition-colors duration-200 group-hover:text-white  mr-2" />
                      </span>
                      <span className=" relative z-10 transition-colors duration-200 group-hover:text-white font-semibold">
                        {card.title}
                      </span>
                    </div>
                    <div className=" ">
                      <p className="  text-[14px] font-light relative z-10 transition-colors duration-200 group-hover:text-white ">
                        {card.content}
                      </p>
                    </div>
                  </div>
                  <div className="flex  items-center my-4">
                    <span className=" relative z-10 transition-colors duration-200 group-hover:text-white text-[18px] font-semibold mr-2">
                      {card.option}
                    </span>
                    <p>
                      <FaAngleRight className="text-[20px] text-[#ca3377] relative z-10 transition-colors duration-200 group-hover:text-white" />
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-[#db2777] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
