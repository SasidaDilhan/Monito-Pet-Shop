import React from "react";
import HeroBanner from "../assets/HeroBanner.png";
import HeroBanner2 from "../assets/HeroBanner2.png";
import DesktopBanner from "../assets/desk-hero-banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../styles.css";

const HeroCard = () => {
  return (
    <>
      <img className="w-full hidden md:block " src={DesktopBanner} />
      <Swiper className="mySwiper ">
        <SwiperSlide>
          <img className="md:hidden " src={HeroBanner} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="md:hidden" src={HeroBanner2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroCard;
