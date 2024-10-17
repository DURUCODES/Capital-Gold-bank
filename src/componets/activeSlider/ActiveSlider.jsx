import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FaAngleRight, FaHandHoldingUsd } from "react-icons/fa";

const ActiveSlider = () => {
  const cardData = [
    {
      title: "Money Transfer",
      description:
        "Without digital, you may send money to relatives and friends all over the world",
    },
    {
      title: "Money Transfer",
      description:
        "Without digital, you may send money to relatives and friends all over the world",
    },
    {
      title: "Money Transfer",
      description:
        "Without digital, you may send money to relatives and friends all over the world",
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[#6c34af]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="shadow-xl p-8 rounded-xl flex flex-col bg-white">
              <div className="flex items-center mb-4">
                <FaHandHoldingUsd className="text-[45px] text-[#db2777] mr-4" />
                <p className="text-2xl font-semibold">{card.title}</p>
              </div>
              <div>
                <p>{card.description}</p>
              </div>
              <div className="flex items-center my-2 text-[#db2777] cursor-pointer">
                <a>SEND MONEY</a>
                <span className="ml-2">
                  <FaAngleRight />
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
