import React, { useEffect, useState } from "react";
import { getMorePets } from "../api/morePets";
import { Link } from "react-router-dom";

const Puppies = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getPetData = async () => {
      try {
        const petData = await getMorePets();
        setPets(petData);
      } catch (error) {
        console.log("fetching pets data failed: " + error);
      }
    };

    getPetData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-4 mb-5 ">
      {pets?.map((pet) => (
        <Link
          to="/one-pet"
          key={pet.id}
          className=" bg-white rounded-[12px] hover:scale-105 duration-300 hover:cursor-pointer"
        >
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
        </Link>
      ))}
    </div>
  );
};

export default Puppies;
