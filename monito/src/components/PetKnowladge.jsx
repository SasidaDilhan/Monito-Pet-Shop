import React from "react";
import { knowladgeData } from "../data/knowladge";
// import image1 from "../assets/image1.png"
import { RiArrowRightSLine } from "react-icons/ri";

const PetKnowladge = () => {
  return (
    <>
      <div className=" space-y-5 p-5 ">
        {knowladgeData.map((data) => (
          <div className=" bg-white rounded-[12px] p-2 flex flex-col space-y-4">
            <img src={data.image} />
            <div className=" text-[10px] rounded-2xl p-2 text-white bg-custom-light-blue text-center w-[89px]">
              Pet Knowladge
            </div>
            <p className=" text-[16px] font-bold ">{data.title}</p>
            <p className=" text-[14px]">{data.description}</p>
          </div>
        ))}
      </div>
      <div className=" p-5">
        <button className="p-5 border-2 border-solid border-black  w-full rounded-[57px] flex justify-center items-center gap-4 text-sm">
          View more
          <RiArrowRightSLine size={24} />
        </button>
      </div>
    </>
  );
};

export default PetKnowladge;
