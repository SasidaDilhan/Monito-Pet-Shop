import React from "react";
import Banner from "../assets/MiddleBaner.png";
import { CgPlayButtonO } from "react-icons/cg";
import Vector from "../assets/Vector.png";
const MiddleBanner = () => {
  return (
    <>
    
      <div className="relative hidden  md:block">
        <img className="w-full p-5" src={Banner} alt="Banner" />

        <div className="absolute inset-10 md:inset-20 flex flex-col items-start space-y-8 ">
          <div className=" flex gap-4">
            <p className=" text-[24px] md:text-[52px] font-extrabold text-custom-blue">
              Adoption
            </p>
            <img width={42} height={38} src={Vector} />
          </div>
          <p className=" text-[18px] md:text-[36px] font-bold text-custom-blue">
            We Need Help. So Do They.
          </p>
          <p className="text-black text-[12px] md:text-[14px] md:w-[394px]">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex gap-3 md:gap-5 ">
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
    </>
  );
};

export default MiddleBanner;
