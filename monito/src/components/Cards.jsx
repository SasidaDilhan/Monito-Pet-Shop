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
      <div className="grid grid-cols-2 gap-4">
        {pets?.map((pet) => (
          <div key={pet.id} className=" bg-white rounded-[12px]">
            <div className=" p-4 ">
              <img
                className=" rounded-[10px]"
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
        <button className="p-5 border border-solid border-black  w-full rounded-[57px] flex justify-center items-center gap-4 text-sm">
          View more
          <RiArrowRightSLine size={24} />
        </button>
      </div>
    </>
  );
};

export default Cards;
