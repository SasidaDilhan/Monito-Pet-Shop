import React, { useEffect, useState } from "react";
import Banner1 from "../assets/CartBanner.png";
import Banner2 from "../assets/CartBanner2.png";
import { CgPlayButtonO } from "react-icons/cg";
import NavBar from "./NavBar";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { CiFilter } from "react-icons/ci";

import Footer from "./Footer";
import Puppies from "./Puppies";
// import Banner2 from "../assets/CartBanner2.png";

const Cart = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-30 ">
        <NavBar />
      </div>

      <div className="relative md:hidden    p-5">
        <img className="w-full mt-20" src={Banner1} alt="Banner" />

        <div className="absolute inset-10 md:inset-20 flex flex-col space-y-5 top-28">
          <p className="text-black text-[46px] md:text-[60px] font-extrabold">
            One More Friend
          </p>
          <p className="text-black text-[18px] md:text-[24px] font-bold">
            Thousand More Fun!
          </p>
          <p className="text-black text-[12px] md:text-[14px] ">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
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
      <div className="absolute inset-10 md:inset-28 md:flex flex-col hidden items-end p-20  m-auto ">
          <p className="text-white text-[46px] md:text-[60px] md:font-extrabold">
            One More Friend
          </p>
          <p className="text-white text-[28px] md:text-[46px] font-bold">
            Thousand More Fun!
          </p>
          <p className="text-white w-[600px] text-end text-[12px] md:text-[14px] ">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex gap-3 md:gap-5 mt-5">
            <button className="p-2 md:p-3 w-full md:w-[161px] border text-white border-solid border-white rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text[16px]">
              View Intro
              <CgPlayButtonO size={24} />
            </button>
            <button className="border border-solid  bg-white text-black border-black w-full md:w-[161px] rounded-[57px] flex justify-center items-center gap-2 md:gap-4 text-sm">
              Explore Now
            </button>
          </div>
        </div>
        <img className="w-full h-[795px] hidden md:block " src={Banner2} />
        <div className=" flex justify-between items-center mt-10">
          <Select
            label=""
            placeholder="Sort By:"
            labelPlacement="outside"
            className="max-w-[172px] "
            color=""
            disableSelectorIconRotation
          >
            <SelectItem>Popular</SelectItem>
          </Select>
          <div>
            <CiFilter size={24} />
          </div>
        </div>
      <Puppies />
      <Footer />
    </>
  );
};

export default Cart;
