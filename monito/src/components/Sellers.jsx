import React from "react";

import Seller1 from "../assets/seller1.png";
import Seller2 from "../assets/seller2.png";
import Seller3 from "../assets/seller3.png";
import Seller4 from "../assets/seller4.png";
import Seller5 from "../assets/seller5.png";
import Seller6 from "../assets/seller6.png";

const Sellers = () => {
  return (
    <>
      <div className=" hidden md:flex items-center gap-2">
        <p className=" text-[16px]">Proud to be part of </p>
        <p className="text-[24px] font-bold" >Pet Seller</p>
      </div>
      <div className="hidden ">
        <img src={Seller1} />
        <img src={Seller2} />
        <img src={Seller3} />
        <img src={Seller4} />
        <img src={Seller5} />
        <img src={Seller6} />
      </div>
    </>
  );
};

export default Sellers;
