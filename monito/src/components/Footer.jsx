import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

import { FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div
        className="w-full h-[400px] p-3 md:p-20 "
        style={{
          background:
            "linear-gradient(90deg, #FCEED5 6%, #FCEED5 75%, #FFE7BA 100%)",
        }}
      >
        <div className=" w-[362px] h-[244px] bg-custom-blue rounded-[16px] p-5 mt-5 md:w-full md:h-[126px] md:flex md:justify-between">
          <p className=" text-white text-[20px] md:w-[589px]">
            Register now so you don't miss our programs
          </p>
          <div className="bg-white w-[320px] h-[132px] rounded-[14px] p-2 space-y-4 flex flex-col items-center justify-center md:flex-row md:space-y-0 md:space-x-4 md:w-[720px] md:h-[72px]">
            <input
              type="text"
              className="pl-10 p-2 border w-full border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[506px]"
              placeholder="Enter Your Email"
            />
            <button className="bg-custom-blue text-white w-full h-[48px] md:w-[183px] md:h-[42px] rounded-[8px]">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className=" md:flex">
          <div className=" w-full  flex gap-3 items-center mt-5 font-bold">
            <div>Home</div>
            <div>Category</div>
            <div>About</div>
            <div>Contact</div>
          </div>
          <div className="flex justify-center gap-6 my-6 mb-10">
            <div className="p-1 border border-gray-300">
              <FaFacebookSquare size={30} />
            </div>
            <div className="p-1 border border-gray-300">
              <FaInstagram size={30} />
            </div>
            <div className="p-1 border border-gray-300">
              <FaTwitterSquare size={30} />
            </div>
            <div className="p-1 border border-gray-300">
              <FaYoutube size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
