import React from "react";
import Banner1 from "../assets/Banner.png";
import Banner2 from "../assets/Desktop-banner2.png";
import { CgPlayButtonO } from "react-icons/cg";

function Banner() {
  return (
    <>
      <div className="relative lg:hidden block md:block">
        <img className="w-full p-5" src={Banner1} alt="Banner" />

        <div className="absolute inset-10 md:inset-20 flex flex-col items-center space-y-5">
          <p className="text-black text-[24px] md:text-[36px] font-extrabold">
            One More Friend
          </p>
          <p className="text-black text-[18px] md:text-[24px] font-bold">
            Thousand More Fun!
          </p>
          <p className="text-black text-[12px] md:text-[14px] text-center">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex gap-3 md:gap-5">
            <button className="p-2 md:p-3 w-full md:w-[161px] border border-solid border-black rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
              View Intro
              <CgPlayButtonO size={24} />
            </button>
            <button className="border border-solid text-white bg-custom-blue border-black w-full md:w-[161px] rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative p-5 md:p-10 ">
        <img
          className="w-full h-auto p-2 md:p-5 object-cover"
          src={Banner2}
          alt="Banner"
        />

        <div className="absolute inset-10 md:inset-20 flex flex-col items-center md:items-end space-y-3 md:space-y-5  md:p-0 ">
          <p className="text-custom-blue text-[24px] md:text-[12px] lg:text-[36px] font-extrabold text-center md:text-right">
            One More Friend
          </p>
          <p className="text-custom-blue text-[18px] md:text-[24px] font-bold text-center md:text-right">
            Thousand More Fun!
          </p>
          <p className="text-custom-blue text-[12px] md:text-[14px] w-full md:w-[394px] text-center">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <button className="p-2 md:p-3 w-full md:w-[161px] border border-solid border-black rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
              View Intro
              <CgPlayButtonO size={24} />
            </button>
            <button className="border border-solid text-white bg-custom-blue border-black w-full md:w-[161px] rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
