import React from "react";
import Slider from "react-slick";
import alex from "../public/image/testimonyimage/alex.avif";
import tom from "../public/image/testimonyimage/tom.avif";
import santos from "../public/image/testimonyimage/santos.avif";
import harry from "../public/image/testimonyimage/harry.avif";
import tracy from "../public/image/testimonyimage/tracy.avif";
import { MdSecurity } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";

const Testimonies = () => {
  const testimony = [
    {
      id: 1,
      image: alex,
      quote: FaQuoteRight,
      name: "Alex Cruise",
      position: "CEO/IBAC",
      content:
        "I opened a savings and checking account at Capital Gold Bank in Oregon. The Teller who helped me was a pleasure to work with; she made my day a pleasant day. Thank you for the terrific customer service.",
    },
    {
      id: 2,
      image: tom,
      quote: FaQuoteRight,
      name: "Tom Harris",
      position: "Engineer/Olleo",
      content:
        "Capital GOLD Bank has an awesome team and a dedicated staff. I am very impressed by their vision, hard work, outstanding performance, and wonderful teammates. Their reputation is well-earned.",
    },
    {
      id: 3,
      image: santos,
      quote: FaQuoteRight,
      name: "Rocky Living",
      position: "Realtor",
      content:
        "I have been using Capital GOLD Bank since I was 16 years old. Wonderful staff and fast technology. If I had a problem, they fix it right away. I’m loving it and I plan on sticking with them for life. Good job, guys! 👍🏼",
    },
    {
      id: 4,
      image: harry,
      quote: FaQuoteRight,
      name: "Harry Kane",
      position: "Enterprenuer",
      content:
        "The sweetest, most accommodating, professional, proficient bank in the United States. I have never encountered a bank that totally helps and understands their customers. The manager at Rivero Trust Bank is ABSOLUTELY the best ever.",
    },
    {
      id: 5,
      image: tracy,
      quote: FaQuoteRight,
      name: "Tracy Bob",
      position: "IT Consultant",
      content:
        "It’s rare to discover a bank that genuinely cares about the people it serves, and Rivero Trust Bank is that kind of bank. They’ve always shown me kindness, respect, and a friendly smile. I can’t recommend them enough for all your banking needs – you won’t be disappointed!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    <div className="px-4 w-full">
      <div className="text-center mb-5 py-4 ">
        <h3 className="md:text-xl font-semibold text-[#db2777] mb-2 ">
          OUR REVIEWS
        </h3>
        <h1 className="md:text-2xl font-bold">
          More Than 18M+ Happy Customers Trust Our Services
        </h1>
      </div>
      <Slider {...settings} className="mb-10">
        {testimony.map((testimonyItem) => {
          const QuoteIcon = testimonyItem.quote;
          return (
            <div key={testimonyItem.id} className="w-full mb-5 relative ">
              <div className="relative  bg-white transition-all duration-200 cursor-pointer  shadow-md items-center  px-4 py-4 overflow-hidden group md:h-[300px] h-[400px]   mx-4">
                <div className="flex items-center mb-10 justify-between ">
                  <div className="flex items-center">
                    <img
                      src={testimonyItem.image}
                      alt={testimonyItem.name}
                      className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] rounded-full group-hover:z-10 object-fit"
                    />
                    <div className="ml-4 ">
                      <h2 className="font-semibold md:text-[20px] text-[18px] font-sans relative z-10 transition-colors duration-200 group-hover:text-white">
                        {testimonyItem.name}
                      </h2>
                      <p className="  text-[14px] font-light relative z-10 transition-colors duration-200 group-hover:text-white ">
                        {testimonyItem.position}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p>
                      <QuoteIcon className="text-[33px] text-[#dc9cb9] relative z-10 transition-colors duration-200 group-hover:text-white" />
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-[#db2777] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
                <div>
                  <p className="relative z-10 transition-colors duration-200 group-hover:text-white">
                    {testimonyItem.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonies;
