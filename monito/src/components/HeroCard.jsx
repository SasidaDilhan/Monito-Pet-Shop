import React from "react";
import HeroBanner from "../assets/HeroBanner.png";
import HeroBanner2 from "../assets/HeroBanner2.png";
import DesktopBanner from "../assets/desk-hero-banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { CgPlayButtonO } from "react-icons/cg";
import "swiper/css";

import "../styles.css";

const HeroCard = () => {
  return (
    <>
      <div className="absolute inset-10 md:inset-28 md:flex flex-col  space-y-5 p-20 w-[752px] hidden">
        <p className="text-custom-blue text-[46px] md:text-[60px] md:font-extrabold">
          One More Friend
        </p>
        <p className="text-custom-blue text-[28px] md:text-[46px] font-bold">
          Thousand More Fun!
        </p>
        <p className="text-black text-[12px] md:text-[14px] ">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="flex gap-3 md:gap-5">
          <button className="p-2 md:p-3 w-full md:w-[161px] border border-solid border-black rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text[16px]">
            View Intro
            <CgPlayButtonO size={24} />
          </button>
          <button className="border border-solid text-white bg-custom-blue border-black w-full md:w-[161px] rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
            Explore Now
          </button>
        </div>
      </div>
      <img className="w-full h-[795px] hidden md:block " src={DesktopBanner} />
      <Swiper className="mySwiper ">
        <SwiperSlide>
          {/* <img className="md:hidden " src={HeroBanner} /> */}

          <div className="relative lg:hidden block md:block">
            <img className="w-full" src={HeroBanner} alt="Banner" />

            <div className="absolute inset-10 md:inset-20 flex flex-col items-center space-y-5 top-16">
              <p className="text-black text-[46px] md:text-[60px] font-extrabold">
                One More Friend
              </p>
              <p className="text-black text-[18px] md:text-[24px] font-bold">
                Thousand More Fun!
              </p>
              <p className="text-black text-[12px] md:text-[14px] text-center">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div className="flex gap-3 md:gap-5">
                <button className="p-2 md:p-3 w-[163px] md:w-[161px] border border-solid border-black rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
                  View Intro
                  <CgPlayButtonO size={24} />
                </button>
                <button className="border border-solid text-white bg-custom-blue border-black  md:w-[161px] w-[163px] rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img className="md:hidden" src={HeroBanner2} /> */}

          <div className="relative lg:hidden block md:block">
            <img className="w-full " src={HeroBanner2} alt="Banner" />

            <div className="absolute inset-10 md:inset-20 flex flex-col items-center space-y-5 top-16">
              <p className="text-black text-[46px] md:text-[60px] font-extrabold">
                One More Friend
              </p>
              <p className="text-black text-[18px] md:text-[24px] font-bold">
                Thousand More Fun!
              </p>
              <p className="text-black text-[12px] md:text-[14px] text-center">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div className="flex gap-3 md:gap-5">
                <button className="p-2 md:p-3 w-[163px] md:w-[161px] border border-solid border-black rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
                  View Intro
                  <CgPlayButtonO size={24} />
                </button>
                <button className="border border-solid text-white bg-custom-blue border-black  md:w-[161px] w-[163px] rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroCard;
