import React, { useEffect, useState } from "react";
import { getPets } from "../api/petsAPI";
import { RiArrowRightSLine } from "react-icons/ri";

const Cards = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getPetData = async () => {
      try {
        const petData = await getPets();
        setPets(petData);
      } catch (error) {
        console.log("fetching pets data failed: " + error);
      }
    };

    getPetData();
  }, []);

  return (
    <>
      <div className=" flex justify-between p-10">
      <div className=" ps-3">
        <p className=" text-sm">Whats new?</p>
        <p className=" text-lg font-bold">Take A Look At Some Of Our Pets</p>
      </div>
      <button className=" p-5 border border-solid border-black  w-[251px] rounded-[57px] flex justify-center items-center gap-4 text-sm">
          View more
          <RiArrowRightSLine size={24} />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-4 p-10 ">
        {pets?.map((pet) => (
          <div key={pet.id} className=" bg-white rounded-[12px]">
            <div className=" p-4 ">
              <img
                className=" rounded-[10px] md:w-full"
                src={pet.image}
                alt={pet.breed}
              />
              <div className=" space-y-3">
                <p className=" font-bold text-sm">
                  {pet.id} - {pet.breed}
                </p>
                <p>
                  Gender : <span>{pet.gender}</span>
                </p>
                <p>
                  Age : <span>{pet.age}</span>
                </p>
                <p className=" font-bold text-[16px]">Price : {pet.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" p-5">
        <button className=" md:hidden p-5 border border-solid border-black  w-full rounded-[57px] flex justify-center items-center gap-4 text-sm">
          View more
          <RiArrowRightSLine size={24} />
        </button>
      </div>
    </>
  );
};

export default Cards;
