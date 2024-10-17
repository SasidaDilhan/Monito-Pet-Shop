import React from "react";
import HeroBanner from "../assets/HeroBanner.png";
import HeroBanner2 from "../assets/HeroBanner2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../styles.css";

const HeroCard = () => {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <img src={HeroBanner} />
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroBanner2} />
          
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroCard;
