import React from "react";
import Banner1 from "../assets/Banner.png";
import { CgPlayButtonO } from "react-icons/cg";

function Banner() {
  return (
    <div className="relative ">
      <img className="w-full p-5" src={Banner1} alt="Banner" />

      <div className="absolute inset-20 flex flex-col items-center space-y-5">
        <p className="text-black text-[36px] font-extrabold">One More Friend</p>
        <p className="text-black text-[24px] font-bold">Thousand More Fun!</p>
        <p className="text-black text-[12px]  text-center">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className=" flex gap-5">
          <button  className="p-3 w-[161px] border border-solid border-black   rounded-[57px] flex justify-center items-center gap-4 text-sm">
            View Intro
            <CgPlayButtonO size={24}/>
          </button>
          <button className=" border border-solid text-white bg-custom-blue border-black w-[161px] rounded-[57px] flex justify-center items-center gap-4 text-sm">
            View Intro
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
