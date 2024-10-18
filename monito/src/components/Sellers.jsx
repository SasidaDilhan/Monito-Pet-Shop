import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Seller1 from "../assets/seller1.png";
import Seller2 from "../assets/seller2.png";
import Seller3 from "../assets/seller3.png";
import Seller4 from "../assets/seller4.png";
import Seller5 from "../assets/seller5.png";
import Seller6 from "../assets/seller6.png";
import Seller7 from "../assets/seller7.png";

const Sellers = () => {
  return (
    <>
      <div className=" hidden md:flex justify-between mb-5">
        <div className=" ps-3 flex justify-center items-center gap-3">
          <p className=" text-[16px]">Proud to be part of </p>
          <p className=" text-[24px] text-custom-blue font-extrabold">Pet Sellers</p>
        </div>
        <button className=" hidden p-3 border border-solid border-black  w-[251px] rounded-[57px] md:flex justify-center items-center gap-4 text-sm">
          View more
          <RiArrowRightSLine size={24} />
        </button>
      </div>
      <div className="hidden  md:flex md:justify-between px-10 mb-5">
        <img width={88} height={64} src={Seller1} />
        <img width={88} height={64} src={Seller7} />
        <img  width={88} height={64} src={Seller2} />
        <img  width={88} height={64} src={Seller3} />
        <img  width={88} height={64} src={Seller4} />
        <img  width={88} height={64} src={Seller5} />
        <img  width={88} height={64} src={Seller6} />
      </div>
    </>
  );
};

export default Sellers;
